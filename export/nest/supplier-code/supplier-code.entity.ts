import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('SUPPLIER_CODE')
export class SupplierCode extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'ID',
    nullable:false,
    type: 'bigint',
    })
    id: number

    @Column({name:'CODE',
    nullable:false,
    type: 'varchar',
    })
    code: string

}
