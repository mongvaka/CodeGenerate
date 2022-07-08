import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class NestModuleTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { Module } from '@nestjs/common';`);
    this.t.push(`import { TypeOrmModule } from '@nestjs/typeorm';`);
    this.t.push(`import { DropdownService } from 'src/shared/services/dropdown.service';`);
    this.t.push(`import { DemoController } from './demo.controller';`);
    this.t.push(`import { Demo, VwDemoDropdown, VwDemoItem, VwDemoList } from './demo.entity';`);
    this.t.push(`import { DemoService } from './demo.service';`);
    this.t.push(``);
    this.t.push(`@Module({`);
    this.t.push(`  imports: [`);
    this.t.push(`    TypeOrmModule.forFeature([Demo,VwDemoList,VwDemoItem,VwDemoDropdown])`);
    this.t.push(`  ],`);
    this.t.push(`  controllers: [DemoController],`);
    this.t.push(`  providers: [DemoService,DropdownService],`);
    this.t.push(`  exports: [DemoService,DropdownService]`);
    this.t.push(`})`);
    this.t.push(`export class DemoModule {}`);
  }
}
