import { BooleanType, ColumnArrayNest } from "../shared/constans";
import { CellItemModel } from "../model/cellModel";
import readXlsxFile from "read-excel-file/node";
export const getFileFromExcelForNest = async (
  sheetName: string
): Promise<CellItemModel[]> => {
  try {
    let newDataList: CellItemModel[] = [];
    const excelFile = await readXlsxFile("import/brt.xlsx", {
      sheet: sheetName,
    });
    let firstTime = true;
    excelFile.forEach((item: any) => {
      if (!firstTime) {
        let model: CellItemModel = new CellItemModel();
        model.tableName = item[ColumnArrayNest.TABLE_NAME];
        model.columnName = item[ColumnArrayNest.COLUMN_NAME];
        model.dataType = item[ColumnArrayNest.DATA_TYPE];
        model.unboundField =
          item[ColumnArrayNest.UNBOUND_FIELD] == BooleanType.YES ? true : false;

        model.lookupTableName = item[ColumnArrayNest.LOOKUP_TABLE_NAME];
        model.readonly =
          item[ColumnArrayNest.READONLY] == BooleanType.YES ? true : false;
        model.readonlyOnCreate =
          item[ColumnArrayNest.READONLY_ON_CREATE] == BooleanType.YES
            ? true
            : false;
        model.controlType = item[ColumnArrayNest.CONTROL_TYPE];
        model.tableLabel = item[ColumnArrayNest.TABLE_LABEL];
        model.columnLabel = item[ColumnArrayNest.COLUMN_LABEL];
        model.mandatory =
          item[ColumnArrayNest.MANDATORY] == 'YES'? true : false;
        model.description = item[ColumnArrayNest.DESCRIPTION];
        model.lookupControl = item[ColumnArrayNest.COLUMN_TYPE];
        model.create = item[ColumnArrayNest.CREATE]=='YES';
        model.update = item[ColumnArrayNest.UPDATE]=='YES';
        model.search = item[ColumnArrayNest.SEARCH_PARAM]!=null;
        newDataList.push(model);
      }
      firstTime = false;
    });
    return newDataList;
  } catch (e) {
    console.log("E : ", e);
  }
};
