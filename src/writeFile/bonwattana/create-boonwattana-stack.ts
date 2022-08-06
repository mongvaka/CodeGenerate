import { ApiDtoTemp } from "./template-api/api-dto-temp";
import { CellBwModel } from "../../model/cellModel";
import { CreateFileService } from "../../shared/createFileService";
import { BaseClass } from "../../shared/sharedClass/baseClass";
import { FormatType } from "../../shared/constans";
import { ApiControllerTemp } from "./template-api/api-controller-temp";
import { ApiEntityTemp } from "./template-api/api-entity-temp";
import { ApiModuleTemp } from "./template-api/api-module-temp";
import { ApiServiceTemp } from "./template-api/api-service-temp";
import { BaseBoonwattanaClass } from "./base/base-boonwattana-class";
import { ApiDropdownTemp } from "./template-api/api-dropdown-temp";
import { AppItemHtmlTemp } from "./template-app/app-item-html-temp";
import { AppItemTsTemp } from "./template-app/app-item-ts-temp";
import { AppListHtmlTemp } from "./template-app/app-list-html-temp";
import { AppListTsTemp } from "./template-app/app-list-ts-temp";
import { AppModuleTemp } from "./template-app/app-module-temp";
import { AppModelTemp } from "./template-app/app-model-temp";
import { AppRoutingTemp } from "./template-app/app-routing-temp";
import { AppServiceTemp } from "./template-app/app-service-temp";
import { AppTranslateTemp } from "./template-app/app-translate";
export class BoonWattana extends BaseBoonwattanaClass {
  private masterList: CellBwModel[];

  private createFileService: CreateFileService;
  private apiControllerTemp: ApiControllerTemp;
  private apiDtoTemp: ApiDtoTemp;
  private  apiEntityTemp: ApiEntityTemp;
  private apiModuleTemp: ApiModuleTemp;
  private apiServiceTemp: ApiServiceTemp;
  private apiDropdrownTemp: ApiDropdownTemp;

  private appItemHtmlTemp:AppItemHtmlTemp;
  private appItemTsTemp:AppItemTsTemp;
  private appListHtmlTempt:AppListHtmlTemp;
  private appListTsTempt:AppListTsTemp;
  private appModelTempt:AppModelTemp;
  private appModuleTempt:AppModuleTemp;
  private appRoutingTempt:AppRoutingTemp;
  private appServiceTempt:AppServiceTemp;

  constructor(masterList: CellBwModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.createFileService = new CreateFileService();

    this.apiControllerTemp = new ApiControllerTemp(masterList);
    this.apiDtoTemp = new ApiDtoTemp(masterList);
    this.apiEntityTemp = new ApiEntityTemp(masterList);
    this.apiModuleTemp = new ApiModuleTemp(masterList);
    this.apiServiceTemp = new ApiServiceTemp(masterList);
    this.apiDropdrownTemp = new ApiDropdownTemp(masterList);

    this.appItemHtmlTemp = new AppItemHtmlTemp(masterList);
    this.appItemTsTemp = new AppItemTsTemp(masterList);
    this.appListHtmlTempt = new AppListHtmlTemp(masterList);
    this.appListTsTempt = new AppListTsTemp(masterList);
    this.appModelTempt = new AppModelTemp(masterList);
    this.appModuleTempt = new AppModuleTemp(masterList);
    this.appRoutingTempt = new AppRoutingTemp(masterList);
    this.appServiceTempt = new AppServiceTemp(masterList);
  }
  createBoonWattanaStack() {

    this.createFile(`api/${this.fileName}`,this.apiControllerTemp.getTemplate(), ".controller",FormatType.TS);
    this.createFile(`api/${this.fileName}`,this.apiServiceTemp.getTemplate(), ".service",FormatType.TS);
    this.createFile(`api/${this.fileName}`,this.apiDtoTemp.getTemplate(), ".dto",FormatType.TS);
    this.createFile(`api/${this.fileName}`,this.apiEntityTemp.getTemplate(), ".entity",FormatType.TS);
    this.createFile(`api/${this.fileName}`,this.apiModuleTemp.getTemplate(), ".module",FormatType.TS);
    this.createFile(`api/${this.fileName}`,this.apiDropdrownTemp.getTemplate(), ".dropdown",FormatType.TS);

    this.createFile(`web/${this.fileName}`,this.appModelTempt.getTemplate(), "-model",FormatType.TS);
    this.createFile(`web/${this.fileName}`,this.appRoutingTempt.getTemplate(), "-routing",FormatType.TS);
    this.createFile(`web/${this.fileName}`,this.appModuleTempt.getTemplate(), ".module",FormatType.TS);
    this.createFile(`web/${this.fileName}`,this.appServiceTempt.getTemplate(), ".service",FormatType.TS);
    this.createFile(`web/${this.fileName}/${this.fileName}-item`,this.appItemHtmlTemp.getTemplate(), "-item.component",FormatType.HTML);
    this.createFile(`web/${this.fileName}/${this.fileName}-item`,this.appItemTsTemp.getTemplate(), "-item.component",FormatType.TS);
    this.createFile(`web/${this.fileName}/${this.fileName}-item`,[], "-item.component",FormatType.SCSS);
    this.createFile(`web/${this.fileName}/${this.fileName}-list`,this.appListHtmlTempt.getTemplate(), "-list.component",FormatType.HTML);
    this.createFile(`web/${this.fileName}/${this.fileName}-list`,this.appListTsTempt.getTemplate(), "-list.component",FormatType.TS);
    this.createFile(`web/${this.fileName}/${this.fileName}-list`,[], "-list.component",FormatType.SCSS);
    

  }
  public createFile(path:string,template: string[], fileDescription: string,type:FormatType) {
    const directory: string = `export/${path}`;
    const fileName: string = `${this.fileName}${fileDescription}`;
    this.createFileService.saveFile(
      template,
      type,
      fileName,
      directory
    );
  }
  createTranlateFile(cellModels:CellBwModel[] ){
    const translateTemp:AppTranslateTemp = new AppTranslateTemp(cellModels)
    this.createFileService.saveFile(
      translateTemp.getTemplate(),
      FormatType.TS,
      'th',
      'export/translate'
    );
  }
}
