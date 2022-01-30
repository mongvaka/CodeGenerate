import {
  getAgularFieldType,
  getPostgresDataType,
} from "./../../../shared/function";
import { StyleType } from "../../../shared/constans";
import { getColumnName } from "../../../shared/function";
import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class EntitiesTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getEntitiesTemplate() {
    this.initialDataEntities();
    return this.template;
  }
  private initialDataEntities() {
    this.template.push(`import { type } from "os";`);
    this.template.push(`import {`);
    this.template.push(`  Column,`);
    this.template.push(`  Entity,`);
    this.template.push(`  JoinColumn,`);
    this.template.push(`  ManyToOne,`);
    this.template.push(`  OneToMany,`);
    this.template.push(`  OneToOne,`);
    this.template.push(`  PrimaryColumn,`);
    this.template.push(`  PrimaryGeneratedColumn,`);
    this.template.push(`} from "typeorm";`);
    this.template.push(`import { CompanyTable } from "./CompanyTable";`);
    this.template.push(``);
    this.template.push(`@Entity("${this.moduleNameSnakeNonTable}_table")`);
    this.template.push(`export class ${this.moduleName}Table {`);
    this.template.push(`  @PrimaryGeneratedColumn("uuid")`);
    this.template.push(`  ${this.primaryColumn}: string;`);

    const masterListNonFirstRows = this.masterList.filter(
      (value, index) => index > 0
    );
    masterListNonFirstRows.forEach((item) => {
      const columnType: string = getPostgresDataType(item.dataType);
      const modelFieldType: string = getAgularFieldType(item.dataType);
      const columnName: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      this.template.push(`  @Column({`);
      this.template.push(`    type: "${columnType}",`);
      if (!item.mandatory) {
        this.template.push(`    nullable: true,`);
      }
      this.template.push(`  })`);
      this.template.push(`  ${columnName}: ${modelFieldType};`);
    });

    this.template.push(`  @ManyToOne((type) => CompanyTable)`);
    this.template.push(`  @JoinColumn({ name: "company_uuid" })`);
    this.template.push(`  @Column({`);
    this.template.push(`    type: "uuid",`);
    this.template.push(`  })`);
    this.template.push(`  company_uuid: string;`);
    this.template.push(`  @Column("uuid")`);
    this.template.push(`  branch_uuid: string;`);
    this.template.push(`  @Column("boolean")`);
    this.template.push(`  is_active: boolean;`);
    this.template.push(`  @Column("text")`);
    this.template.push(`  create_by: string;`);
    this.template.push(`  @Column("timestamp without time zone")`);
    this.template.push(`  create_date: string;`);
    this.template.push(`  @Column({`);
    this.template.push(`    type: "text",`);
    this.template.push(`    nullable: true,`);
    this.template.push(`  })`);
    this.template.push(`  update_by: string;`);
    this.template.push(`  @Column({`);
    this.template.push(`    type: "timestamp without time zone",`);
    this.template.push(`    nullable: true,`);
    this.template.push(`  })`);
    this.template.push(`  update_date: string;`);
    this.template.push(`  @Column({`);
    this.template.push(`    type: "uuid",`);
    this.template.push(`    nullable: true,`);
    this.template.push(`  })`);
    this.template.push(`  ref_uuid: string;`);
    this.template.push(`  @Column({`);
    this.template.push(`    type: "integer",`);
    this.template.push(`    nullable: true,`);
    this.template.push(`  })`);
    this.template.push(`  ref_type: number;`);

    this.template.push(`}`);
  }
}
