import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { CellItemModel } from "../../../model/cellModel";

export class ServicePageTemp extends BaseClass {
  masterList: CellItemModel[];
  template: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getServiceData(): string[] {
    this.template.push(`import { Injectable } from '@angular/core';`);
    this.template.push(`import {`);
    this.template.push(`  PageInformationModel,`);
    this.template.push(`  SearchParameter,`);
    this.template.push(`} from 'app/shared/models/system_model';`);
    this.template.push(
      `import { GatewayService } from 'app/core/services/gateway.service';`
    );
    this.template.push(`@Injectable({`);
    this.template.push(`  providedIn: 'root',`);
    this.template.push(`})`);
    this.template.push(`export class ${this.moduleName}Service {`);
    this.template.push(
      `  serviceKey = '${this.moduleNameSnakeNonTable}_uuid';`
    );
    this.template.push(`  servicePath = '';`);
    this.template.push(`  constructor(private gateway: GatewayService) {}`);
    this.template.push(
      `  get${this.moduleName}TableList(search: SearchParameter): any {`
    );
    this.template.push(
      `    const url = ` +
        "`$" +
        `{this.servicePath}/get${this.moduleName}TableList` +
        "`" +
        `;`
    );
    this.template.push(`    return this.gateway.list(url, search);`);
    this.template.push(`  }`);
    this.template.push(`  get${this.moduleName}TableById(id: string): any {`);
    this.template.push(
      `    const url = ` +
        "`$" +
        `{this.servicePath}/get${this.moduleName}TableById` +
        "`" +
        `;`
    );
    this.template.push(`    return this.gateway.get(url, id);`);
    this.template.push(`  }`);
    this.template.push(`  create${this.moduleName}Table(data: any): any {`);
    this.template.push(
      `    const url = ` +
        "`$" +
        `{this.servicePath}/create${this.moduleName}Table` +
        "`" +
        `;`
    );
    this.template.push(`    return this.gateway.create(url, data);`);
    this.template.push(`  }`);
    this.template.push(`  edit${this.moduleName}Table(data: any): any {`);
    this.template.push(
      `    const url = ` +
        "`$" +
        `{this.servicePath}/edit${this.moduleName}Table` +
        "`" +
        `;`
    );
    this.template.push(`    return this.gateway.edit(url, data);`);
    this.template.push(`  }`);
    this.template.push(`  delete${this.moduleName}Table(id: string): any {`);
    this.template.push(
      `    const url = ` +
        "`$" +
        `{this.servicePath}/delete${this.moduleName}Table` +
        "`" +
        `;`
    );
    this.template.push(`    return this.gateway.del(url, id);`);
    this.template.push(`  }`);
    this.template.push(`  setPath(param: PageInformationModel): void {`);
    this.template.push(`    this.gateway.serviceKey = this.serviceKey;`);
    this.template.push(`    this.servicePath = param.servicePath;`);
    this.template.push(`  }`);
    this.template.push(`}`);

    return this.template;
  }
}
