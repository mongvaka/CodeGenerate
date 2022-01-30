import { ServiceTemp } from "./../flutterFile/template/serviceTemp";
import { RoutingTemp } from "./../expressFile/template/routingTemp";
import { ItemComTemp } from "./template/itemComTemp";
import { ListComTemp } from "./template/listComTemp";
import { CreateFileService } from "../../shared/createFileService";
import { CellItemModel } from "./../../model/cellModel";
import { FormatType } from "../../shared/constans";
import { ItemPageTemp } from "./template/itemPageTemp";
import { ListPageTemp } from "./template/listPageTemp";
import { ModuleComTemp } from "./template/moduleComTemp";
import { ModelTemp } from "./template/modelTemp";
import { createDirectories } from "../../shared/function";
import { BaseClass } from "../../shared/sharedClass/baseClass";
import { ModulePageTemp } from "./template/modulePageTemp";
export class CreateAngular extends BaseClass {
  private masterList: CellItemModel[];
  private createFileService: CreateFileService;
  private itemComTemp: ItemComTemp;
  private itemPageTemp: ItemPageTemp;
  private listComTemp: ListComTemp;
  private listPageTemp: ListPageTemp;
  private modelTemp: ModelTemp;
  private moduleComTemp: ModuleComTemp;
  private modulePageTemp: ModulePageTemp;
  private routingTemp: RoutingTemp;
  private serviceTemp: ServiceTemp;

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.createFileService = new CreateFileService();
    this.itemComTemp = new ItemComTemp(this.masterList);
    this.itemPageTemp = new ItemPageTemp(this.masterList);
    this.listComTemp = new ListComTemp(this.masterList);
    this.listPageTemp = new ListPageTemp(this.masterList);
    this.modelTemp = new ModelTemp(this.masterList);
    this.moduleComTemp = new ModuleComTemp(this.masterList);
    this.modulePageTemp = new ModulePageTemp(this.masterList);
    this.routingTemp = new RoutingTemp(this.masterList);
    this.serviceTemp = new ServiceTemp(this.masterList);
  }
  createAngularWeb() {
    this.createComponent();
    this.createPage();
  }
  private createComponent() {
    this.createListConponent();
    this.createItemComponent();
    this.createConponentService();
    this.createConponentModule();
    this.createViewModel();
  }
  private createPage() {
    this.createListPage();
    this.createItemPage();
    this.createRoutingPage();
    this.createModulePage();
  }
  //#region CreateComponent
  private createListConponent() {
    const directory: string = `export/angular/component/${this.moduleNameSnakeNonTable}/${this.moduleNameSnakeNonTable}-list`;
    const fileName: string = `${this.moduleNameSnakeNonTable}-list.component`;
    const fileNameCustom: string = `${this.moduleNameSnakeNonTable}-list-custom.component`;
    this.createFileService.saveFile(
      this.listComTemp.getHtmlPageData(),
      FormatType.HTML,
      fileName,
      directory
    );
    this.createFileService.saveFile(
      this.listComTemp.getTypeScriptPageData(),
      FormatType.TS,
      fileName,
      directory
    );
    this.createFileService.saveFile(
      this.listComTemp.getCustomComData(),
      FormatType.TS,
      fileNameCustom,
      directory
    );
    this.createFileService.saveFile([], FormatType.SCSS, fileName, directory);
  }
  private createItemComponent() {
    const directory: string = `export/angular/component/${this.moduleNameSnakeNonTable}/${this.moduleNameSnakeNonTable}-item`;
    const fileName: string = `${this.moduleNameSnakeNonTable}-item.component`;
    const fileNameCustom: string = `${this.moduleNameSnakeNonTable}-item-custom.component`;
    this.createFileService.saveFile(
      this.itemComTemp.getHtmlComData(),
      FormatType.HTML,
      fileName,
      directory
    );
    this.createFileService.saveFile(
      this.itemComTemp.getCustomComData(),
      FormatType.TS,
      fileNameCustom,
      directory
    );
    this.createFileService.saveFile(
      this.itemComTemp.getTypeScriptComData(),
      FormatType.TS,
      fileName,
      directory
    );
    this.createFileService.saveFile([], FormatType.SCSS, fileName, directory);
  }
  private createConponentService() {
    const directory: string = `export/angular/component/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}.service`;
    this.createFileService.saveFile(
      this.serviceTemp.getServiceTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  private createConponentModule() {
    const directory: string = `export/angular/component/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}.module`;
    this.createFileService.saveFile(
      this.moduleComTemp.getModuleComponentData(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  private createViewModel() {
    const directory: string = `export/angular/models/${this.moduleNameSnakeNonTable}`;
    const fileNameList: string = `${this.moduleNameSnakeNonTable}ListModel`;
    const fileNameItem: string = `${this.moduleNameSnakeNonTable}ItemModel`;
    this.createFileService.saveFile(
      this.modelTemp.getListModelData(),
      FormatType.TS,
      fileNameList,
      directory
    );
    this.createFileService.saveFile(
      this.modelTemp.getItemModelData(),
      FormatType.TS,
      fileNameItem,
      directory
    );
  }
  //#endregion CreateComponent
  private createListPage() {
    const directory: string = `export/angular/page/${this.moduleNameSnakeNonTable}/${this.moduleNameSnakeNonTable}-list`;
    const fileName: string = `${this.moduleNameSnakeNonTable}-list.page`;
    this.createFileService.saveFile(
      this.listPageTemp.getHtmlPageData(),
      FormatType.HTML,
      fileName,
      directory
    );
    this.createFileService.saveFile(
      this.listPageTemp.getTypeScriptPageData(),
      FormatType.TS,
      fileName,
      directory
    );
    this.createFileService.saveFile([], FormatType.SCSS, fileName, directory);
  }
  private createItemPage() {
    const directory: string = `export/angular/page/${this.moduleNameSnakeNonTable}/${this.moduleNameSnakeNonTable}-item`;
    const fileName: string = `${this.moduleNameSnakeNonTable}-item.page`;
    this.createFileService.saveFile(
      this.itemPageTemp.getHtmlPageData(),
      FormatType.HTML,
      fileName,
      directory
    );
    this.createFileService.saveFile(
      this.itemPageTemp.getTypeScriptPageData(),
      FormatType.TS,
      fileName,
      directory
    );
    this.createFileService.saveFile([], FormatType.SCSS, fileName, directory);
  }
  createRoutingPage() {
    const directory: string = `export/angular/page/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}-routing.module`;
    this.createFileService.saveFile(
      this.routingTemp.getRoutingTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  createModulePage() {
    const directory: string = `export/angular/page/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}.module`;
    this.createFileService.saveFile(
      this.modulePageTemp.getModulePageData(),
      FormatType.TS,
      fileName,
      directory
    );
  }
}
