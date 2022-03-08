import { BooleanType, ColumnArray } from "./../shared/constans";
import { CellItemModel } from "./../model/cellModel";
import readXlsxFile from "read-excel-file/node";
export const getFileFromExcel = async (rows: any): Promise<CellItemModel[]> => {
  try {
    let newDataList: CellItemModel[] = [];
    const excelFile = await readXlsxFile("import/product_category_table.xlsx", {
      sheet: "template",
    });
    let firstTime = true;
    excelFile.forEach((item: any) => {
      if (!firstTime) {
        let model: CellItemModel = new CellItemModel();
        model.columnLabel = item[ColumnArray.COLUMN_LABEL];
        model.tableName = item[ColumnArray.TABLE_NAME];
        model.columnName = item[ColumnArray.COLUMN_NAME];
        model.dataType = item[ColumnArray.DATA_TYPE];
        model.unboundField =
          item[ColumnArray.UNBOUND_FIELD] == BooleanType.YES ? true : false;
        model.unboundDisplay =
          item[ColumnArray.UNBOUND_DISPLAY] == BooleanType.YES ? true : false;
        model.lookupTableName = item[ColumnArray.LOOKUP_TABLE_NAME];
        model.lookupControl = item[ColumnArray.LOOKUP_CONTROL];
        model.readonly =
          item[ColumnArray.READONLY] == BooleanType.YES ? true : false;
        model.readonlyOnCreate =
          item[ColumnArray.READONLY_ON_CREATE] == BooleanType.YES
            ? true
            : false;
        model.lookupOrdering = item[ColumnArray.LOOKUP_ORDERING];
        model.controlSize = item[ColumnArray.CONTROL_SIZE];
        model.controlType = item[ColumnArray.CONTROL_TYPE];
        model.tableLabel = item[ColumnArray.TABLE_LABEL];
        model.columnLabel = item[ColumnArray.COLUMN_LABEL];
        model.create =
          item[ColumnArray.CREATE] == BooleanType.YES ? true : false;
        model.delete =
          item[ColumnArray.DELETE] == BooleanType.YES ? true : false;
        model.update =
          item[ColumnArray.UPDATE] == BooleanType.YES ? true : false;
        model.listViewOrdering = item[ColumnArray.LIST_VIEW_ORDERING];
        model.mandatory =
          item[ColumnArray.MANDATORY] == BooleanType.YES ? true : false;
        model.groupName = item[ColumnArray.GROUP_NAME];
        model.groupOrdering = item[ColumnArray.GROUP_ORDERING];
        model.columnOrdering = item[ColumnArray.COLUMN_ORDERING];
        newDataList.push(model);
      }
      firstTime = false;
    });
    return newDataList;
  } catch (e) {
    console.log("E : ", e);
  }
};
