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
  'shop',
  'category',
  'product',
  'product_option',
  'product_detail',
  'product_promotion',
  'product_image',
  'order_header',
  'order_detail',
  'user_infomation',
  'delivery',
  'delivery_tracking']
  const cellModels: CellBwModel[] = []
  for (const it of sheetList) {
    const DOC1 = await getDataFromExcelForBoonwattana(it);
    cellModels.push(...DOC1)
  }
  dataMapped = await mapDataBoonwattana(cellModels)
  startCreate(dataMapped,'shop')
  startCreate(dataMapped,'category')
  startCreate(dataMapped,'product')
  startCreate(dataMapped,'product_option')
  startCreate(dataMapped,'product_detail')
  startCreate(dataMapped,'product_promotion')
  startCreate(dataMapped,'product_image')
  startCreate(dataMapped,'order_header')
  startCreate(dataMapped,'order_detail')
  startCreate(dataMapped,'user_infomation')
  startCreate(dataMapped,'delivery')
  startCreate(dataMapped,'delivery_tracking')
  const translate:BoonWattana = new BoonWattana(cellModels)
  translate.createTranlateFile(cellModels)

};
export const startCreate = (data:CellBwModel[],tableName:string) =>{
  console.log('createModule', tableName);
  
  const student = getDataInSheet(data,tableName)
  const boonwattana:BoonWattana = new BoonWattana(student)
  boonwattana.createBoonWattanaStack()
}
