import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('SUPPLIE_GROUP')
export class SupplieGroup extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'SUPPLIER_CODE_ID',
    nullable:true,
    type: 'bigint',
    })
    supplierCodeId: number

    @Column({name:'NAME',
    nullable:true,
    type: 'varchar',
    })
    name: string

}
