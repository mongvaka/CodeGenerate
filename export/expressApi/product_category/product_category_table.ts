import { type } from "os";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CompanyTable } from "./CompanyTable";

@Entity("product_category_table")
export class ProductCategoryTable {
  @PrimaryGeneratedColumn("uuid")
  product_category_uuid: string;
  @Column({
    type: "text",
  })
  product_category_name: any;
  @Column({
    type: "text",
    nullable: true,
  })
  product_category_description: any;
  @ManyToOne((type) => CompanyTable)
  @JoinColumn({ name: "company_uuid" })
  @Column({
    type: "uuid",
  })
  company_uuid: string;
  @Column("uuid")
  branch_uuid: string;
  @Column("boolean")
  is_active: boolean;
  @Column("text")
  create_by: string;
  @Column("timestamp without time zone")
  create_date: string;
  @Column({
    type: "text",
    nullable: true,
  })
  update_by: string;
  @Column({
    type: "timestamp without time zone",
    nullable: true,
  })
  update_date: string;
  @Column({
    type: "uuid",
    nullable: true,
  })
  ref_uuid: string;
  @Column({
    type: "integer",
    nullable: true,
  })
  ref_type: number;
}
