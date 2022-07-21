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
    await getFileFromExcelForNest("16 PC_REJECT_AND_CANCEL_REASON_");
  const DOC2: CellItemModel[] = await getFileFromExcelForNest(
    "72 PC_FORMAT"
  );
  const DOC3: CellItemModel[] = await getFileFromExcelForNest(
    "74 PC_DEPARTMENT"
  );
  // const DOC4: CellItemModel[] = await getFileFromExcelForNest(
  //   "TTA_ANALYSIS"
  // );
  // const DOC5: CellItemModel[] = await getFileFromExcelForNest(
  //   "CONTRACT"
  // );
  
  // const DOC6: CellItemModel[] = await getFileFromExcelForNest("CONTRACT_HAS_FUNDING");
  // const DOC7: CellItemModel[] =
  //   await getFileFromExcelForNest("CONTRACT_TYPE");
  //   const DOC8: CellItemModel[] =
  //   await getFileFromExcelForNest("STORE");
  // const creatAngularService = new CreateAngular(masterList);
  // creatAngularService.createAngularWeb();
  // const createExpress = new CreateExpress(masterList);
  // createExpress.createExpressApi();
  // const createFlutter = new CreateFlutter(masterList);
  // createFlutter.createFlutterApp();
  const createNest1 = new CreateNest(DOC1);
   const createNest2 = new CreateNest(DOC2);
  const createNest3 = new CreateNest(DOC3);
  // const createNest4 = new CreateNest(DOC4);
  // const createNest5 = new CreateNest(DOC5);
  // const createNest6 = new CreateNest(DOC6);
  // const createNest7 = new CreateNest(DOC7);
  // const createNest8 = new CreateNest(DOC8);

  createNest1.createNestApi();
  createNest2.createNestApi();
  createNest3.createNestApi();
  // createNest4.createNestApi();
  // createNest5.createNestApi();
  // createNest6.createNestApi();
  // createNest7.createNestApi();
  // createNest8.createNestApi();
};
