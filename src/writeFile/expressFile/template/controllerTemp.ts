import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class ControllerTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getControllerTemplate() {
    this.initialDataController();
    return this.template;
  }
  private initialDataController() {
    this.template.push(
      `import respons from "../shared/tools/respons_handler";`
    );
    this.template.push(`import { Request, Response } from "express";`);
    this.template.push(
      `import ${this.moduleName}Service from "../services/${this.moduleNameSnake}Service";`
    );
    this.template.push(
      `let create${this.moduleName}Table = async (req: Request, res: Response) => {`
    );
    this.template.push(`  try {`);
    this.template.push(
      `    const ${this.moduleNameSnake}Service: ${this.moduleName}Service = new ${this.moduleName}Service();`
    );
    this.template.push(
      `    res.status(200).json(await ${this.moduleNameSnake}Service.create${this.moduleName}Table(req));`
    );
    this.template.push(`  } catch (e: any) {`);
    this.template.push(`    respons.getErrorCreate(e.message, req, res);`);
    this.template.push(`  }`);
    this.template.push(`};`);
    this.template.push(
      `let get${this.moduleName}TableList = async (req: Request, res: Response) => {`
    );
    this.template.push(`  try {`);
    this.template.push(
      `    const ${this.moduleNameSnake}Service: ${this.moduleName}Service = new ${this.moduleName}Service();`
    );
    this.template.push(
      `    res.status(200).json(await ${this.moduleNameSnake}Service.get${this.moduleName}TableList(req));`
    );
    this.template.push(`  } catch (e: any) {`);
    this.template.push(`    respons.getErrorList(e.message, req, res);`);
    this.template.push(`  }`);
    this.template.push(`};`);
    this.template.push(
      `let edit${this.moduleName}Table = async (req: Request, res: Response) => {`
    );
    this.template.push(`  try {`);
    this.template.push(
      `    const ${this.moduleNameSnake}Service: ${this.moduleName}Service = new ${this.moduleName}Service();`
    );
    this.template.push(
      `    res.status(200).json(await ${this.moduleNameSnake}Service.edit${this.moduleName}Table(req));`
    );
    this.template.push(`  } catch (e: any) {`);
    this.template.push(`    respons.getErrorEdit(e.message, req, res);`);
    this.template.push(`  }`);
    this.template.push(`};`);
    this.template.push(
      `let delete${this.moduleName}Table = async (req: Request, res: Response) => {`
    );
    this.template.push(`  try {`);
    this.template.push(
      `    const ${this.moduleNameSnake}Service: ${this.moduleName}Service = new ${this.moduleName}Service();`
    );
    this.template.push(
      `    res.status(200).json(await ${this.moduleNameSnake}Service.delete${this.moduleName}Table(req));`
    );
    this.template.push(`  } catch (e: any) {`);
    this.template.push(`    respons.getErrorDelete(e.message, req, res);`);
    this.template.push(`  }`);
    this.template.push(`};`);
    this.template.push(
      `let get${this.moduleName}TableById = async (req: Request, res: Response) => {`
    );
    this.template.push(`  try {`);
    this.template.push(
      `    const ${this.moduleNameSnake}Service: ${this.moduleName}Service = new ${this.moduleName}Service();`
    );
    this.template.push(
      `    res.status(200).json(await ${this.moduleNameSnake}Service.get${this.moduleName}TableById(req));`
    );
    this.template.push(`  } catch (e: any) {`);
    this.template.push(`    respons.getErrorView(e.message, req, res);`);
    this.template.push(`  }`);
    this.template.push(`};`);
    this.template.push(
      `let get${this.moduleName}Dropdown = async (req: Request, res: Response) => {`
    );
    this.template.push(`  try {`);
    this.template.push(
      `    const ${this.moduleNameSnake}Service: ${this.moduleName}Service = new ${this.moduleName}Service();`
    );
    this.template.push(
      `    res.status(200).json(await ${this.moduleNameSnake}Service.get${this.moduleName}Dropdown(req));`
    );
    this.template.push(`  } catch (e: any) {`);
    this.template.push(`    respons.getErrorDropdown(e.message, req, res);`);
    this.template.push(`  }`);
    this.template.push(`};`);
    this.template.push(``);
    this.template.push(`export default {`);
    this.template.push(`  get${this.moduleName}TableList,`);
    this.template.push(`  get${this.moduleName}TableById,`);
    this.template.push(`  create${this.moduleName}Table,`);
    this.template.push(`  edit${this.moduleName}Table,`);
    this.template.push(`  delete${this.moduleName}Table,`);
    this.template.push(`  get${this.moduleName}Dropdown,`);
    this.template.push(`};`);
  }
}
