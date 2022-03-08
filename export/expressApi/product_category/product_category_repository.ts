import { CompanyTable } from "./../entity/CompanyTable";
import { ProductCategoryTable } from "../entity/ProductCategoryTable";
import { Request } from "express";
import { ProductCategoryViewModel } from "../view_model";
import { getRepository, UpdateResult } from "typeorm";
import { BaseRepository } from "./baseRepository";
import { SearchParameter, SelectItems } from "../system_model";
import { ScProductCategory } from "../schema/ScProductCategory";
import { Uuid } from "../shared/tools/value_function";
import { ScCompany } from "../schema/ScCompany";
export class ProductCategoryRepository extends BaseRepository {
  constructor(req: Request) {
    super(req);
  }
  private productcategoryRepository = getRepository(ProductCategoryTable);
  getQueryBuilder(conditionString: string) {
    return this.productcategoryRepository
      .createQueryBuilder()
      .select(ScProductCategory.tb.product_category_uuid, ScProductCategory.product_category_uuid)
      .addSelect(ScProductCategory.tb.product_category_name, ScProductCategory.product_category_name)
      .addSelect(ScProductCategory.tb.product_category_description, ScProductCategory.product_category_description)
      .from(ProductCategoryTable, ScProductCategory.tb_name)
      .where(conditionString)
      .distinct();
  }
  async getProductCategoryList(searchParameter: SearchParameter): Promise<any> {
    const conditionString: string = this.getConditionString(
      ScProductCategory.tb_name,
      searchParameter,
      false
    );
    const conditionCountString: string = this.getConditionString(
      ScProductCategory.tb_name,
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
  async create(model: ProductCategoryViewModel): Promise<any> {
    model.product_category_uuid = Uuid.newUuid();
    this.setSystemCreateFeild(model);
    return this.productcategoryRepository.save(model);
  }
  async getById(id: string): Promise<any> {
    const result = await this.productcategoryRepository
      .createQueryBuilder()
      .select(ScProductCategory.tb.product_category_uuid, ScProductCategory.product_category_uuid)
      .addSelect(ScProductCategory.tb.product_category_name, ScProductCategory.product_category_name)
      .addSelect(ScProductCategory.tb.product_category_description, ScProductCategory.product_category_description)

      .addSelect(ScProductCategory.tb.create_date, ScProductCategory.create_date)
      .addSelect(ScProductCategory.tb.update_date, ScProductCategory.update_date)
      .addSelect(ScProductCategory.tb.update_by, ScProductCategory.update_by)
      .addSelect(ScProductCategory.tb.create_by, ScProductCategory.create_by)

      .from(ProductCategoryTable, ScProductCategory.tb_name)
      .where(`${ScProductCategory.tb.product_category_uuid} = ${id}`)
      .distinct()
      .getRawOne();
    return result;
  }
  async edit(id: string, model: ProductCategoryViewModel): Promise<UpdateResult> {
    return this.productcategoryRepository.update(id, model);
  }
  async delete(id: string): Promise<UpdateResult> {
    let model: ProductCategoryTable = (await this.productcategoryRepository.findOne(id)) as ProductCategoryTable;
    model.is_active = false;
    return await this.productcategoryRepository.update(id, model);
  }
  async getDropdown(searchParameter: SearchParameter): Promise<any> {
    let selecteItem: SelectItems[] = [];
    const conditionString: String = this.getConditionString(
      ScProductCategory.tb_name,
      searchParameter,
      false
    );
    const result = await this.productcategoryRepository
      .createQueryBuilder()
      .select(ScProductCategory.tb.product_category_uuid, ScProductCategory.product_category_uuid)
      .addSelect(ScProductCategory.tb.product_category_name, ScProductCategory.product_category_name)
      .addSelect(ScProductCategory.tb.product_category_description, ScProductCategory.product_category_description)
      .from(ProductCategoryTable, ScProductCategory.tb_name)
      .where(conditionString)
      .distinct()
      .getRawMany();
    result.forEach((model: ProductCategoryViewModel) => {
      const label = this.getLabel(model.product_category_name, model.product_category_description);
      const singleSelectItem: SelectItems = this.getSingleSelectItem(
        model.product_category_uuid,
        label,
        model
      );
      selecteItem.push(singleSelectItem);
    });
    return selecteItem;
  }
}
