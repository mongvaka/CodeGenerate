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

export const startGenerate = async () => {
  let dataMapped:CellBwModel[] = []
  const sheetList =[
  'hopital',
  'address',
  'student',
  'parent',
  'bmi-history',
  'congenitial-disease',
  'old-school',
  'teacher',
  'teach-schedule',
  'degree',
  'university',
  'estimate-detail',
  'home-visit',
  'student-sibling',
  'estimate-temp',
  'estimate-group',
  'scholarship',
  'country',
  'province',
  'district',
  'sub-district',
  'request-edit']
  const cellModels: CellBwModel[] = []
  for (const it of sheetList) {
    const DOC1 = await getDataFromExcelForBoonwattana(it);
    cellModels.push(...DOC1)
  }
  dataMapped = await mapDataBoonwattana(cellModels)
  startCreate(dataMapped,'student')
  startCreate(dataMapped,'address')
  startCreate(dataMapped,'hopital')
  startCreate(dataMapped,'parent')
  startCreate(dataMapped,'bmi_history')
  startCreate(dataMapped,'congenitial_disease')
  startCreate(dataMapped,'old_school')
  startCreate(dataMapped,'teacher')
  startCreate(dataMapped,'teach_schedule')
  startCreate(dataMapped,'degree')
  startCreate(dataMapped,'university')
  startCreate(dataMapped,'estimate_detail')
  startCreate(dataMapped,'home_visit')
  startCreate(dataMapped,'student_sibling')
  startCreate(dataMapped,'estimate_temp')
  startCreate(dataMapped,'estimate_group')
  startCreate(dataMapped,'scholarship')
  startCreate(dataMapped,'country')
  startCreate(dataMapped,'province')
  startCreate(dataMapped,'district')
  startCreate(dataMapped,'sub_district')
  startCreate(dataMapped,'request_edit')
};
export const startCreate = (data:CellBwModel[],tableName:string) =>{
  console.log('createModule', tableName);
  
  const student = getDataInSheet(data,tableName)
  const boonwattana:BoonWattana = new BoonWattana(student)
  boonwattana.createBoonWattanaStack()
}
