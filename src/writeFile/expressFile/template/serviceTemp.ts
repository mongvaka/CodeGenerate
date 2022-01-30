import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class ServiceTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getServiceTemplate() {
    this.initialDataService();
    return this.template;
  }
  private initialDataService() {
    this.template.push(`import { Request } from "express";`);
    this.template.push(
      `import { ${this.moduleName}ViewModel } from "../view_model/${this.moduleNameSnake}ViewModel";`
    );
    this.template.push(
      `import { ${this.moduleName}Repository } from "../model/${this.moduleNameSnake}Repository";`
    );
    this.template.push(
      `import { SearchParameter, SelectItems } from "../system_model";`
    );
    this.template.push(`import mTools from "../shared/tools/tools";`);
    this.template.push(
      `import { thowThisError } from "../shared/tools/error_handler";`
    );
    this.template.push(`export default class ${this.moduleName}Service {`);
    this.template.push(
      `  create${this.moduleName}Table = async (req: Request) => {`
    );
    this.template.push(`    try {`);
    this.template.push(
      `      const model: ${this.moduleName}ViewModel = new ${this.moduleName}ViewModel(req.body);`
    );
    this.template.push(
      `      const ${this.moduleNameSnake}Repository: ${this.moduleName}Repository = new ${this.moduleName}Repository(req);`
    );
    this.template.push(
      `      return await ${this.moduleNameSnake}Repository.create(model);`
    );
    this.template.push(`    } catch (error: any) {`);
    this.template.push(`      thowThisError(error);`);
    this.template.push(`    }`);
    this.template.push(`  };`);
    this.template.push(
      `  get${this.moduleName}TableList = async (req: Request) => {`
    );
    this.template.push(`    try {`);
    this.template.push(
      `      const searchParameter: SearchParameter = mTools.getSearchParameter(`
    );
    this.template.push(`        req.body`);
    this.template.push(`      );`);
    this.template.push(
      `      const ${this.moduleNameSnake}Repository: ${this.moduleName}Repository = new ${this.moduleName}Repository(req);`
    );
    this.template.push(
      `      return await ${this.moduleNameSnake}Repository.get${this.moduleName}List(searchParameter);`
    );
    this.template.push(`    } catch (error: any) {`);
    this.template.push(`      thowThisError(error);`);
    this.template.push(`    }`);
    this.template.push(`  };`);
    this.template.push(
      `  edit${this.moduleName}Table = async (req: Request) => {`
    );
    this.template.push(`    try {`);
    this.template.push(
      `      const model: ${this.moduleName}ViewModel = new ${this.moduleName}ViewModel(req.body);`
    );
    this.template.push(
      `      const ${this.moduleNameSnake}Repository: ${this.moduleName}Repository = new ${this.moduleName}Repository(req);`
    );
    this.template.push(
      `      return await ${this.moduleNameSnake}Repository.edit(model.${this.moduleNameSnake}_uuid, model);`
    );
    this.template.push(`    } catch (error: any) {`);
    this.template.push(`      thowThisError(error);`);
    this.template.push(`    }`);
    this.template.push(`  };`);
    this.template.push(
      `  delete${this.moduleName}Table = async (req: Request) => {`
    );
    this.template.push(`    try {`);
    this.template.push(`      const id: string = req.body.primaryKey;`);
    this.template.push(
      `      const ${this.moduleNameSnake}Repository: ${this.moduleName}Repository = new ${this.moduleName}Repository(req);`
    );
    this.template.push(
      `      return await ${this.moduleNameSnake}Repository.delete(id);`
    );
    this.template.push(`    } catch (error: any) {`);
    this.template.push(`      thowThisError(error);`);
    this.template.push(`    }`);
    this.template.push(`  };`);
    this.template.push(
      `  get${this.moduleName}TableById = async (req: Request) => {`
    );
    this.template.push(`    try {`);
    this.template.push(`      const primaryKey: string = req.body.primaryKey;`);
    this.template.push(
      `      const ${this.moduleNameSnake}Repository: ${this.moduleName}Repository = new ${this.moduleName}Repository(req);`
    );
    this.template.push(
      `      return await ${this.moduleNameSnake}Repository.getById(primaryKey);`
    );
    this.template.push(`    } catch (error: any) {`);
    this.template.push(`      thowThisError(error);`);
    this.template.push(`    }`);
    this.template.push(`  };`);
    this.template.push(``);
    this.template.push(
      `  get${this.moduleName}Dropdown = async (req: Request) => {`
    );
    this.template.push(`    try {`);
    this.template.push(
      `      const searchParameter: SearchParameter = mTools.getSearchParameter(`
    );
    this.template.push(`        req.body`);
    this.template.push(`      );`);
    this.template.push(
      `      const ${this.moduleNameSnake}Repository: ${this.moduleName}Repository = new ${this.moduleName}Repository(req);`
    );
    this.template.push(
      `      return await ${this.moduleNameSnake}Repository.getDropdown(searchParameter);`
    );
    this.template.push(`    } catch (error: any) {`);
    this.template.push(`      thowThisError(error);`);
    this.template.push(`    }`);
    this.template.push(`  };`);
    this.template.push(`}`);
  }
}
