import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class NestEntityTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { BasicData } from "../shared/entities/basic-data";`);
    this.t.push(`import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";`);
    this.t.push(``);
    this.t.push(`@Entity('DEMO')`);
    this.t.push(`export class Demo extends BasicData {`);
    this.t.push(`  @PrimaryGeneratedColumn({type: 'bigint', name: 'ID'})`);
    this.t.push(`  id?: number;`);
    this.t.push(``);
    this.t.push(`  @Column({name: 'DEMO_EMAIL', nullable: true})`);
    this.t.push(`  demoEmail?: string;`);
    this.t.push(``);
    this.t.push(`  @Column({name: 'DEMO_NUMBER', nullable: true})`);
    this.t.push(`  demoNumber?: number;`);
    this.t.push(``);
    this.t.push(`  @Column({name: 'DEMO_DATE', nullable: true})`);
    this.t.push(`  demoDate?: Date;`);
    this.t.push(``);
    this.t.push(`  @Column({name: 'DEMO_ENUM', nullable: true})`);
    this.t.push(`  demoEnum?: number;`);
    this.t.push(``);
    this.t.push(`}`);
    this.t.push(`@ViewEntity({`);
    this.t.push(`    name:'DEMO_LIST',`);
    this.t.push(`    expression: (connection: Connection) => connection.createQueryBuilder()`);
    this.t.push(`        .select("demo.id", "ID")`);
    this.t.push(`        .addSelect("demo.demoEmail", "DEMO_EMAIL")`);
    this.t.push(`        .addSelect("demo.demoNumber", "DEMO_NUMBER")`);
    this.t.push(`        .addSelect("demo.demoDate", "DEMO_DATE")`);
    this.t.push(`        .addSelect("demo.demoEnum", "DEMO_ENUM")`);
    this.t.push(`        .from(Demo, "demo")`);
    this.t.push(`})`);
    this.t.push(`export class VwDemoList {`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'ID'})`);
    this.t.push(`    id: number;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_EMAIL'})`);
    this.t.push(`    demoEmail: string;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_NUMBER'})`);
    this.t.push(`    demoNumber: string;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_DATE'})`);
    this.t.push(`    demoDate: string;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_ENUM'})`);
    this.t.push(`    demoEnum: string;`);
    this.t.push(``);
    this.t.push(``);
    this.t.push(`}`);
    this.t.push(``);
    this.t.push(`@ViewEntity({`);
    this.t.push(`  name:'DEMO_DROPDOWN',`);
    this.t.push(`  expression: (connection: Connection) => connection.createQueryBuilder()`);
    this.t.push(`  .select("demo.id", "ID")`);
    this.t.push(`  .addSelect("demo.demoEmail", "DEMO_EMAIL")`);
    this.t.push(`  .addSelect("demo.demoNumber", "DEMO_NUMBER")`);
    this.t.push(`  .addSelect("demo.demoDate", "DEMO_DATE")`);
    this.t.push(`  .addSelect("demo.demoEnum", "DEMO_ENUM")`);
    this.t.push(`      .from(Demo, "demo")`);
    this.t.push(`})`);
    this.t.push(`export class VwDemoDropdown {`);
    this.t.push(``);
    this.t.push(`  @ViewColumn({name:'ID'})`);
    this.t.push(`    id: number;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_EMAIL'})`);
    this.t.push(`    demoEmail: string;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_NUMBER'})`);
    this.t.push(`    demoNumber: string;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_DATE'})`);
    this.t.push(`    demoDate: string;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_ENUM'})`);
    this.t.push(`    demoEnum: string;`);
    this.t.push(`}`);
    this.t.push(`@ViewEntity({`);
    this.t.push(`  name:'DEMO_ITEM',`);
    this.t.push(`  expression: (connection: Connection) => connection.createQueryBuilder()`);
    this.t.push(`  .select("demo.id", "ID")`);
    this.t.push(`  .addSelect("demo.demoEmail", "DEMO_EMAIL")`);
    this.t.push(`  .addSelect("demo.demoNumber", "DEMO_NUMBER")`);
    this.t.push(`  .addSelect("demo.demoDate", "DEMO_DATE")`);
    this.t.push(`  .addSelect("demo.demoEnum", "DEMO_ENUM")`);
    this.t.push(`      .from(Demo, "demo")`);
    this.t.push(`})`);
    this.t.push(`export class VwDemoItem {`);
    this.t.push(``);
    this.t.push(`  @ViewColumn({name:'ID'})`);
    this.t.push(`    id: number;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_EMAIL'})`);
    this.t.push(`    demoEmail: string;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_NUMBER'})`);
    this.t.push(`    demoNumber: number;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_DATE'})`);
    this.t.push(`    demoDate: Date;`);
    this.t.push(``);
    this.t.push(`    @ViewColumn({name:'DEMO_ENUM'})`);
    this.t.push(`    demoEnum: string;`);
    this.t.push(`}`);
  }
  getColumnEntityList(masterList: CellItemModel[]): CellItemModel[] {
    const entityList = masterList.filter((fl) => fl.lookupControl != "PK"&& fl.create);
    return entityList;
  }
}
