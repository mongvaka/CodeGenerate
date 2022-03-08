import { StyleType } from "../../../shared/constans";
import { getColumnName } from "../../../shared/function";
import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class SchemaTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getSchemaTemplate() {
    this.initialDataSchema();
    return this.template;
  }
  private initialDataSchema() {
    this.template.push(
      `export abstract class Sc${this.moduleName} extends BaseSchema {`
    );
    this.template.push(
      `  static readonly tb_name: string = "${this.moduleNameSnakeNonTable}_table";`
    );
    this.template.push(`  static readonly tb = {`);

    this.masterList.forEach((item) => {
      const columnSanke: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.template.push(
        `    ${columnSanke}: ` +
          "${" +
          `Sc${this.moduleName}.tb_name}.${columnSanke},`
      );
    });

    this.template.push(
      `    company_uuid: ` +
        "${" +
        `Sc${this.moduleName}.tb_name}.company_uuid,`
    );
    this.template.push(
      `    branch_uuid: ` + "${" + `Sc${this.moduleName}.tb_name}.branch_uuid,`
    );
    this.template.push(
      `    ref_uuid: ` + "${" + `Sc${this.moduleName}.tb_name}.ref_uuid,`
    );
    this.template.push(
      `    ref_type: ` + "${" + `Sc${this.moduleName}.tb_name}.ref_type,`
    );
    this.template.push(
      `    is_active: ` + "${" + `Sc${this.moduleName}.tb_name}.is_active,`
    );
    this.template.push(
      `    create_by: ` + "${" + `Sc${this.moduleName}.tb_name}.create_by,`
    );
    this.template.push(
      `    create_date: ` + "${" + `Sc${this.moduleName}.tb_name}.create_date,`
    );
    this.template.push(
      `    update_by: ` + "${" + `Sc${this.moduleName}.tb_name}.update_by,`
    );
    this.template.push(
      `    update_date: ` + "${" + `Sc${this.moduleName}.tb_name}.update_date,`
    );
    this.template.push(`  };`);
    this.template.push(`  static readonly jn = {`);

    this.masterList.forEach((item) => {
      const columnSanke: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.template.push(
        `    ${columnSanke}: ` +
          "`${" +
          `Sc${this.moduleName}.tb_name}.${columnSanke},`
      );

      this.template.push(
        `    ${columnSanke}: ` +
          "`${" +
          `Sc${this.moduleName}.tb_name}_${columnSanke}` +
          `,`
      );
    });
    this.template.push(
      `    company_uuid: ` +
        "`${" +
        `Sc${this.moduleName}.tb_name}_company_uuid` +
        `,`
    );
    this.template.push(
      `    branch_uuid: ` +
        "`${" +
        `Sc${this.moduleName}.tb_name}_branch_uuid` +
        `,`
    );
    this.template.push(
      `    ref_uuid: ` + "`${" + `Sc${this.moduleName}.tb_name}_ref_uuid` + `,`
    );
    this.template.push(
      `    ref_type: ` + "`${" + `Sc${this.moduleName}.tb_name}_ref_type` + `,`
    );
    this.template.push(
      `    is_active: ` +
        "`${" +
        `Sc${this.moduleName}.tb_name}_is_active` +
        `,`
    );
    this.template.push(
      `    create_by: ` + "${" + `Sc${this.moduleName}.tb_name}_create_by` + `,`
    );
    this.template.push(
      `    create_date: ` +
        "`${" +
        `Sc${this.moduleName}.tb_name}_create_date` +
        `,`
    );
    this.template.push(
      `    update_by: ` +
        "`${" +
        `Sc${this.moduleName}.tb_name}_update_by` +
        `,`
    );
    this.template.push(
      `    update_date: ` +
        "`${" +
        `Sc${this.moduleName}.tb_name}_update_date` +
        `,`
    );
    this.template.push(`  };`);

    this.masterList.forEach((item) => {
      const columnSanke: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.template.push(
        `  static readonly ${columnSanke}: string = ` + `${columnSanke}` + `;`
      );
    });
    this.template.push(
      `  static readonly company_uuid: string = ` + `company_uuid` + `;`
    );
    this.template.push(
      `  static readonly branch_uuid: string = ` + `branch_uuid` + `;`
    );
    this.template.push(
      `  static readonly ref_uuid: string = ` + `ref_uuid` + `;`
    );
    this.template.push(
      `  static readonly ref_type: string = ` + `ref_type` + `;`
    );
    this.template.push(
      `  static readonly is_active: string = ` + `is_active` + `;`
    );
    this.template.push(
      `  static readonly create_by: string = ` + `create_by` + `;`
    );
    this.template.push(
      `  static readonly create_date: string = ` + `create_date` + `;`
    );
    this.template.push(
      `  static readonly update_by: string = ` + `update_by` + `;`
    );
    this.template.push(
      `  static readonly update_date: string = ` + `update_date` + `;`
    );
    this.template.push(`}`);
  }
}
