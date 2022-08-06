import { ItemComTemp } from "./writeFile/angularFile/template/itemComTemp";
import { getFileFromExcel } from "./getData/getFileFromExel";
import { CellItemModel } from "./model/cellModel";
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
import { CreateNest } from "./writeFile/nestFile/createNest";

export const startGenerate = async () => {
  // const masterList: CellItemModel[] = await getFileFromExcel([]);

  const DOC1: CellItemModel[] =
    await getFileFromExcelForNest("PROPERTY_CONTRACT");
  const DOC2: CellItemModel[] = 
  await getFileFromExcelForNest(
    "PROPERTY_CONTRACT_HAS_SUPPLIER"
  );
  const DOC3: CellItemModel[] = 
  await getFileFromExcelForNest(
    "SUB_PERIOD"
  );
  const DOC4: CellItemModel[] = 
  await getFileFromExcelForNest(
    "RENTAL_OPTION"
  );
  const DOC5: CellItemModel[] = 
  await getFileFromExcelForNest(
    "PROPERTY_CONTRACT_HAS_SUB_PE"
  );
  
  const DOC6: CellItemModel[] = 
  await getFileFromExcelForNest("PREPAID");
  const DOC7: CellItemModel[] =
    await getFileFromExcelForNest("EXPENSE");
    const DOC8: CellItemModel[] =
    await getFileFromExcelForNest("DEPOSIT");
    const DOC9: CellItemModel[] =
    await getFileFromExcelForNest("LEASE_REQ");
    const DOC10: CellItemModel[] =
    await getFileFromExcelForNest("TYPE_OF_CONTRACT");
    const DOC11: CellItemModel[] =
    await getFileFromExcelForNest("PROPERTY_CONTRACT_HAS_TYPE");
    const DOC12: CellItemModel[] =
    await getFileFromExcelForNest("PROPERTY_CONTRACT_APPROVAL");
    const DOC13: CellItemModel[] =
    await getFileFromExcelForNest("PROPERTY_CONTRACT_HISTORY");
    const DOC14: CellItemModel[] =
    await getFileFromExcelForNest("PROPERTY_CONTRACT_FILE_UPLOAD");

  // const creatAngularService = new CreateAngular(masterList);
  // creatAngularService.createAngularWeb();
  // const createExpress = new CreateExpress(masterList);
  // createExpress.createExpressApi();
  // const createFlutter = new CreateFlutter(masterList);
  // createFlutter.createFlutterApp();
  const createNest1 = new CreateNest(DOC1);
   const createNest2 = new CreateNest(DOC2);
  const createNest3 = new CreateNest(DOC3);
  const createNest4 = new CreateNest(DOC4);
  const createNest5 = new CreateNest(DOC5);
  const createNest6 = new CreateNest(DOC6);
  const createNest7 = new CreateNest(DOC7);
  const createNest8 = new CreateNest(DOC8);
  const createNest9 = new CreateNest(DOC9);
  const createNest10 = new CreateNest(DOC10);
  const createNest11 = new CreateNest(DOC11);
  const createNest12 = new CreateNest(DOC12);
  const createNest13 = new CreateNest(DOC13);
  const createNest14 = new CreateNest(DOC14);

  createNest1.createNestApi();
  createNest2.createNestApi();
  createNest3.createNestApi();
  createNest4.createNestApi();
  createNest5.createNestApi();
  createNest6.createNestApi();
  createNest7.createNestApi();
  createNest8.createNestApi();
  createNest9.createNestApi();
  createNest10.createNestApi();
  createNest11.createNestApi();
  createNest12.createNestApi();
  createNest13.createNestApi();
  createNest14.createNestApi();

};
