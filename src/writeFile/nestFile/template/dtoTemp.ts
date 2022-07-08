import { CellItemModel } from "../../../model/cellModel";
import { BaseNestClass } from "../base/baseNestClass";
export class NestDtoTemp extends BaseNestClass {
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

    this.t.push(`import {BasicDataDto} from "../shared/dtos/basic-data.dto";`);
    this.t.push(
      `import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";`
    );
    this.t.push(
      `import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";`
    );
    this.t.push(`import {IsString} from "class-validator";`);
    this.t.push(`export class ${this.pascalCae}Dto extends BasicDataDto{`);

    allField.forEach((item) => {
      const dataTypeUpper: string = this.getDataTypeUpper(item.dataType);
      const dataType: string = this.getTypeScriptDataType(item.dataType);
      const snake: string =   item.columnName.toLocaleLowerCase();
      const pas: string =   this.getPascalCase(snake)
      const camel: string =   this.getCamelCase(pas)
      const description: string = item.description;
      const poperty: string = item.mandatory
        ? "ApiProperty"
        : "ApiPropertyOptional";

      this.t.push(
        `    @${poperty}({type: ${dataTypeUpper},description:'${description}'})`
      );
      this.t.push(`    ${camel}: ${dataType}`);
    });
    this.t.push(`}`);

    this.t.push(
      `export class Create${this.pascalCae}Dto extends ${this.pascalCae}Dto{`
    );
    createFiled.forEach((item) => {
      const dataTypeUpper: string = this.getDataTypeUpper(item.dataType);
      const dataType: string = this.getTypeScriptDataType(item.dataType);
      const snake: string =   item.columnName.toLocaleLowerCase();
      const pas: string =   this.getPascalCase(snake)
      const camel: string =   this.getCamelCase(pas)
      const description: string = item.description;
      const poperty: string = item.mandatory
        ? "ApiProperty"
        : "ApiPropertyOptional";

      this.t.push(
        `    @${poperty}({type: ${dataTypeUpper},description:'${description}'})`
      );
      this.t.push(`    ${camel}: ${dataType}`);
    });

    this.t.push(`}`);

    this.t.push(
      `export class Update${this.pascalCae}Dto extends BasicDataDto{`
    );
    updateFiled.forEach((item) => {
      const dataTypeUpper: string = this.getDataTypeUpper(item.dataType);
      const dataType: string = this.getTypeScriptDataType(item.dataType);
      const snake: string =   item.columnName.toLocaleLowerCase();
      const pas: string =   this.getPascalCase(snake)
      const camel: string =   this.getCamelCase(pas)
      const description: string = item.description;
      const poperty: string = item.mandatory
        ? "ApiProperty"
        : "ApiPropertyOptional";

      this.t.push(
        `    @${poperty}({type: ${dataTypeUpper},description:'${description}'})`
      );
      this.t.push(`    ${camel}: ${dataType}`);
    });

    this.t.push(`}`);
    this.t.push(
      `export class Delete${this.pascalCae}Dto extends BasicDataDto{`
    );
    this.t.push(`    @ApiProperty({type:Number})`);
    this.t.push(`    id:number;`);
    this.t.push(`}`);
    this.t.push(
      `export class Search${this.pascalCae}Dto extends BaseSearchDataDto{`
    );
    searchFiled.forEach((item) => {
      const dataTypeUpper: string = this.getDataTypeUpper(item.dataType);
      const dataType: string = this.getTypeScriptDataType(item.dataType);
      const snake: string =   item.columnName.toLocaleLowerCase();
      const pas: string =   this.getPascalCase(snake)
      const camel: string =   this.getCamelCase(pas)
      const description: string = item.description;
      const poperty: string =  "ApiPropertyOptional";

      this.t.push(
        `    @${poperty}({type: ${dataTypeUpper},description:'${description}'})`
      );
      this.t.push(`    ${camel}: ${dataType}`);
    });
    this.t.push(`}`);
  }
}
