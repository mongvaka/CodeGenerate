import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppServiceTemp extends BaseBoonwattanaClass {
  private masterList: CellItemModel[];
  private t: string[];
  constructor(masterList: CellItemModel[]) {
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
    this.t.push(`import { DemoItemModel } from './demo-model';`);
    this.t.push(`@Injectable({`);
    this.t.push(`  providedIn: 'root'`);
    this.t.push(`})`);
    this.t.push(`export class DemoService {`);
    this.t.push(`  servicePath = '/demo';`);
    this.t.push(`  constructor(private gateway: GatewayService) { }`);
    this.t.push(`  create(model:DemoItemModel):any{    `);
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
    this.t.push(`  getDemoDropdown(): any {`);
    this.t.push("    const url = `${this.servicePath}/dropdown`;");
    this.t.push(`    return  this.gateway.get(url);`);
    this.t.push(`  }`);
    this.t.push(`  update(id:number,model:DemoItemModel): any {`);
    this.t.push("    const url = `${this.servicePath}/update/${id}`;");
    this.t.push(`    return  this.gateway.update(url,model);`);
    this.t.push(`  }`);
    this.t.push(`  delete(id:number):any{`);
    this.t.push("    const url = `${this.servicePath}/delete/${id}`;");
    this.t.push(`    return  this.gateway.delete(url);`);
    this.t.push(`  }`);
    this.t.push(`  initial():any{`);
    this.t.push(`    return of(new DemoItemModel())  ;`);
    this.t.push(`  }`);
    this.t.push(`}`);
  }
}
