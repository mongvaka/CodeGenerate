import { CellItemModel } from "./../model/cellModel";
import fs from "fs";
import {
  ColumnType,
  ComponentName,
  ConfigType,
  ControlType,
  ConvertMethod,
  DataType,
  InputType,
  ModelAgFieldType,
  ModelDartFieldType,
  PostgresDataType,
  StyleType,
} from "./constans";

export const demo1Function = () => {
  console.log("demo1Function");
};
export const demo2Function = () => {
  console.log("demo2Function");
};
export const getPrimaryColumn = (
  styleType: StyleType,
  masterList: CellItemModel[]
) => {
  if (masterList) {
    if (masterList[0]) {
      if (masterList[0].columnName == null) {
        return "Masterlist[0].tableName is null";
      }
    } else {
      return "Masterlist[0] is null";
    }
  } else {
    return "Masterlist is null";
  }
  switch (styleType) {
    case StyleType.CAMEL:
      return getCamelCase(masterList[0].columnName);
    case StyleType.PASCAL:
      return getPascalCase(masterList[0].columnName);
    case StyleType.SNAKE:
      return getSnakeCase(masterList[0].columnName);
    case StyleType.UPPER:
      return getUpperCase(masterList[0].columnName);
    default:
      return "Type not validate";
  }
};
export const getTableName = (
  styleType: StyleType,
  masterList: CellItemModel[]
): string => {
  if (masterList) {
    if (masterList[1]) {
      if (masterList[1].tableName == null) {
        return "Masterlist[1].tableName is null";
      }
    } else {
      return "Masterlist[1] is null";
    }
  } else {
    return "Masterlist is null";
  }
  switch (styleType) {
    case StyleType.CAMEL:
      return getCamelCase(masterList[1].tableName);
    case StyleType.PASCAL:
      return getPascalCase(masterList[1].tableName);
    case StyleType.SNAKE:
      return getSnakeCase(masterList[1].tableName);
    case StyleType.UPPER:
      return getUpperCase(masterList[1].tableName);
    default:
      return "Type not validate";
  }
};
export const getColumnName = (
  styleType: StyleType,
  columnName: string
): string => {
  if (columnName) {
    switch (styleType) {
      case StyleType.CAMEL:
        return getCamelCase(columnName);
      case StyleType.PASCAL:
        return getPascalCase(columnName);
      case StyleType.SNAKE:
        return getSnakeCase(columnName);
      case StyleType.UPPER:
        return getUpperCase(columnName);
      default:
        return "Type not validate";
    }
  } else {
    return "Column is null";
  }
};
export const getCamelCase = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
export const getPascalCase = (text: string) => {
  let convertLv1 = text
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  let convertLv2 = convertLv1.replace(/\s/g, "");
  return convertLv2;
};
export const getSnakeCase = (text: string) => {
  let convertLv1 = text.replace(/[A-Z]/g, (letter, index) => {
    return index == 0 ? letter.toLowerCase() : "_" + letter.toLowerCase();
  });
  let convertLv2 = convertLv1.replace(/\s/g, "_");
  return convertLv2;
};
export const getUpperCase = (text: string) => {
  return text.toUpperCase();
};
export const getComponent = (controlType: string) => {
  switch (controlType) {
    case ControlType.DATE:
      return ComponentName.DATE;
    case ControlType.TIME:
      return ComponentName.TIME;
    case ControlType.INPUT_TEXT:
      return ComponentName.INPUT_TEXT;
    case ControlType.INPUT_NUMBER:
      return ComponentName.INPUT_NUMBER;
    case ControlType.INPUT_SWITCH:
      return ComponentName.INPUT_SWITCH;
    case ControlType.INPUT_TEXT_AREA:
      return ComponentName.INPUT_TEXT_AREA;
    case ControlType.DROPDOWN:
      return ComponentName.DROPDOWN;
    case ControlType.FILE_UPLOAD:
      return ComponentName.FILE_UPLOAD;
    default:
      return "Default case";
  }
};
export const getConfig = (dataType: string) => {
  switch (dataType) {
    case DataType.UUID:
      return ConfigType.DEFAULT_DROPDOWN;
    case DataType.TIME:
      return ConfigType.DEFAULT_INPUTTEXT_AREA;
    case DataType.SHOT_TEXT:
      return ConfigType.DEFAULT_INPUTTEXT;
    case DataType.INT:
      return ConfigType.INTEGER;
    case DataType.DOUBLE:
      return ConfigType.CURRENCY_13_2;
    case DataType.DATE_TIME:
      return ConfigType.DATETIME;
    case DataType.BOOLEAN:
      return ConfigType.DEFAULT_INPUTSWITCH;
    default:
      return ConfigType.DEFAULT_INPUTTEXT;
  }
};
export const createDirectories = (path: string) => {
  console.log("createDirectories");

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
};
export const removeFirstRow = (masterList: CellItemModel[]) => {
  return masterList.filter((value, index) => index != 0);
};
export const getAgularFieldType = (dataType: string) => {
  switch (dataType) {
    case DataType.BOOLEAN:
      return ModelAgFieldType.BOOLEAN;
    case DataType.DATE_TIME:
      return ModelAgFieldType.STRING;
    case DataType.DOUBLE:
      return ModelAgFieldType.NUMBER;
    case DataType.INT:
      return ModelAgFieldType.NUMBER;
    case DataType.LONG_TEXT:
      return ModelAgFieldType.STRING;
    case DataType.SHOT_TEXT:
      return ModelAgFieldType.STRING;
    case DataType.TIME:
      return ModelAgFieldType.STRING;
    case DataType.UUID:
      return ModelAgFieldType.STRING;
    default:
      return ModelAgFieldType.ANY;
  }
};
export const getDartFieldType = (dataType: string) => {
  switch (dataType) {
    case DataType.BOOLEAN:
      return ModelDartFieldType.BOOLEAN;
    case DataType.DATE_TIME:
      return ModelDartFieldType.STRING;
    case DataType.DOUBLE:
      return ModelDartFieldType.DOUBLE;
    case DataType.INT:
      return ModelDartFieldType.INT;
    case DataType.LONG_TEXT:
      return ModelDartFieldType.STRING;
    case DataType.SHOT_TEXT:
      return ModelDartFieldType.STRING;
    case DataType.TIME:
      return ModelDartFieldType.STRING;
    case DataType.UUID:
      return ModelDartFieldType.STRING;
    default:
      return ModelDartFieldType.DYNAMIC;
  }
};
export const getPostgresDataType = (dataType: string) => {
  switch (dataType) {
    case DataType.BOOLEAN:
      return PostgresDataType.BOOLEAN;
    case DataType.DATE_TIME:
      return PostgresDataType.DATE_TIME;
    case DataType.DOUBLE:
      return PostgresDataType.DOUBLE;
    case DataType.INT:
      return PostgresDataType.INTEGER;
    case DataType.LONG_TEXT:
      return PostgresDataType.STRING;
    case DataType.SHOT_TEXT:
      return PostgresDataType.STRING;
    case DataType.TIME:
      return PostgresDataType.TIME;
    case DataType.UUID:
      return PostgresDataType.STRING;
    default:
      return PostgresDataType.STRING;
  }
};
export const getNameRemoveTable = (text: string) => {
  return text.replace("_table", "").replace("_Table", "").replace("Table", "");
};
export const getColumnType = (dataType: string) => {
  switch (dataType) {
    case DataType.BOOLEAN:
      return ColumnType.BOOLEAN;
    case DataType.DATE_TIME:
      return ColumnType.DATE;
    case DataType.DOUBLE:
      return ColumnType.DECIMAL;
    case DataType.INT:
      return ColumnType.INT;
    case DataType.LONG_TEXT:
      return ColumnType.STRING;
    case DataType.SHOT_TEXT:
      return ColumnType.STRING;
    case DataType.TIME:
      return ColumnType.STRING;
    case DataType.UUID:
      return ColumnType.MASTER;
    default:
      return ColumnType.STRING;
  }
};
export const getConvertMethod = (dataType: string): string => {
  switch (dataType) {
    case DataType.BOOLEAN:
      return ConvertMethod.BOOLEAN;
    case DataType.DATE_TIME:
      return ConvertMethod.DATE;
    case DataType.DOUBLE:
      return ConvertMethod.DOUBLE;
    case DataType.INT:
      return ConvertMethod.INT;
    case DataType.LONG_TEXT:
      return ConvertMethod.STRING;
    case DataType.SHOT_TEXT:
      return ConvertMethod.STRING;
    case DataType.TIME:
      return ConvertMethod.STRING;
    case DataType.UUID:
      return ConvertMethod.STRING;
    default:
      return ConvertMethod.STRING;
  }
};
export const getInputType =(dataType:string)=>{
  switch(dataType){
    case DataType.BOOLEAN:
      return InputType.BOOLEAN;
    case DataType.DATE_TIME:
      return InputType.DATE;
    case DataType.DOUBLE:
      return InputType.DOUBLE;
    case DataType.INT:
      return InputType.INT;
    case DataType.LONG_TEXT:
      return InputType.STRING;
    case DataType.SHOT_TEXT:
      return InputType.STRING;
    case DataType.TIME:
      return InputType.DATE;
    case DataType.UUID:
      return InputType.UUID;
    default:
      return InputType.STRING;
  }
}
