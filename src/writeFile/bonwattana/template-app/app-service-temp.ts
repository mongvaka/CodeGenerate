import { InputDataType } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppServiceTemp extends BaseBoonwattanaClass {
  private masterList: CellBwModel[];
  private t: string[];
  constructor(masterList: CellBwModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.t = [];
  }
  getTemplate() {
    this.initialDataItemPage();
    return this.t;
  }
  private initialDataItemPage() {
    this.t.push(`import { Injectable } from '@angular/core';`);
    this.t.push(`import { of } from 'rxjs';`);
    this.t.push(`import { SearchParameter } from 'src/app/shared/models/search-param-model';`);
    this.t.push(`import { GatewayService } from 'src/app/shared/services/gateway';`);
    this.t.push(`import { ${this.pascalCae}ItemModel } from './${this.fileName}-model';`);
    this.t.push(`@Injectable({`);
    this.t.push(`  providedIn: 'root'`);
    this.t.push(`})`);
    this.t.push(`export class ${this.pascalCae}Service {`);
    this.t.push(`  servicePath = '/${this.fileName}';`);
    this.t.push(`  constructor(private gateway: GatewayService) { }`);
    this.t.push(`  create(model:${this.pascalCae}ItemModel):any{    `);
    this.t.push("    const url = `${this.servicePath}/create`;");
    this.t.push(`    return  this.gateway.create(url,model);`);
    this.t.push(`  }`);
    this.t.push(`  getList(search: SearchParameter): any {`);
    this.t.push("    const url = `${this.servicePath}/list`;");
    this.t.push(`    return  this.gateway.list(url, search);`);
    this.t.push(`  }`);
    this.t.push(`  getItem(id:number): any {`);
    this.t.push("    const url = `${this.servicePath}/item/${id}`;");
    this.t.push(`    return  this.gateway.get(url);`);
    this.t.push(`  }`);
    //dropdownSection
    const foreignOptions = this.masterList.filter(fl=>fl.INPUT_TYPE == InputDataType.FOREIGN)
    foreignOptions.forEach(el=>{
      const namePascal = this.getPascalCase(el.COLUMN_NAME).replace('Id','')
      const pathName = this.getFileCase(el.COLUMN_NAME).replace('-id','')
      this.t.push(`  get${namePascal}Dropdown(): any {`);
      this.t.push("    const url = `${this.servicePath}/"+pathName+"-dropdown`;");
      this.t.push(`    return  this.gateway.get(url);`);
      this.t.push(`  }`);
    })
    
    //dropdownSection
    this.t.push(`  update(id:number,model:${this.pascalCae}ItemModel): any {`);
    this.t.push("    const url = `${this.servicePath}/update/${id}`;");
    this.t.push(`    return  this.gateway.update(url,model);`);
    this.t.push(`  }`);
    this.t.push(`  delete(id:number):any{`);
    this.t.push("    const url = `${this.servicePath}/delete/${id}`;");
    this.t.push(`    return  this.gateway.delete(url);`);
    this.t.push(`  }`);
    this.t.push(`  initial():any{`);
    this.t.push(`    return of(new ${this.pascalCae}ItemModel())  ;`);
    this.t.push(`  }`);
    this.t.push(`}`);
  }
}
