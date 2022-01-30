import { CreateFileService } from "./../../shared/createFileService";
import { ViewModelTemp } from "./template/viewModelTemp";
import { EntitiesTemp } from "./template/entitiesTemp";
import { BaseClass } from "../../shared/sharedClass/baseClass";
import { CellItemModel } from "./../../model/cellModel";
import { FormatType } from "../../shared/constans";
import { ControllerTemp } from "./template/controllerTemp";
import { RepositoryTemp } from "./template/repositoryTemp";
import { SchemaTemp } from "./template/schemaTemp";
import { RoutingTemp } from "./template/routingTemp";
import { ServiceTemp } from "./template/serviceTemp";
export class CreateExpress extends BaseClass {
  masterList: CellItemModel[];
  controllerTemp: ControllerTemp;
  entitiesTemp: EntitiesTemp;
  repositoryTemp: RepositoryTemp;
  rountingTemp: RoutingTemp;
  serviceTemp: ServiceTemp;
  viewModelTemp: ViewModelTemp;
  schemaTemp: SchemaTemp;
  private createFileService: CreateFileService;

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.createFileService = new CreateFileService();
    this.controllerTemp = new ControllerTemp(masterList);
    this.entitiesTemp = new EntitiesTemp(masterList);
    this.repositoryTemp = new RepositoryTemp(masterList);
    this.rountingTemp = new RoutingTemp(masterList);
    this.serviceTemp = new ServiceTemp(masterList);
    this.viewModelTemp = new ViewModelTemp(masterList);
    this.schemaTemp = new SchemaTemp(masterList);
  }
  createExpressApi() {
    this.createRoute();
    this.createController();
    this.createService();
    this.createRepository();
    this.createModel();
    this.createViewModel();
    this.createSchema();
  }
  private createRoute() {
    const directory: string = `export/expressApi/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_routing`;
    this.createFileService.saveFile(
      this.rountingTemp.getRoutingTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  private createController() {
    const directory: string = `export/expressApi/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_controller`;
    this.createFileService.saveFile(
      this.controllerTemp.getControllerTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  private createService() {
    const directory: string = `export/expressApi/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_service`;
    this.createFileService.saveFile(
      this.serviceTemp.getServiceTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  private createRepository() {
    const directory: string = `export/expressApi/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_repository`;
    this.createFileService.saveFile(
      this.repositoryTemp.getRepositoryTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  private createModel() {
    const directory: string = `export/expressApi/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_table`;
    this.createFileService.saveFile(
      this.entitiesTemp.getEntitiesTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  private createViewModel() {
    const directory: string = `export/expressApi/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_view_model`;
    this.createFileService.saveFile(
      this.viewModelTemp.getItemModelTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
  private createSchema() {
    const directory: string = `export/expressApi/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_schema`;
    this.createFileService.saveFile(
      this.viewModelTemp.getItemModelTemplate(),
      FormatType.TS,
      fileName,
      directory
    );
  }
}
