import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('CUSTOMER')
export class Customer extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'CODE',
    nullable:false,
    type: 'bigint',
    })
    code: number

    @Column({name:'NAME',
    nullable:false,
    type: 'varchar',
    })
    name: string

    @Column({name:'CONTACT_PERSON_NAME',
    nullable:false,
    type: 'varchar',
    })
    contact_person_name: string

    @Column({name:'CONTACT_PERSON_TITLE',
    nullable:false,
    type: 'varchar',
    })
    contact_person_title: string

    @Column({name:'ADDRESS',
    nullable:false,
    type: 'varchar',
    })
    address: string

    @Column({name:'TELEPHONE',
    nullable:false,
    type: 'varchar',
    })
    telephone: string

    @Column({name:'MOBILE',
    nullable:false,
    type: 'varchar',
    })
    mobile: string

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
