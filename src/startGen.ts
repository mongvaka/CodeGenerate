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

export const startGenerate = async () => {
  const masterList: CellItemModel[] = await getFileFromExcel([]);
  const creatAngularService = new CreateAngular(masterList);
  creatAngularService.createAngularWeb();
  const createExpress = new CreateExpress(masterList);
  createExpress.createExpressApi();
  const createFlutter = new CreateFlutter(masterList);
  createFlutter.createFlutterApp();
};
