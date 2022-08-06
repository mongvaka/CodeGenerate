import { BooleanType, ColumnArrayNest, ColumnBW } from "../shared/constans";
import { CellBwModel, CellItemModel } from "../model/cellModel";
import readXlsxFile from "read-excel-file/node";
export const getDataFromExcelForBoonwattana = async (
  sheetName: string
): Promise<CellBwModel[]> => {
  try {
    let newDataList: CellBwModel[] = [];
    const excelFile = await readXlsxFile("import/con-project.xlsx", {
      sheet: sheetName,
    });
    let firstTime = true;
    excelFile.forEach((item: any) => {
      if (!firstTime) {
        let model: CellBwModel = new CellBwModel();
        model.TABLE_NAME = item[ColumnBW.TABLE_NAME];
        model.COLUMN_NAME= item[ColumnBW.COLUMN_NAME];
        model.INPUT_TYPE	= item[ColumnBW.INPUT_TYPE];
        model.LOOKUP_TABLE	= item[ColumnBW.LOOKUP_TABLE];
        model.REQUIRED	= item[ColumnBW.REQUIRED]=='YES'?true:false;
        model.CREATE	= item[ColumnBW.CREATE]=='YES'?true:false;
        model.UPDATE	= item[ColumnBW.UPDATE]=='YES'?true:false;
        model.SEARCH	= item[ColumnBW.SEARCH]=='YES'?true:false;
        model.READONLY_ON_UPDATE= item[ColumnBW.READONLY_ON_UPDATE]=='YES'?true:false;
        model.READONLY_ON_CREATE	= item[ColumnBW.READONLY_ON_CREATE]=='YES'?true:false;
        model.COLUMN_ORDER = item[ColumnBW.COLUMN_ORDER];	
        model.GROUP_ORDER	= item[ColumnBW.GROUP_ORDER];
        model.IS_LABEL	= item[ColumnBW.IS_LABEL];
        model.TABLE_LABEL	= item[ColumnBW.TABLE_LABEL];
        model.GROUP_LABEL	= item[ColumnBW.GROUP_LABEL];
        model.COLUMN_LABEL= item[ColumnBW.COLUMN_LABEL];
        model.LIST_ORDER = item[ColumnBW.LIST_ORDER]
        model.GROUP_NAME = item[ColumnBW.GROUP_NAME]
        newDataList.push(model);
      }
      firstTime = false;
    });
    return newDataList;
  } catch (e) {
    console.log("E : ", e);
  }
};
export const mapDataBoonwattana = async (dataCells:CellBwModel[]):Promise<CellBwModel[]> =>{
  dataCells.forEach(el=>{
    if(el.INPUT_TYPE == 'Foreign'){
      el.child = []
      const tableName:string = el.LOOKUP_TABLE
      dataCells.forEach(el2=>{
        if(el2.TABLE_NAME == tableName){
          el.child.push(el2)
        }
      })
    }
  })
  return dataCells
}
export const getDataInSheet = (dataMaped:CellBwModel[],tableName:string)=>{
  return dataMaped.filter(fl=>fl.TABLE_NAME == tableName)
}
