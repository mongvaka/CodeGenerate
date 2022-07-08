import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('DUMMY_SUPPLIER')
export class DummySupplier extends BasicData{
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

    @Column({name:'ADDRESS',
    nullable:true,
    type: 'varchar',
    })
    address: string

    @Column({name:'PHONE',
    nullable:false,
    type: 'varchar',
    })
    phone: string

    @Column({name:'FAX',
    nullable:false,
    type: 'varchar',
    })
    fax: string

    @Column({name:'EMAIL',
    nullable:false,
    type: 'varchar',
    })
    email: string

    @Column({name:'REMARK',
    nullable:false,
    type: 'varchar',
    })
    remark: string

}
