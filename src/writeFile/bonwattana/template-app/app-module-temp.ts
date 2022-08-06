import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppModuleTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { NgModule } from '@angular/core';`);
    this.t.push(`import { CommonModule } from '@angular/common';`);
    this.t.push(`import { ${this.pascalCae}ListComponent } from './${this.fileName}-list/${this.fileName}-list.component';`);
    this.t.push(`import { ${this.pascalCae}ItemComponent } from './${this.fileName}-item/${this.fileName}-item.component';`);
    this.t.push(`import { SharedWidgetModule } from 'src/app/shared/widgets/shared-widget.module';`);
    this.t.push(`import { ${this.pascalCae}Routing } from './${this.fileName}-routing';`);
    this.t.push(`@NgModule({`);
    this.t.push(`  declarations: [`);
    this.t.push(`    ${this.pascalCae}ListComponent,`);
    this.t.push(`    ${this.pascalCae}ItemComponent`);
    this.t.push(`  ],`);
    this.t.push(`  imports: [`);
    this.t.push(`    CommonModule,`);
    this.t.push(`   SharedWidgetModule,`);
    this.t.push(`   ${this.pascalCae}Routing`);
    this.t.push(`  ],`);
    this.t.push(`  exports: [${this.pascalCae}ListComponent, ${this.pascalCae}ItemComponent,${this.pascalCae}Routing],`);
    this.t.push(`})`);
    this.t.push(`export class ${this.pascalCae}Module { }`);
  }
}
