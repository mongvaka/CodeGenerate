import { CellBwModel, CellItemModel, Groups } from "src/model/cellModel";
import { ColumnTypeNest, InputDataType, InputType } from "../../../shared/constans";
export class BaseBoonwattanaClass {
  moduleName: string;
  camelCase: string;
  pascalCae: string;
  snakeCase: string;
  fileName: string;
  lowerCase: string;
  descriptionID: string;
  foreigns:CellBwModel[]
  enums:CellBwModel[]
  lists:CellBwModel[]
  items:CellBwModel[]
  searchs:CellBwModel[]
  groups:Groups[]

  constructor(masterList: CellBwModel[]) {    
    this.moduleName = masterList[0].TABLE_NAME;
    this.descriptionID = masterList[0].TABLE_LABEL;
    this.snakeCase = this.getSnakeCase(this.moduleName);
    this.pascalCae = this.getPascalCase(this.snakeCase);
    this.camelCase = this.getCamelCase(this.pascalCae);
    this.fileName = this.getFileCase(this.snakeCase);
    this.lowerCase = this.getLowerCase(this.snakeCase);
    this.foreigns = this.getForeigns(masterList);
    this.enums = this.getEnums(masterList);
    this.lists = this.getLists(masterList);
    this.items = this.getItems(masterList);
    this.searchs = this.getSearchs(masterList);
    this.groups = this.getGroups(masterList)
  }
  getGroups(masterList: CellBwModel[]): Groups[] {
    const groups:Groups[] = []
    masterList.forEach((el,index)=>{
      const model = groups.find(fn=>fn.groupName == el.GROUP_NAME)
      const numIndex = this.getNumIndex(groups,el.GROUP_NAME)
      if(model){
        if(groups[numIndex].child){
          groups[numIndex].child.push(el)

        }else{

          groups[index].child.push(el)

        }
      }else{
        let group:Groups = {
          groupName : el.GROUP_NAME,
          ordering:el.GROUP_ORDER,
          child : [el]
        }
        groups.push(group)

      }

    })
    return groups
  }
  getNumIndex(groups: Groups[], GROUP_NAME: string) {
    let index = 0
    groups.forEach((el,dex )=>{
      if(el.groupName == GROUP_NAME){
        index =dex
      }
    })
    return index;

  }
  getSearchs(masterList: CellBwModel[]): CellBwModel[] {
    return masterList.filter(fl=>fl.SEARCH)
  }
  getItems(masterList: CellBwModel[]): CellBwModel[] {
    return masterList.filter(fl=>fl.COLUMN_ORDER)
  }
  getLists(masterList: CellBwModel[]): CellBwModel[] {
    return masterList.filter(fl=>fl.LIST_ORDER)
  }
  getEnums(masterList: CellBwModel[]): CellBwModel[] {
    return masterList.filter(fl=>fl.INPUT_TYPE == InputDataType.ENUM)
  }
  getForeigns(masterList: CellBwModel[]): CellBwModel[] {
    return masterList.filter(fl=>fl.INPUT_TYPE == InputDataType.FOREIGN)
  }
  getLowerCase(snakeCase: string): string {
    try {
      if(snakeCase){
        return snakeCase.split("_").join("");

      }else{
        return 'null'
      }
    } catch (e) {
      console.log(e);
    }
  }
  getFileCase(snakeCase: string): string {
    try {
      if(snakeCase){
        return snakeCase.split("_").join("-");

      }else{
        return 'null'
      }
    } catch (e) {
      console.log(e);
    }
  }
  getSnakeCase(moduleName: string): string {
    if(moduleName){
      return moduleName.toLocaleLowerCase();

    }else{
      return 'null'
    }
  }
  getUpperCase(moduleName: string): string {
    if(moduleName){
      return moduleName.toLocaleUpperCase();

    }else{
      return 'null'
    }
  }
  getPascalCase(snakeCase: string): string {
    if(snakeCase){
      // const strArr = snakeCase.split("_");
      // let temp = "";
      // strArr.forEach((item) => {
      //   temp = temp + item.charAt(0).toUpperCase() + item.slice(1);
      // });
      // return temp;

      let convertLv1 = snakeCase
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  let convertLv2 = convertLv1.replace(/\s/g, "");
  return convertLv2;
    }else{
      return 'null'
    }

    
  }
  getCamelCase(snakeCase: string): string {
    if(snakeCase){

    return snakeCase.toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());;
    }else{
      return 'null'
    }

    
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
      case InputDataType.ENUM:
        return "number";
      case InputDataType.FOREIGN:
        return "number";
      case InputDataType.DECIMAL2:
        return "number";
      case InputDataType.DECIMAL4:
        return "number";
      case InputDataType.DECIMAL0:
        return "number";
      case InputDataType.DATE:
        return "Date";
      case InputDataType.TIME:
        return "string";
      case InputDataType.BOOLEAN:
        return "boolean";
      case InputDataType.SHOT_TEXT:
        return "string";
      case InputDataType.LONG_TEXT:
        return "string";
      case InputDataType.EMAIL:
        return "string";
      case InputDataType.PHONE:
        return "string";
      default:
        console.log("error : Data type out of range :", datadaseType);
        return "any";
    }
  }
  getInputType(datadaseType: string): string {
    switch (datadaseType) {
      case InputDataType.ENUM:
        return "ENUM";
      case InputDataType.FOREIGN:
        return "ENUM";
      case InputDataType.DECIMAL2:
        return "DECIMAL_2";
      case InputDataType.DECIMAL4:
        return "DECIMAL_4";
      case InputDataType.DECIMAL0:
        return "INT";
      case InputDataType.DATE:
        return "DATE";
      case InputDataType.TIME:
        return "TIME";
      case InputDataType.BOOLEAN:
        return "BOOLEAN";
      case InputDataType.SHOT_TEXT:
        return "STRING";
      case InputDataType.LONG_TEXT:
        return "STRING";
      case InputDataType.EMAIL:
        return "STRING";
      case InputDataType.PHONE:
        return "STRING";
      default:
        console.log("error : Data type out of range :", datadaseType);
        return "STRING";
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
