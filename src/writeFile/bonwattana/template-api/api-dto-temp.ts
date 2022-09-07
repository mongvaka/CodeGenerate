import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class ApiDtoTemp extends BaseBoonwattanaClass {
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
    const createFiled: CellBwModel[] = this.masterList.filter(
      (fl) => fl.CREATE
    );
    const updateFiled: CellBwModel[] = this.masterList.filter(
      (fl) => fl.UPDATE
    );
    const searchFiled: CellBwModel[] = this.masterList.filter(
      (fl) => fl.SEARCH
    );

    this.t.push(`import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";`);
    this.t.push(`import { SearchParameter } from "src/core/shared/models/search-param-model";`);
    this.t.push(``);
    this.t.push(`export class Search${this.pascalCae}Dto extends SearchParameter {`);
    searchFiled.forEach(en=>{
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(en.INPUT_TYPE)
      const fieldTypeUpper = this.getTypeScriptDataDtoType(en.INPUT_TYPE)
      this.t.push(`@ApiPropertyOptional({ type: ${fieldTypeUpper}})`);
      this.t.push(`    ${fieldName}?:${fieldType}`);
    })
    this.t.push(`}`);
    this.t.push(`export class ${this.pascalCae}Dto {`);
    this.masterList.forEach(en=>{
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(en.INPUT_TYPE)
      const fieldTypeUpper = this.getTypeScriptDataDtoType(en.INPUT_TYPE)
      this.t.push(`@ApiPropertyOptional({ type: ${fieldTypeUpper}})`);
      this.t.push(`    ${fieldName}:${fieldType}`);
    })
    this.t.push(`} `);
    this.t.push(`export class Create${this.pascalCae}Dto extends ${this.pascalCae}Dto{`);
    createFiled.forEach(en=>{
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(en.INPUT_TYPE)
      const fieldTypeUpper = this.getTypeScriptDataDtoType(en.INPUT_TYPE)
      this.t.push(`@ApiPropertyOptional({ type: ${fieldTypeUpper}})`);
      this.t.push(`    ${fieldName}:${fieldType}`);
    })
    this.t.push(`}`);
    this.t.push(`export class Update${this.pascalCae}Dto extends ${this.pascalCae}Dto{`);
    updateFiled.forEach(en=>{
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(en.INPUT_TYPE)
      const fieldTypeUpper = this.getTypeScriptDataDtoType(en.INPUT_TYPE)
      this.t.push(`@ApiPropertyOptional({ type: ${fieldTypeUpper}})`);
      this.t.push(`    ${fieldName}:${fieldType}`);
    })
    this.t.push(`}`);
  }
}
