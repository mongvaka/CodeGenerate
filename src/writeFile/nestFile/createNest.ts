import { NestDtoTemp } from "./template/dtoTemp";
import { CellItemModel } from "../../model/cellModel";
import { CreateFileService } from "../../shared/createFileService";
import { BaseClass } from "../../shared/sharedClass/baseClass";
import { FormatType } from "../../shared/constans";
import { NestControllerTemp } from "./template/controllerTemp";
import { NestEntityTemp } from "./template/entityTemp";
import { NestModuleTemp } from "./template/moduleTemp";
import { NestResponseTemp } from "./template/responsTemp";
import { NestServiceTemp } from "./template/serviceTemp";
import { BaseNestClass } from "./base/baseNestClass";
export class CreateNest extends BaseNestClass {
  masterList: CellItemModel[];

  private createFileService: CreateFileService;
  controllerTemp: NestControllerTemp;
  dtoTemp: NestDtoTemp;
  entityTemp: NestEntityTemp;
  moduleTemp: NestModuleTemp;
  responsTemp: NestResponseTemp;
  serviceTemp: NestServiceTemp;
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.createFileService = new CreateFileService();
    this.controllerTemp = new NestControllerTemp(masterList);
    this.dtoTemp = new NestDtoTemp(masterList);
    this.entityTemp = new NestEntityTemp(masterList);
    this.moduleTemp = new NestModuleTemp(masterList);
    this.responsTemp = new NestResponseTemp(masterList);
    this.serviceTemp = new NestServiceTemp(masterList);
  }
  createNestApi() {
    this.createFile(this.controllerTemp.getTemplate(), "controller");
    this.createFile(this.serviceTemp.getTemplate(), "service");
    this.createFile(this.dtoTemp.getTemplate(), "dto");
    this.createFile(this.entityTemp.getTemplate(), "entity");
    this.createFile(this.moduleTemp.getTemplate(), "module");
    this.createFile(this.responsTemp.getTemplate(), "response");
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
