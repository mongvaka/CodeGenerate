import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('FUNDING_TYPE')
export class FundingType extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'CODE',
    nullable:false,
    type: 'varchar',
    })
    code: string

    @Column({name:'DESCRIPTION',
    nullable:false,
    type: 'varchar',
    })
    description: string

    @Column({name:'FUNDING_GROUP',
    nullable:false,
    type: 'varchar',
    })
    funding_group: string

    @Column({name:'ACCOUNT_CODE',
    nullable:false,
    type: 'varchar',
    })
    account_code: string

    @Column({name:'VAT_INCLUDED',
    nullable:false,
    type: 'boolean',
    })
    vat_included: boolean

    @Column({name:'VAT_RATE',
    nullable:false,
    type: 'bigint',
    })
    vat_rate: number

    @Column({name:'ACTIVE',
    nullable:false,
    type: 'boolean',
    })
    active: boolean

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
