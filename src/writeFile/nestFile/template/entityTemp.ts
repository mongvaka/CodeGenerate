import { CellItemModel } from "../../../model/cellModel";
import { BaseNestClass } from "../base/baseNestClass";
export class NestEntityTemp extends BaseNestClass {
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
    const columnEntity: CellItemModel[] = this.getColumnEntityList(
      this.masterList
    );
    this.t.push(
      `import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";`
    );
    this.t.push(`import {BasicData} from "../shared/entities/basic-data";`);
    this.t.push(`@Entity('${this.moduleName}')`);
    this.t.push(`export class ${this.pascalCae} extends BasicData{`);
    this.t.push(`    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})`);
    this.t.push(`    id :number;`);

    columnEntity.forEach((item) => {
      const nullable: boolean = item.mandatory;
      const columnType: string = this.getDataType(item.dataType);
      const snake: string =   item.columnName.toLocaleLowerCase();
      const pas: string =   this.getPascalCase(snake)
      const camel: string =   this.getCamelCase(pas)

      const typeScriptDataType = this.getTypeScriptDataType(item.dataType);
      this.t.push(`    @Column({name:'${item.columnName}',`);
      this.t.push(`    nullable:${nullable},`);
      this.t.push(`    type: '${columnType}',`);
      if (item.dataType == "DECIMAL(14, 4)") {
        this.t.push(`    { precision: 14,`);
        this.t.push(`    scale: 4,`);
        this.t.push(`    default: 0.0,`);
      }
      if (item.dataType == "DECIMAL") {
        this.t.push(`    { precision: 9,`);
        this.t.push(`    scale: 10,`);
        this.t.push(`    default: 0.0,`);
      }
      this.t.push(`    })`);
      this.t.push(`    ${camel}: ${typeScriptDataType}`);
      this.t.push(``);
    });

    this.t.push(`}`);
  }
  getColumnEntityList(masterList: CellItemModel[]): CellItemModel[] {
    const entityList = masterList.filter((fl) => fl.lookupControl != "PK"&& fl.create);
    return entityList;
  }
}
