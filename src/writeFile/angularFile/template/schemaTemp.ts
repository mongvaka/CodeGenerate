import { getNameRemoveTable, getPascalCase } from "../../../shared/function";
import { CellItemModel } from "../../../model/cellModel";
import { ControlType, StyleType, DataType } from "../../../shared/constans";
import {
  getComponent,
  getConfig,
  getColumnName,
  removeFirstRow,
} from "../../../shared/function";
import { BaseClass } from "../../../shared/sharedClass/baseClass";

export class SchemaTemp extends BaseClass {
  private masterList: CellItemModel[];
  private masterGroupList: string[];
  private template: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.template = [];
    this.masterList = masterList;
  }
  getSchemaData(): string[] {
    console.log("getSchemaData : ");

    this.initialCustomComData();
    return this.template;
  }

  private initialCustomComData() {
    this.template.push(`    export abstract class Sc${this.tableNamePascal} {`);
    this.template.push(
      `
      static readonly tb_name: string = ${"`"}${this.moduleNameSnake}${"`"};`
    );
    this.template.push(`      static readonly tb = {`);

    // add all field
    this.masterList.forEach((item) => {
      const fieldName = getColumnName(StyleType.SNAKE, item.columnName);
      this.template.push(
        `${fieldName}: ` +
          "`" +
          `${"${Sc" + this.tableNamePascal}.tb_name` +
          "}" +
          `.${fieldName}` +
          "`" +
          `,`
      );
    });
    this.template.push(
      `    company_uuid: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.company_uuid` +
        "`,"
    );
    this.template.push(
      `    branch_uuid: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.branch_uuid` +
        "`,"
    );
    this.template.push(
      `    ref_uuid: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.ref_uuid` +
        "`,"
    );
    this.template.push(
      `    ref_type: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.ref_type` +
        "`,"
    );
    this.template.push(
      `    is_active: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.is_active` +
        "`,"
    );
    this.template.push(
      `    create_by: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.create_by` +
        "`,"
    );
    this.template.push(
      `    create_date: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.create_date` +
        "`,"
    );
    this.template.push(
      `    update_by: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.update_by` +
        "`,"
    );
    this.template.push(
      `    update_date: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}.update_date` +
        "`,"
    );
    // add all field

    this.template.push(`      };`);
    this.template.push(`      static readonly jn = {`);

    // add all field
    this.masterList.forEach((item) => {
      const fieldName = getColumnName(StyleType.SNAKE, item.columnName);
      this.template.push(
        `${fieldName}: ` +
          "`" +
          `${"${Sc" + this.tableNamePascal}.tb_name` +
          "}" +
          `_${fieldName}` +
          "`" +
          `,`
      );
    });
    this.template.push(
      `    ref_uuid: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}_ref_uuid` +
        "`,"
    );
    this.template.push(
      `    ref_type: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}_ref_type` +
        "`,"
    );
    this.template.push(
      `    is_active: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}_is_active` +
        "`,"
    );
    this.template.push(
      `    create_by: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}_create_by` +
        "`,"
    );
    this.template.push(
      `    create_date: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}_create_date` +
        "`,"
    );
    this.template.push(
      `    update_by: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}_update_by` +
        "`,"
    );
    this.template.push(
      `    update_date: ` +
        "`${" +
        `Sc${this.tableNamePascal}.tb_name}_update_date` +
        "`,"
    );
    // add all field
    this.template.push(`      };`);
    // add all field
    this.masterList.forEach((item) => {
      const fieldName = getColumnName(StyleType.SNAKE, item.columnName);
      this.template.push(
        `static readonly ${fieldName}: string = ` +
          "`" +
          `${fieldName}` +
          "`" +
          ``
      );
    });
    this.template.push(
      `  static readonly company_uuid: string = ` + "`company_uuid`" + `;`
    );
    this.template.push(
      `  static readonly branch_uuid: string = ` + "`branch_uuid`" + `;`
    );
    this.template.push(
      `  static readonly ref_uuid: string = ` + "`ref_uuid`" + `;`
    );
    this.template.push(
      `  static readonly ref_type: string = ` + "`ref_type`" + `;`
    );
    this.template.push(
      `  static readonly is_active: string = ` + "`is_active`" + `;`
    );
    this.template.push(
      `  static readonly create_by: string = ` + "`create_by`" + `;`
    );
    this.template.push(
      `  static readonly create_date: string = ` + "`create_date`" + `;`
    );
    this.template.push(
      `  static readonly update_by: string = ` + "`update_by`" + `;`
    );
    this.template.push(
      `  static readonly update_date: string = ` + "`update_date`" + `;`
    );
    // add all field

    this.template.push(`    }`);
  }
}
