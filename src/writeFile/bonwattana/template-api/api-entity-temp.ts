import { InputDataType } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class ApiEntityTemp extends BaseBoonwattanaClass {
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
    const dropdownField = this.masterList.filter(fl=> fl.INPUT_TYPE == InputDataType.FOREIGN)

    this.t.push(`import { BasicData } from "src/core/shared/entities/basic-data";`);
    this.t.push(`import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";`);

    const tableImport:string[] = [...new Set([...dropdownField.map(mp=>mp.LOOKUP_TABLE)])]
    tableImport.forEach(en=>{
      const namePascal =this.getPascalCase(en)
      const fileName = this.getFileCase(en)
      this.t.push(`import { ${namePascal} } from "src/api/${fileName}/${fileName}.entity";`);

    })
    this.t.push(``);
    this.t.push(`@Entity('${this.snakeCase}')`);
    this.t.push(`export class ${this.pascalCae} extends BasicData {`);
    this.t.push(`  @PrimaryGeneratedColumn({type: 'bigint'})`);
    this.t.push(`  id?: number;`);
    this.masterList.forEach(en=>{
      const nullable = en.REQUIRED?'true':'false'
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(en.INPUT_TYPE)
      this.t.push(``);
      this.t.push(`  @Column({nullable: ${nullable}})`);
      this.t.push(`  ${fieldName}?: ${fieldType};`);
    })
    this.t.push(`}`);
    this.t.push(`@ViewEntity({`);
    this.t.push(`    name:'${this.snakeCase}_list',`);
    this.t.push(`    expression: (connection: Connection) => connection.createQueryBuilder()`);
    this.t.push(`        .select("${this.snakeCase}.id", "id")`);

    this.lists.forEach(en=>{
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      this.t.push(`        .addSelect("${this.snakeCase}.${fieldName}", "${fieldName}")`);
      if(en.INPUT_TYPE == InputDataType.FOREIGN){
        const tableJoin = en.LOOKUP_TABLE
        const fieldName = this.getCamelCase(en.COLUMN_NAME)
        const fieldRef = this.getSnakeCase(en.COLUMN_NAME)
        const fieldJoinName = this.getFieldJoinName(fieldName)
        const fieldLabel1 = this.getFieldLabel(en.child,1)
        const fieldLabel2 = this.getFieldLabel(en.child,2)

        this.t.push(`        .addSelect("CONCAT(${fieldRef}.${fieldLabel1} , '[' , ${fieldRef}.${fieldLabel2}, ']')", "${fieldJoinName}")`);
      }
    })
    this.t.push(`        .from(${this.pascalCae}, "${this.snakeCase}")`);
    this.lists.forEach(en=>{
      if(en.INPUT_TYPE == InputDataType.FOREIGN){
        const tableJoin = en.LOOKUP_TABLE
        const tableJoinRef = this.getPascalCase(en.LOOKUP_TABLE) 
        const fieldJoin = this.getCamelCase(en.COLUMN_NAME)
        const fieldRef = this.getSnakeCase(en.COLUMN_NAME)

        this.t.push(`        .leftJoin(${tableJoinRef}, "${fieldRef}","${fieldRef}.Id = ${this.snakeCase}.${fieldJoin}")`);
      }
    })
    this.t.push(`})`);
    this.t.push(`export class Vw${this.pascalCae}List {`);
    this.t.push(`    @ViewColumn()`);
    this.t.push(`    id: number;`);
    this.lists.forEach(en=>{
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(en.INPUT_TYPE)
      this.t.push(``);
      this.t.push(`    @ViewColumn()`);
      this.t.push(`    ${fieldName}: ${fieldType};`);
      if(en.INPUT_TYPE == InputDataType.FOREIGN){
        const fieldName = this.getCamelCase(en.COLUMN_NAME)
        const fieldJoinName = this.getFieldJoinName(fieldName)
        this.t.push(``);
        this.t.push(`    @ViewColumn()`);
        this.t.push(`    ${fieldJoinName}: string;`);
      }
    })
    this.t.push(`}`);
    this.t.push(``);
    this.t.push(`@ViewEntity({`);
    this.t.push(`  name:'${this.snakeCase}_dropdown',`);
    this.t.push(`  expression: (connection: Connection) => connection.createQueryBuilder()`);
    this.t.push(`  .select("${this.snakeCase}.id", "value")`);
    const fieldLabel1 = this.getFieldLabel(this.masterList,1)
    const fieldLabel2 = this.getFieldLabel(this.masterList,2)
    this.t.push(`  .addSelect("CONCAT(${this.snakeCase}.${fieldLabel1} , '[' , ${this.snakeCase}.${fieldLabel2}, ']')", "label")`);
    this.t.push(`      .from(${this.pascalCae}, "${this.snakeCase}")`);
    this.t.push(`})`);
    this.t.push(`export class Vw${this.pascalCae}Dropdown {`);
    this.t.push(``);
    this.t.push(`  @ViewColumn()`);
    this.t.push(`    value: number;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn()`);
    this.t.push(`    label: string;`);
    this.t.push(`}`);
    this.t.push(`@ViewEntity({`);
    this.t.push(`  name:'${this.snakeCase}_item',`);
    this.t.push(`  expression: (connection: Connection) => connection.createQueryBuilder()`);
    this.t.push(`  .select("${this.snakeCase}.id", "id")`);
    this.items.forEach(en=>{
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      this.t.push(`        .addSelect("${this.snakeCase}.${fieldName}", "${fieldName}")`);
      if(en.INPUT_TYPE == InputDataType.FOREIGN){
        const tableJoin = en.LOOKUP_TABLE
        const fieldName = this.getCamelCase(en.COLUMN_NAME)
        const fieldRef = this.getSnakeCase(en.COLUMN_NAME)

        const fieldJoinName = this.getFieldJoinName(fieldName)
        const fieldLabel1 = this.getFieldLabel(en.child,1)
        const fieldLabel2 = this.getFieldLabel(en.child,2)
        this.t.push(`        .addSelect("CONCAT(${fieldRef}.${fieldLabel1} , '[' , ${fieldRef}.${fieldLabel2}, ']')", "${fieldJoinName}")`);
      }
    })
    this.t.push(`      .from(${this.pascalCae}, "${this.snakeCase}")`);
    this.items.forEach(en=>{
      if(en.INPUT_TYPE == InputDataType.FOREIGN){
        const tableJoin = en.LOOKUP_TABLE
        const tableJoinRef = this.getPascalCase(en.LOOKUP_TABLE) 
        const fieldJoin = this.getCamelCase(en.COLUMN_NAME)
        const fieldRef = this.getSnakeCase(en.COLUMN_NAME)

        this.t.push(`        .leftJoin(${tableJoinRef}, "${fieldRef}","${fieldRef}.Id = ${this.snakeCase}.${fieldJoin}")`);
      }
    })
    this.t.push(`})`);
    this.t.push(`export class Vw${this.pascalCae}Item {`);
    this.t.push(``);
    this.t.push(`  @ViewColumn()`);
    this.t.push(`    id: number;`);
    this.items.forEach(en=>{
      const fieldName = this.getCamelCase(en.COLUMN_NAME)
      const fieldType = this.getTypeScriptDataType(en.INPUT_TYPE)
      this.t.push(``);
      this.t.push(`    @ViewColumn()`);
      this.t.push(`    ${fieldName}: ${fieldType};`);
      if(en.INPUT_TYPE == InputDataType.FOREIGN){
        const fieldName = this.getCamelCase(en.COLUMN_NAME)
        const fieldJoinName = this.getFieldJoinName(fieldName)
        this.t.push(``);
        this.t.push(`    @ViewColumn()`);
        this.t.push(`    ${fieldJoinName}: string;`);
      }
    })
    this.t.push(`}`);
  }
  getFieldLabel(child: CellBwModel[], arg1: number) {
    let columnName = ''
    child.forEach(en=>{
      if(en.IS_LABEL == arg1){
        columnName = en.COLUMN_NAME
      }
    })
    return this.getCamelCase(columnName)
  }
  getFieldJoinName(fieldName: string) {
    return fieldName.replace('Id','Value')
  }

}
