import { ItemComTemp } from "./writeFile/angularFile/template/itemComTemp";
import { getFileFromExcel } from "./getData/getFileFromExel";
import { CellBwModel, CellItemModel } from "./model/cellModel";
import { FormatType, StyleType } from "./shared/constans";
import { CreateFileService } from "./shared/createFileService";
import {
  createDirectories,
  demo1Function,
  demo2Function,
  getColumnName,
  getTableName,
} from "./shared/function";
import { CreateAngular } from "./writeFile/angularFile/createAngular";
import { CreateExpress } from "./writeFile/expressFile/createExpress";
import { CreateFlutter } from "./writeFile/flutterFile/createFlutter";
import { getFileFromExcelForNest } from "./getData/getFileFromExelForNest";
import { BoonWattana } from "./writeFile/bonwattana/create-boonwattana-stack";
import { getDataFromExcelForBoonwattana, getDataInSheet, mapDataBoonwattana } from "./getData/get-data-from-excel";
import { AppTranslateTemp } from "./writeFile/bonwattana/template-app/app-translate";

export const startGenerate = async () => {
  let dataMapped:CellBwModel[] = []
  const sheetList =[
    'research'
  ]
  const cellModels: CellBwModel[] = []
  for (const it of sheetList) {
    const DOC1 = await getDataFromExcelForBoonwattana(it);
    cellModels.push(...DOC1)
  }
  dataMapped = await mapDataBoonwattana(cellModels)
  startCreate(dataMapped,'research')

  const translate:BoonWattana = new BoonWattana(cellModels)
  translate.createTranlateFile(cellModels)

};
export const startCreate = (data:CellBwModel[],tableName:string) =>{  
  const student = getDataInSheet(data,tableName)
  const boonwattana:BoonWattana = new BoonWattana(student)
  boonwattana.createBoonWattanaStack()
}
