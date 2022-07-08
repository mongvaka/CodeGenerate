import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('CUSTOMER')
export class Customer extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'CODE',
    nullable:true,
    type: 'bigint',
    })
    code: number

    @Column({name:'NAME',
    nullable:true,
    type: 'varchar',
    })
    name: string

    @Column({name:'CONTACT_PERSON_NAME',
    nullable:false,
    type: 'varchar',
    })
    contactPersonName: string

    @Column({name:'CONTACT_PERSON_TITLE',
    nullable:false,
    type: 'varchar',
    })
    contactPersonTitle: string

    @Column({name:'ADDRESS',
    nullable:true,
    type: 'varchar',
    })
    address: string

    @Column({name:'TELEPHONE',
    nullable:true,
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

}
