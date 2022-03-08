import {
  getAgularFieldType,
  getColumnName,
  getColumnType,
} from "./../../../shared/function";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { CellItemModel } from "../../../model/cellModel";
import { StyleType } from "../../../shared/constans";

export class ModelTemp extends BaseClass {
  masterList: CellItemModel[];
  itemModel: string[];
  listModel: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.itemModel = [];
    this.listModel = [];
  }
  getListModelData(): string[] {
    const listModels = this.masterList.filter(
      (value) => value.listViewOrdering != null
    );
    this.listModel.push(
      `import { BaseCompanyView } from 'app/core/interfaces/base/baseCompanyView';`
    );
    this.listModel.push(
      `export class ${this.moduleName}ListModel extends BaseCompanyView {`
    );
    this.listModel.push(`  ${this.primaryColumn}: string = null;`);

    listModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      const columnType: string = getAgularFieldType(item.dataType);
      this.listModel.push(`  ${columnName}: ${columnType} = null;`);
    });
    this.listModel.push(`}`);

    return this.listModel;
  }
  getItemModelData(): string[] {
    const itemModels = this.masterList.filter(
      (value) => value.groupOrdering != null
    );

    this.itemModel.push(
      `import { BaseCompanyView } from 'app/core/interfaces/base/baseCompanyView';`
    );
    this.itemModel.push(
      `export class ${this.moduleName}ItemModel extends BaseCompanyView {`
    );
    this.itemModel.push(`  ${this.primaryColumn}: string = null;`);

    itemModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      const columnType: string = getAgularFieldType(item.dataType);
      this.itemModel.push(`  ${columnName}: ${columnType} = null;`);
    });
    this.itemModel.push(`}`);

    return this.itemModel;
  }
}
