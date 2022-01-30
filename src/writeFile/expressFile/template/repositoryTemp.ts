import { StyleType } from "../../../shared/constans";
import { getColumnName } from "../../../shared/function";
import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class RepositoryTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getRepositoryTemplate() {
    this.initialDataRepository();
    return this.template;
  }
  private initialDataRepository() {
    this.template.push(
      `import { CompanyTable } from "./../entity/CompanyTable";`
    );
    this.template.push(
      `import { ${this.moduleName}Table } from "../entity/${this.moduleName}Table";`
    );
    this.template.push(`import { Request } from "express";`);
    this.template.push(
      `import { ${this.moduleName}ViewModel } from "../view_model";`
    );
    this.template.push(
      `import { getRepository, UpdateResult } from "typeorm";`
    );
    this.template.push(`import { BaseRepository } from "./baseRepository";`);
    this.template.push(
      `import { SearchParameter, SelectItems } from "../system_model";`
    );
    this.template.push(
      `import { Sc${this.moduleName} } from "../schema/Sc${this.moduleName}";`
    );
    this.template.push(
      `import { Uuid } from "../shared/tools/value_function";`
    );
    this.template.push(`import { ScCompany } from "../schema/ScCompany";`);
    this.template.push(
      `export class ${this.moduleName}Repository extends BaseRepository {`
    );
    this.template.push(`  constructor(req: Request) {`);
    this.template.push(`    super(req);`);
    this.template.push(`  }`);
    this.template.push(
      `  private ${this.moduleNameCamel}Repository = getRepository(${this.moduleName}Table);`
    );
    this.template.push(`  getQueryBuilder(conditionString: string) {`);
    this.template.push(`    return this.${this.moduleNameCamel}Repository`);
    this.template.push(`      .createQueryBuilder()`);

    this.masterList.forEach((item, index) => {
      const columnName = getColumnName(StyleType.SNAKE, item.columnName);
      if (index === 0) {
        this.template.push(
          `      .select(Sc${this.moduleName}.tb.${columnName}, Sc${this.moduleName}.${columnName})`
        );
      } else {
        if (item.listViewOrdering != null) {
          this.template.push(
            `      .addSelect(Sc${this.moduleName}.tb.${columnName}, Sc${this.moduleName}.${columnName})`
          );
        }
      }
    });
    this.template.push(
      `      .from(${this.moduleName}Table, Sc${this.moduleName}.tb_name)`
    );
    this.template.push(`      .where(conditionString)`);
    this.template.push(`      .distinct();`);
    this.template.push(`  }`);
    this.template.push(
      `  async get${this.moduleName}List(searchParameter: SearchParameter): Promise<any> {`
    );
    this.template.push(
      `    const conditionString: string = this.getConditionString(`
    );
    this.template.push(`      Sc${this.moduleName}.tb_name,`);
    this.template.push(`      searchParameter,`);
    this.template.push(`      false`);
    this.template.push(`    );`);
    this.template.push(
      `    const conditionCountString: string = this.getConditionString(`
    );
    this.template.push(`      Sc${this.moduleName}.tb_name,`);
    this.template.push(`      searchParameter,`);
    this.template.push(`      true`);
    this.template.push(`    );`);
    this.template.push(
      `    const result = this.getQueryBuilder(conditionString);`
    );
    this.template.push(
      `    const resultCount = this.getQueryBuilder(conditionCountString);`
    );
    this.template.push(`    let totalRec: number = 0;`);
    this.template.push(`    totalRec = await resultCount.getCount();`);
    this.template.push(`    const rows = await result.getRawMany();`);
    this.template.push(
      `    return this.toSearchResult(rows, totalRec, searchParameter);`
    );
    this.template.push(`  }`);
    this.template.push(
      `  async create(model: ${this.moduleName}ViewModel): Promise<any> {`
    );
    this.template.push(`    model.${this.primaryColumn} = Uuid.newUuid();`);
    this.template.push(`    this.setSystemCreateFeild(model);`);
    this.template.push(
      `    return this.${this.moduleNameCamel}Repository.save(model);`
    );
    this.template.push(`  }`);
    this.template.push(`  async getById(id: string): Promise<any> {`);
    this.template.push(
      `    const result = await this.${this.moduleNameCamel}Repository`
    );
    this.template.push(`      .createQueryBuilder()`);

    this.masterList.forEach((item, index) => {
      const columnName = getColumnName(StyleType.SNAKE, item.columnName);
      if (index === 0) {
        this.template.push(
          `      .select(Sc${this.moduleName}.tb.${columnName}, Sc${this.moduleName}.${columnName})`
        );
      } else {
        this.template.push(
          `      .addSelect(Sc${this.moduleName}.tb.${columnName}, Sc${this.moduleName}.${columnName})`
        );
      }
    });
    this.template.push(``);
    this.template.push(
      `      .addSelect(Sc${this.moduleName}.tb.create_date, Sc${this.moduleName}.create_date)`
    );
    this.template.push(
      `      .addSelect(Sc${this.moduleName}.tb.update_date, Sc${this.moduleName}.update_date)`
    );
    this.template.push(
      `      .addSelect(Sc${this.moduleName}.tb.update_by, Sc${this.moduleName}.update_by)`
    );
    this.template.push(
      `      .addSelect(Sc${this.moduleName}.tb.create_by, Sc${this.moduleName}.create_by)`
    );
    this.template.push(``);
    this.template.push(
      `      .from(${this.moduleName}Table, Sc${this.moduleName}.tb_name)`
    );
    this.template.push(
      "      .where(`${Sc" +
        this.moduleName +
        `.tb.${this.primaryColumn}} = ` +
        "${id}" +
        "`)"
    );
    this.template.push(`      .distinct()`);
    this.template.push(`      .getRawOne();`);
    this.template.push(`    return result;`);
    this.template.push(`  }`);
    this.template.push(
      `  async edit(id: string, model: ${this.moduleName}ViewModel): Promise<UpdateResult> {`
    );
    this.template.push(
      `    return this.${this.moduleNameCamel}Repository.update(id, model);`
    );
    this.template.push(`  }`);
    this.template.push(`  async delete(id: string): Promise<UpdateResult> {`);
    this.template.push(
      `    let model: ${this.moduleName}Table = (await this.${this.moduleNameCamel}Repository.findOne(id)) as ${this.moduleName}Table;`
    );
    this.template.push(`    model.is_active = false;`);
    this.template.push(
      `    return await this.${this.moduleNameCamel}Repository.update(id, model);`
    );
    this.template.push(`  }`);
    this.template.push(
      `  async getDropdown(searchParameter: SearchParameter): Promise<any> {`
    );
    this.template.push(`    let selecteItem: SelectItems[] = [];`);
    this.template.push(
      `    const conditionString: String = this.getConditionString(`
    );
    this.template.push(`      Sc${this.moduleName}.tb_name,`);
    this.template.push(`      searchParameter,`);
    this.template.push(`      false`);
    this.template.push(`    );`);
    this.template.push(
      `    const result = await this.${this.moduleNameCamel}Repository`
    );
    this.template.push(`      .createQueryBuilder()`);
    this.template.push(
      `      .select(Sc${this.moduleName}.tb.${this.primaryColumn}, Sc${this.moduleName}.${this.primaryColumn})`
    );
    this.masterList.forEach((item) => {
      if (item.lookupOrdering != null) {
        const columnName = getColumnName(StyleType.SNAKE, item.columnName);

        this.template.push(
          `      .addSelect(Sc${this.moduleName}.tb.${columnName}, Sc${this.moduleName}.${columnName})`
        );
      }
    });
    this.template.push(
      `      .from(${this.moduleName}Table, Sc${this.moduleName}.tb_name)`
    );
    this.template.push(`      .where(conditionString)`);
    this.template.push(`      .distinct()`);
    this.template.push(`      .getRawMany();`);
    this.template.push(
      `    result.forEach((model: ${this.moduleName}ViewModel) => {`
    );

    const columnName1: string = this.masterList.find(
      (value) => value.lookupOrdering == 1
    ).columnName;
    const columnName2: string = this.masterList.find(
      (value) => value.lookupOrdering == 2
    ).columnName;
    const firstLabel: string = getColumnName(StyleType.SNAKE, columnName1);
    const secondLabel: string = getColumnName(StyleType.SNAKE, columnName2);

    this.template.push(
      `      const label = this.getLabel(model.${firstLabel}, model.${secondLabel});`
    );
    this.template.push(
      `      const singleSelectItem: SelectItems = this.getSingleSelectItem(`
    );
    this.template.push(`        model.${this.primaryColumn},`);
    this.template.push(`        label,`);
    this.template.push(`        model`);
    this.template.push(`      );`);
    this.template.push(`      selecteItem.push(singleSelectItem);`);
    this.template.push(`    });`);
    this.template.push(`    return selecteItem;`);
    this.template.push(`  }`);
    this.template.push(`}`);
  }
}
