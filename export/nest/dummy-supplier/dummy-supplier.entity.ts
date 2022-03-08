import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('DUMMY_SUPPLIER')
export class DummySupplier extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'SUPPLIER_CODE_ID',
    nullable:false,
    type: 'bigint',
    })
    supplier_code_id: number

    @Column({name:'NAME',
    nullable:false,
    type: 'varchar',
    })
    name: string

    @Column({name:'ADDRESS',
    nullable:false,
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

    @Column({name:'CREATED_AT',
    nullable:false,
    type: 'timestamp',
    })
    created_at: Date

    @Column({name:'CREATED_BY',
    nullable:false,
    type: 'varchar',
    })
    created_by: string

    @Column({name:'UPDATED_AT',
    nullable:false,
    type: 'timestamp',
    })
    updated_at: Date

    @Column({name:'UPDATED_BY',
    nullable:false,
    type: 'varchar',
    })
    updated_by: string

}
