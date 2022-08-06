import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppListHtmlTemp extends BaseBoonwattanaClass {
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
    this.t.push(`<m-data-table`);
    this.t.push(`(searchEmit)="onSearch($event)"`);
    this.t.push(`[option]="option"`);
    this.t.push(`[dataSource] = "searchResult"`);
    this.t.push(`[searchCondition] = 'searchConditions'`);
    this.t.push(`[tableName]="tableName"`);
    this.t.push(`(createEmit) = "onCreate()"`);
    this.t.push(`(editEmit)="onEdit($event)"`);
    this.t.push(`(viewEmit)="onView($event)"`);
    this.t.push(`(deleteEmit)="onDelete($event)"`);
    this.t.push(`[removeRecord] = "lastRemoveId"`);
    this.t.push(`[moduleName] = moduleName`);
    this.t.push(`></m-data-table>`);
  }
}
