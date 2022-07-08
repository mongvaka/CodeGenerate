import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppModelTemp extends BaseBoonwattanaClass {
  private masterList: CellItemModel[];
  private t: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.t = [];
  }
  getTemplate() {
    this.initialDataItemPage();
    return this.t;
  }
  private initialDataItemPage() {
    this.t.push(`export class DemoListModel{`);
    this.t.push(`    id:number`);
    this.t.push(`    demoEmail: string;`);
    this.t.push(`    demoNumber: number;`);
    this.t.push(`    demoDate: Date;`);
    this.t.push(`    demoEnum: string;`);
    this.t.push(`}`);
    this.t.push(`export class DemoItemModel{`);
    this.t.push(`    id:number`);
    this.t.push(`    demoEmail: string;`);
    this.t.push(`    demoNumber: number;`);
    this.t.push(`    demoDate: Date;`);
    this.t.push(`    demoEnum: number;`);
    this.t.push(`    isActive:boolean`);
    this.t.push(`}`);
  }
}
