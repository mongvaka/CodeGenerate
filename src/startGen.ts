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

  const DEPARTMENT_BUSINESS_UNIT: CellItemModel[] =
    await getFileFromExcelForNest("DEPARTMENT_BUSINESS_UNIT");
  const FUNDING_TYPE: CellItemModel[] = await getFileFromExcelForNest(
    "FUNDING_TYPE"
  );
  const DUMMY_SUPPLIER: CellItemModel[] = await getFileFromExcelForNest(
    "DUMMY_SUPPLIER"
  );
  const SUPPLIE_GROUP: CellItemModel[] = await getFileFromExcelForNest(
    "SUPPLIE_GROUP"
  );
  const SUPPLIER_CODE: CellItemModel[] = await getFileFromExcelForNest(
    "SUPPLIER_CODE"
  );
  const CUSTOMER: CellItemModel[] = await getFileFromExcelForNest("CUSTOMER");
  const REJECT_AND_CANCEL_REASON: CellItemModel[] =
    await getFileFromExcelForNest("REJECT_AND_CANCEL_REASON");
  // const creatAngularService = new CreateAngular(masterList);
  // creatAngularService.createAngularWeb();
  // const createExpress = new CreateExpress(masterList);
  // createExpress.createExpressApi();
  // const createFlutter = new CreateFlutter(masterList);
  // createFlutter.createFlutterApp();
  const createNest1 = new CreateNest(DEPARTMENT_BUSINESS_UNIT);
  const createNest2 = new CreateNest(FUNDING_TYPE);
  const createNest3 = new CreateNest(DUMMY_SUPPLIER);
  const createNest4 = new CreateNest(SUPPLIE_GROUP);
  const createNest5 = new CreateNest(SUPPLIER_CODE);
  const createNest6 = new CreateNest(CUSTOMER);
  const createNest7 = new CreateNest(REJECT_AND_CANCEL_REASON);

  createNest1.createNestApi();
  createNest2.createNestApi();
  createNest3.createNestApi();
  createNest4.createNestApi();
  createNest5.createNestApi();
  createNest6.createNestApi();
  createNest7.createNestApi();
};
