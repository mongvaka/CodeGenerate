import { CellItemModel } from "../../../model/cellModel";
import { BaseNestClass } from "../base/baseNestClass";
export class NestResponseTemp extends BaseNestClass {
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
    this.t.push(`import {ApiProperty} from "@nestjs/swagger";`);
    this.t.push(
      `import {IResponse} from "../shared/interfaces/response.interface";`
    );
    this.t.push(
      `import { ${this.pascalCae}Dto } from "./${this.fileName}.dto";`
    );
    this.t.push(``);
    this.t.push(
      `export class ${this.pascalCae}Pagenation implements IResponse<${this.pascalCae}Dto[]> {`
    );
    this.t.push(`  @ApiProperty()`);
    this.t.push(`  success: boolean;`);
    this.t.push(``);
    this.t.push(`  @ApiProperty()`);
    this.t.push(`  error: string[];`);
    this.t.push(``);
    this.t.push(`  @ApiProperty()`);
    this.t.push(`  data: ${this.pascalCae}Dto[];`);
    this.t.push(``);
    this.t.push(`  @ApiProperty()`);
    this.t.push(`  currentPage?: number;`);
    this.t.push(``);
    this.t.push(`  @ApiProperty()`);
    this.t.push(`  perPage?: number;`);
    this.t.push(``);
    this.t.push(`  @ApiProperty()`);
    this.t.push(`  totalPage?: number;`);
    this.t.push(``);
    this.t.push(`  @ApiProperty()`);
    this.t.push(`  total?: number;`);
    this.t.push(`}`);
  }
}
