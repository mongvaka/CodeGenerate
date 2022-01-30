import {
  getColumnType,
  getConvertMethod,
  getDartFieldType,
} from "./../../../shared/function";
import { StyleType } from "../../../shared/constans";
import { getColumnName } from "../../../shared/function";
import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class ViewModelTemp extends BaseClass {
  private masterList: CellItemModel[];
  private templateList: string[];
  private templateItem: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.templateList = [];
    this.templateItem = [];
  }
  getItemListModelTemplate() {
    this.initialDataListModel();
    return this.templateList;
  }
  private initialDataListModel() {
    const listModels = this.masterList.filter(
      (value) => value.listViewOrdering != null
    );

    this.templateList.push(
      `import 'package:ice_fac_mobile/ViewModel/${this.moduleNameSnakeNonTable}_item_view.dart';`
    );
    this.templateList.push(
      `import 'package:ice_fac_mobile/Shared/Function/data_type_function.dart';`
    );

    this.templateList.push(``);
    this.templateList.push(`class ${this.moduleName}ListView {`);
    this.templateList.push(`  final String ${this.primaryColumn};`);
    listModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateList.push(`  final String ${columnName};`);
    });
    this.templateList.push(``);
    this.templateList.push(`  ${this.moduleName}ListView(`);
    this.templateList.push(`      {`);
    this.templateList.push(`      this.${this.primaryColumn},`);
    listModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateList.push(`      this.${columnName},`);
    });

    this.templateList.push(`      });`);
    this.templateList.push(
      `  factory ${this.moduleName}ListView.fromJson(Map<dynamic, dynamic> json) {`
    );
    this.templateList.push(`    return ${this.moduleName}ListView(`);
    this.templateList.push(
      `      ${this.primaryColumn}: json['${this.primaryColumn}'].toString(),`
    );
    listModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateList.push(
        `      ${columnName}: json['${columnName}'].toString(),`
      );
    });
    this.templateList.push(`    );`);
    this.templateList.push(`  }`);
    this.templateList.push(
      `  static List<${this.moduleName}ListView> fromArray(List<dynamic> array) {`
    );
    this.templateList.push(
      `    return array.map((item) => ${this.moduleName}ListView.fromJson(item)).toList();`
    );
    this.templateList.push(`  }`);
    this.templateList.push(``);
    this.templateList.push(
      `  factory ${this.moduleName}ListView.formItem(${this.moduleName}ItemView itemView) {`
    );
    this.templateList.push(`    return ${this.moduleName}ListView(`);
    this.templateList.push(
      `        ${this.primaryColumn}: itemView.${this.primaryColumn},`
    );
    listModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateList.push(`        ${columnName}: itemView.${columnName},`);
    });
    this.templateList.push(`        );`);
    this.templateList.push(`  }`);
    this.templateList.push(`}`);
  }
  getItemModelTemplate() {
    this.initialDataItemModel();
    return this.templateItem;
  }
  private initialDataItemModel() {
    const itemModels = this.masterList.filter(
      (value) => value.columnOrdering != null
    );
    this.templateItem.push(`import 'package:flutter/cupertino.dart';`);
    this.templateList.push(
      `import 'package:ice_fac_mobile/Shared/Function/data_type_function.dart';`
    );
    this.templateItem.push(``);
    this.templateItem.push(`class ${this.moduleName}ItemView {`);
    this.templateItem.push(`  String ${this.primaryColumn};`);

    itemModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      const columnType: string = getDartFieldType(item.dataType);
      this.templateList.push(`  final String ${columnName};`);
    });

    itemModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateItem.push(
        `  TextEditingController ${columnName}_controler = new TextEditingController();`
      );
    });

    this.templateItem.push(``);
    this.templateItem.push(`  ${this.moduleName}ItemView(`);
    this.templateItem.push(`      {this.${this.primaryColumn},`);

    itemModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateItem.push(`      this.${columnName},`);
    });
    this.templateItem.push(`      });`);
    this.templateItem.push(``);
    this.templateItem.push(
      `  factory ${this.moduleName}ItemView.fromJson(Map<String, dynamic> json) {`
    );
    this.templateItem.push(`    return BankItemView(`);
    this.templateItem.push(
      `        ${this.primaryColumn}: json['${this.primaryColumn}'].toString(),`
    );

    itemModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateItem.push(
        `        ${columnName}: json['${columnName}'].toString(),`
      );
    });
    this.templateItem.push(`        create_by: json['create_by'].toString(),`);
    this.templateItem.push(`        update_by: json['update_by'].toString(),`);
    this.templateItem.push(
      `        create_date: json['create_date'].toString(),`
    );
    this.templateItem.push(
      `        update_date: json['update_date'].toString());`
    );
    this.templateItem.push(`  }`);
    this.templateItem.push(
      `  Map<String, dynamic> getFromControllerToJson() {`
    );
    itemModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      const convertMethod: string = getConvertMethod(item.dataType);
      this.templateItem.push(
        `    ${columnName} = ${columnName}_controler.text.${convertMethod};`
      );
    });
    this.templateItem.push(`    return {`);
    itemModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateItem.push(`      '${columnName}': ${columnName},`);
    });
    this.templateItem.push(`    };`);
    this.templateItem.push(`  }`);
    this.templateItem.push(``);
    this.templateItem.push(`  void assignControllerToModel() {`);

    itemModels.forEach((item) => {
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.templateItem.push(
        `    ${columnName}_controler.text = ${columnName};`
      );
    });
    this.templateItem.push(`  }`);
    this.templateItem.push(`}`);
  }
}
