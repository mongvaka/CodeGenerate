import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class RoutingTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getRoutingTemplate() {
    this.initialDataRouting();
    return this.template;
  }
  private initialDataRouting() {
    this.template.push(`import * as express from "express";`);
    this.template.push(`const router = express.Router();`);
    this.template.push(
      `import controller from "../../controller/${this.moduleNameSnake}_controller";`
    );
    this.template.push(
      `router.post("/get${this.moduleName}TableList", controller.get${this.moduleName}TableList);`
    );
    this.template.push(
      `router.post("/get${this.moduleName}TableById", controller.get${this.moduleName}TableById);`
    );
    this.template.push(
      `router.post("/create${this.moduleName}Table", controller.create${this.moduleName}Table);`
    );
    this.template.push(
      `router.post("/edit${this.moduleName}Table", controller.edit${this.moduleName}Table);`
    );
    this.template.push(
      `router.post("/delete${this.moduleName}Table", controller.delete${this.moduleName}Table);`
    );
    this.template.push(
      `router.post("/get${this.moduleName}Dropdown", controller.get${this.moduleName}Dropdown);`
    );
    this.template.push(`export default router;`);
  }
}
