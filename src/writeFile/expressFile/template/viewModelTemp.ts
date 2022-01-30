import { CellItemModel } from "./../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { getAgularFieldType, getColumnName } from "../../../shared/function";
import { StyleType } from "../../../shared/constans";
export class ViewModelTemp extends BaseClass {
  private masterList: CellItemModel[];
  private templateItem: string[];
  private templateList: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.templateItem = [];
    this.templateList = [];
  }
  getItemModelTemplate() {
    this.initialDataItemModel();
    return this.templateItem;
  }
  getListModelTemplate() {
    this.initialListModel();
    return this.templateList;
  }
  private initialListModel() {
    const masterListFilter: CellItemModel[] = this.masterList
      .filter((value) => value.listViewOrdering != null)
      .sort((a, b) => a.listViewOrdering - b.listViewOrdering);
    this.templateList.push(`export class ${this.moduleName}ListViewModel {`);
    masterListFilter.forEach((item) => {
      const columnSanke: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      const fieldType = getAgularFieldType(item.dataType);
      this.templateList.push(`  ${columnSanke}: ${fieldType};`);
    });
    this.templateList.push(`}`);
  }
  private initialDataItemModel() {
    this.templateItem.push(
      `export class ${this.moduleName}ViewModel extends BaseCompanyView {`
    );
    this.masterList.forEach((item) => {
      const columnSanke: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      const fieldType = getAgularFieldType(item.dataType);
      this.templateItem.push(`  ${columnSanke}: ${fieldType};`);
    });

    this.templateItem.push(`  constructor(json: any) {`);
    this.templateItem.push(`    super();`);
    this.masterList.forEach((item) => {
      const columnSanke: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateItem.push(
        `    this.${columnSanke} = json["${columnSanke}"];`
      );
    });
    this.templateItem.push(`  }`);
    this.templateItem.push(`}`);
  }
}
