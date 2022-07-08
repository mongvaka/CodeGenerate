import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class NestDtoTemp extends BaseBoonwattanaClass {
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
    const allField: CellItemModel[] = this.masterList.filter(
      (fl) => fl.dataType != 'FK' && fl.create
    );
    const createFiled: CellItemModel[] = this.masterList.filter(
      (fl) => fl.create
    );
    const updateFiled: CellItemModel[] = this.masterList.filter(
      (fl) => fl.update
    );
    const searchFiled: CellItemModel[] = this.masterList.filter(
      (fl) => fl.search
    );

    this.t.push(`import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";`);
    this.t.push(`import { SearchParameter } from "src/shared/models/search-param-model";`);
    this.t.push(``);
    this.t.push(`export class SearchDemoDto extends SearchParameter {`);
    this.t.push(`    demoEmail:string`);
    this.t.push(`    demoNumber:string`);
    this.t.push(`    demoDate:string`);
    this.t.push(`    demoEnum:string`);
    this.t.push(`}`);
    this.t.push(`export class DemoDto {`);
    this.t.push(`    demoEmail:string`);
    this.t.push(`    demoNumber:string`);
    this.t.push(`    demoDate:string`);
    this.t.push(`    demoEnum:string`);
    this.t.push(`} `);
    this.t.push(`export class CreateDemoDto extends DemoDto{`);
    this.t.push(``);
    this.t.push(`}`);
    this.t.push(`export class UpdateDemoDto extends DemoDto{`);
    this.t.push(`    @ApiProperty()`);
    this.t.push(`    id:number`);
    this.t.push(``);
    this.t.push(`}`);
  }
}
