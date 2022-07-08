import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppModuleTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { NgModule } from '@angular/core';`);
    this.t.push(`import { CommonModule } from '@angular/common';`);
    this.t.push(`import { DemoListComponent } from './demo-list/demo-list.component';`);
    this.t.push(`import { DemoItemComponent } from './demo-item/demo-item.component';`);
    this.t.push(`import { SharedWidgetModule } from 'src/app/shared/widgets/shared-widget.module';`);
    this.t.push(`import { DemoRouting } from './demo-routing';`);
    this.t.push(`@NgModule({`);
    this.t.push(`  declarations: [`);
    this.t.push(`    DemoListComponent,`);
    this.t.push(`    DemoItemComponent`);
    this.t.push(`  ],`);
    this.t.push(`  imports: [`);
    this.t.push(`    CommonModule,`);
    this.t.push(`   SharedWidgetModule,`);
    this.t.push(`   DemoRouting`);
    this.t.push(`  ],`);
    this.t.push(`  exports: [DemoListComponent, DemoItemComponent,DemoRouting],`);
    this.t.push(`})`);
    this.t.push(`export class DemoModule { }`);
  }
}
