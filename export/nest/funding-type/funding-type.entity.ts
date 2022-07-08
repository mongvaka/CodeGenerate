import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('FUNDING_TYPE')
export class FundingType extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'CODE',
    nullable:true,
    type: 'varchar',
    })
    code: string

    @Column({name:'DESCRIPTION',
    nullable:true,
    type: 'varchar',
    })
    description: string

    @Column({name:'FUNDING_GROUP',
    nullable:true,
    type: 'varchar',
    })
    fundingGroup: string

    @Column({name:'ACCOUNT_CODE',
    nullable:true,
    type: 'varchar',
    })
    accountCode: string

    @Column({name:'VAT_INCLUDED',
    nullable:true,
    type: 'bit',
    })
    vatIncluded: boolean

    @Column({name:'VAT_RATE',
    nullable:true,
    type: 'bigint',
    })
    vatRate: number

    @Column({name:'ACTIVE',
    nullable:true,
    type: 'bit',
    })
    active: boolean

}
