import {
  getColumnName,
  getPrimaryColumn,
  getTableName,
  getUpperCase,
} from "./../function";
import { CellItemModel } from "../../model/cellModel";
import { StyleType } from "../constans";
export class BaseClass {
  primaryColumn: string;
  moduleName: string;
  moduleNameSnakeNonTable: string;
  moduleNameSnake: string;
  moduleNameCamel: string;
  moduleNameUpper: string;
  tableNamePascal: string;
  tableNameCamel: string;
  tableNameSnake: string;
  constructor(masterList: CellItemModel[]) {
    this.tableNamePascal = getTableName(StyleType.PASCAL, masterList);
    this.tableNameCamel = getTableName(StyleType.CAMEL, masterList);
    this.tableNameSnake = getTableName(StyleType.SNAKE, masterList);
    this.primaryColumn = getPrimaryColumn(StyleType.SNAKE, masterList);
    this.moduleName = this.tableNamePascal
      .replace("Table", "")
      .replace("_table", "");
    this.moduleNameUpper = this.moduleName.toUpperCase();
    this.moduleNameSnake = getColumnName(StyleType.SNAKE, this.moduleName);
    this.moduleNameSnakeNonTable = this.moduleNameSnake.replace("_table", "");
    this.moduleNameCamel = getColumnName(StyleType.CAMEL, this.moduleName);
  }
}
