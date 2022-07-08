import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('REJECT_AND_CANCEL_REASON')
export class RejectAndCancelReason extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'REASON_TYPE_ID',
    nullable:true,
    type: 'bigint',
    })
    reasonTypeId: number

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

    @Column({name:'REMARK',
    nullable:false,
    type: 'varchar',
    })
    remark: string

    @Column({name:'ACTIVE',
    nullable:true,
    type: 'bit',
    })
    active: boolean

}
