import { ColumnTypeNest } from "../../../shared/constans";
import { CellItemModel } from "./../../../model/cellModel";
export class BaseNestClass {
  moduleName: string;
  camelCase: string;
  pascalCae: string;
  snakeCase: string;
  fileName: string;
  lowerCase: string;
  descriptionID: string;

  constructor(masterList: CellItemModel[]) {
    this.moduleName = masterList[0].tableName;
    this.descriptionID = masterList[0].description;
    this.snakeCase = this.getSnakeCase(this.moduleName);
    this.pascalCae = this.getPascalCase(this.snakeCase);
    this.camelCase = this.getCamelCase(this.pascalCae);

    this.fileName = this.getFileCase(this.snakeCase);
    this.lowerCase = this.getLowerCase(this.snakeCase);
  }
  getLowerCase(snakeCase: string): string {
    try {
      console.log(snakeCase);

      return snakeCase.split("_").join("");
    } catch (e) {
      console.log(e);
    }
  }
  getFileCase(snakeCase: string): string {
    try {
      console.log(snakeCase);

      return snakeCase.split("_").join("-");
    } catch (e) {
      console.log(e);
    }
  }
  getSnakeCase(moduleName: string): string {
    return moduleName.toLocaleLowerCase();
  }
  getPascalCase(snakeCase: string): string {
    console.log("strArr:", snakeCase);

    const strArr = snakeCase.split("_");
    console.log("strArr:", strArr);

    let temp = "";
    strArr.forEach((item) => {
      temp = temp + item.charAt(0).toUpperCase() + item.slice(1);
    });
    return temp;
  }
  getCamelCase(snakeCase: string): string {
    const camelCase =
      snakeCase.charAt(0).toLocaleLowerCase() + snakeCase.slice(1);
    console.log("camelCase:", camelCase);

    return camelCase;
  }
  getDataType(datadaseType: string): string {
    switch (datadaseType) {
      case ColumnTypeNest.BOOLEAN:
        return "bit";
      case ColumnTypeNest.DATE:
        return "timestamp";
      case ColumnTypeNest.DECIMAL:
        return "decimal";
      case ColumnTypeNest.DECIMAL14_4:
        return "decimal";
      case ColumnTypeNest.INT:
        return "bigint";
      case ColumnTypeNest.VARCHAR:
        return "varchar";
      case ColumnTypeNest.TEXT:
        return "varchar";
      default:
        console.log("error : Data type out of range :", datadaseType);
        return "varchar";
    }
  }
  getTypeScriptDataType(datadaseType: string): string {
    switch (datadaseType) {
      case ColumnTypeNest.BOOLEAN:
        return "boolean";
      case ColumnTypeNest.DATE:
        return "Date";
      case ColumnTypeNest.DECIMAL:
        return "number";
      case ColumnTypeNest.DECIMAL14_4:
        return "number";
      case ColumnTypeNest.INT:
        return "number";
      case ColumnTypeNest.VARCHAR:
        return "string";
      case ColumnTypeNest.TEXT:
        return "string";
      default:
        console.log("error : Data type out of range :", datadaseType);
        return "any";
    }
  }
  getDataTypeUpper(datadaseType: string): string {
    switch (datadaseType) {
      case ColumnTypeNest.BOOLEAN:
        return "Boolean";
      case ColumnTypeNest.DATE:
        return "Date";
      case ColumnTypeNest.DECIMAL:
        return "Number";
      case ColumnTypeNest.DECIMAL14_4:
        return "Number";
      case ColumnTypeNest.INT:
        return "Number";
      case ColumnTypeNest.VARCHAR:
        return "String";
      case ColumnTypeNest.TEXT:
        return "String";
      default:
        console.log("error : Data type out of range :", datadaseType);
        return "String";
    }
  }
}
