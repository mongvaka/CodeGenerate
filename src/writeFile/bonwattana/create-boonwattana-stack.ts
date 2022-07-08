import { NestDtoTemp } from "./template-api/api-dto-temp";
import { CellItemModel } from "../../model/cellModel";
import { CreateFileService } from "../../shared/createFileService";
import { BaseClass } from "../../shared/sharedClass/baseClass";
import { FormatType } from "../../shared/constans";
import { NestControllerTemp } from "./template-api/api-controller-temp";
import { NestEntityTemp } from "./template-api/api-entity-temp";
import { NestModuleTemp } from "./template-api/api-module-temp";
import { NestServiceTemp } from "./template-api/api-service-temp";
import { BaseBoonwattanaClass } from "./base/base-boonwattana-class";
import { NestDropdownTemp } from "./template-api/api-dropdown-temp";
export class CreateNest extends BaseBoonwattanaClass {
  masterList: CellItemModel[];

  private createFileService: CreateFileService;
  controllerTemp: NestControllerTemp;
  dtoTemp: NestDtoTemp;
  entityTemp: NestEntityTemp;
  moduleTemp: NestModuleTemp;
  serviceTemp: NestServiceTemp;
  dropdrownTemp: NestDropdownTemp;
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.createFileService = new CreateFileService();
    this.controllerTemp = new NestControllerTemp(masterList);
    this.dtoTemp = new NestDtoTemp(masterList);
    this.entityTemp = new NestEntityTemp(masterList);
    this.moduleTemp = new NestModuleTemp(masterList);
    this.serviceTemp = new NestServiceTemp(masterList);
    this.dropdrownTemp = new NestDropdownTemp(masterList);
  }
  createNestApi() {
    this.createFile(this.controllerTemp.getTemplate(), "controller");
    this.createFile(this.serviceTemp.getTemplate(), "service");
    this.createFile(this.dtoTemp.getTemplate(), "dto");
    this.createFile(this.entityTemp.getTemplate(), "entity");
    this.createFile(this.moduleTemp.getTemplate(), "module");
    this.createFile(this.dropdrownTemp.getTemplate(), "dropdown");
    this.createFile([], "varidation");
  }
  private createFile(template: string[], fileDescription: string) {
    const directory: string = `export/nest/${this.fileName}`;
    const fileName: string = `${this.fileName}.${fileDescription}`;
    this.createFileService.saveFile(
      template,
      FormatType.TS,
      fileName,
      directory
    );
  }
}
