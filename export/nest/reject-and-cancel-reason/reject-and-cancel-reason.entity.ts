import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('REJECT_AND_CANCEL_REASON')
export class RejectAndCancelReason extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'REASON_TYPE_ID',
    nullable:false,
    type: 'bigint',
    })
    reason_type_id: number

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

    @Column({name:'REMARK',
    nullable:false,
    type: 'varchar',
    })
    remark: string

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
