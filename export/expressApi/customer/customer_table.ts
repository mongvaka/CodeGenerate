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

@Entity("customer_table")
export class CustomerTable {
  @PrimaryGeneratedColumn("uuid")
  customer_uuid: string;
  @Column({
    type: "text",
  })
  customer_code: string;
  @Column({
    type: "text",
    nullable: true,
  })
  customer_branch_uuid: string;
  @Column({
    type: "text",
    nullable: true,
  })
  customer_category_uuid: string;
  @Column({
    type: "text",
    nullable: true,
  })
  customer_name: string;
  @Column({
    type: "text",
    nullable: true,
  })
  address_uuid: string;
  @Column({
    type: "integer",
    nullable: true,
  })
  credit_term: number;
  @Column({
    type: "text",
    nullable: true,
  })
  description: string;
  @Column({
    type: "text",
    nullable: true,
  })
  tax_uuid: string;
  @Column({
    type: "text",
    nullable: true,
  })
  bank_uuid: string;
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
