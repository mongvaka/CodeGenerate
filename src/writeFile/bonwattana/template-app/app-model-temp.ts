import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppModelTemp extends BaseBoonwattanaClass {
  private masterList: CellBwModel[];
  private t: string[];
  constructor(masterList: CellBwModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.t = [];
  }
  getTemplate() {
    this.initialDataItemPage();
    return this.t;
  }
  private initialDataItemPage() {
    this.t.push(`export class ${this.pascalCae}ListModel{`);
    this.t.push(`    id:number`);
    this.lists.forEach(el=>{
      const columnName =  this.getCamelCase(el.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(el.INPUT_TYPE)
      this.t.push(`    ${columnName}: ${fieldType};`);
    })
    this.t.push(`}`);
    this.t.push(`export class ${this.pascalCae}ItemModel{`);
    this.t.push(`    id:number`);
    this.items.forEach(el=>{
      const columnName =  this.getCamelCase(el.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(el.INPUT_TYPE)
      this.t.push(`    ${columnName}: ${fieldType};`);
    })
    this.t.push(`}`);
  }
}
