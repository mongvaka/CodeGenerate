import { CompanyTable } from "./../entity/CompanyTable";
import { CustomerTable } from "../entity/CustomerTable";
import { Request } from "express";
import { CustomerViewModel } from "../view_model";
import { getRepository, UpdateResult } from "typeorm";
import { BaseRepository } from "./baseRepository";
import { SearchParameter, SelectItems } from "../system_model";
import { ScCustomer } from "../schema/ScCustomer";
import { Uuid } from "../shared/tools/value_function";
import { ScCompany } from "../schema/ScCompany";
export class CustomerRepository extends BaseRepository {
  constructor(req: Request) {
    super(req);
  }
  private customerRepository = getRepository(CustomerTable);
  getQueryBuilder(conditionString: string) {
    return this.customerRepository
      .createQueryBuilder()
      .select(ScCustomer.tb.customer_uuid, ScCustomer.customer_uuid)
      .addSelect(ScCustomer.tb.customer_code, ScCustomer.customer_code)
      .addSelect(ScCustomer.tb.customer_name, ScCustomer.customer_name)
      .addSelect(ScCustomer.tb.address_uuid, ScCustomer.address_uuid)
      .addSelect(ScCustomer.tb.tax_uuid, ScCustomer.tax_uuid)
      .addSelect(ScCustomer.tb.bank_uuid, ScCustomer.bank_uuid)
      .from(CustomerTable, ScCustomer.tb_name)
      .where(conditionString)
      .distinct();
  }
  async getCustomerList(searchParameter: SearchParameter): Promise<any> {
    const conditionString: string = this.getConditionString(
      ScCustomer.tb_name,
      searchParameter,
      false
    );
    const conditionCountString: string = this.getConditionString(
      ScCustomer.tb_name,
      searchParameter,
      true
    );
    const result = this.getQueryBuilder(conditionString);
    const resultCount = this.getQueryBuilder(conditionCountString);
    let totalRec: number = 0;
    totalRec = await resultCount.getCount();
    const rows = await result.getRawMany();
    return this.toSearchResult(rows, totalRec, searchParameter);
  }
  async create(model: CustomerViewModel): Promise<any> {
    model.customer_uuid = Uuid.newUuid();
    this.setSystemCreateFeild(model);
    return this.customerRepository.save(model);
  }
  async getById(id: string): Promise<any> {
    const result = await this.customerRepository
      .createQueryBuilder()
      .select(ScCustomer.tb.customer_uuid, ScCustomer.customer_uuid)
      .addSelect(ScCustomer.tb.customer_code, ScCustomer.customer_code)
      .addSelect(ScCustomer.tb.customer_branch_uuid, ScCustomer.customer_branch_uuid)
      .addSelect(ScCustomer.tb.customer_category_uuid, ScCustomer.customer_category_uuid)
      .addSelect(ScCustomer.tb.customer_name, ScCustomer.customer_name)
      .addSelect(ScCustomer.tb.address_uuid, ScCustomer.address_uuid)
      .addSelect(ScCustomer.tb.credit_term, ScCustomer.credit_term)
      .addSelect(ScCustomer.tb.description, ScCustomer.description)
      .addSelect(ScCustomer.tb.tax_uuid, ScCustomer.tax_uuid)
      .addSelect(ScCustomer.tb.bank_uuid, ScCustomer.bank_uuid)

      .addSelect(ScCustomer.tb.create_date, ScCustomer.create_date)
      .addSelect(ScCustomer.tb.update_date, ScCustomer.update_date)
      .addSelect(ScCustomer.tb.update_by, ScCustomer.update_by)
      .addSelect(ScCustomer.tb.create_by, ScCustomer.create_by)

      .from(CustomerTable, ScCustomer.tb_name)
      .where(`${ScCustomer.tb.customer_uuid} = ${id}`)
      .distinct()
      .getRawOne();
    return result;
  }
  async edit(id: string, model: CustomerViewModel): Promise<UpdateResult> {
    return this.customerRepository.update(id, model);
  }
  async delete(id: string): Promise<UpdateResult> {
    let model: CustomerTable = (await this.customerRepository.findOne(id)) as CustomerTable;
    model.is_active = false;
    return await this.customerRepository.update(id, model);
  }
  async getDropdown(searchParameter: SearchParameter): Promise<any> {
    let selecteItem: SelectItems[] = [];
    const conditionString: String = this.getConditionString(
      ScCustomer.tb_name,
      searchParameter,
      false
    );
    const result = await this.customerRepository
      .createQueryBuilder()
      .select(ScCustomer.tb.customer_uuid, ScCustomer.customer_uuid)
      .addSelect(ScCustomer.tb.customer_code, ScCustomer.customer_code)
      .addSelect(ScCustomer.tb.customer_name, ScCustomer.customer_name)
      .from(CustomerTable, ScCustomer.tb_name)
      .where(conditionString)
      .distinct()
      .getRawMany();
    result.forEach((model: CustomerViewModel) => {
      const label = this.getLabel(model.customer_code, model.customer_name);
      const singleSelectItem: SelectItems = this.getSingleSelectItem(
        model.customer_uuid,
        label,
        model
      );
      selecteItem.push(singleSelectItem);
    });
    return selecteItem;
  }
}
