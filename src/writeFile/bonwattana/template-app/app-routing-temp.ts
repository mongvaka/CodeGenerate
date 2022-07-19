import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppRoutingTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';`);
    this.t.push(`import { RouterModule, Routes } from '@angular/router';`);
    this.t.push(`import { ${this.pascalCae}ItemComponent } from 'src/app/components/${this.fileName}/${this.fileName}-item/${this.fileName}-item.component';`);
    this.t.push(`import { ${this.pascalCae}ListComponent } from 'src/app/components/${this.fileName}/${this.fileName}-list/${this.fileName}-list.component';`);
    this.t.push(`import { AuthGuard } from 'src/app/shared/services/auth.guard';`);
    this.t.push(`const routes: Routes = [`);
    this.t.push(`   { path: '', component: ${this.pascalCae}ListComponent ,canActivate:[AuthGuard]},`);
    this.t.push(`   { path: ':id', component: ${this.pascalCae}ItemComponent ,canActivate:[AuthGuard]}`);
    this.t.push(`];`);
    this.t.push(`@NgModule({`);
    this.t.push(`  imports: [RouterModule.forChild(routes)],`);
    this.t.push(`  exports: [RouterModule],`);
    this.t.push(`  schemas: [CUSTOM_ELEMENTS_SCHEMA],`);
    this.t.push(`})`);
    this.t.push(`export class ${this.pascalCae}Routing{}`);
  }
}
