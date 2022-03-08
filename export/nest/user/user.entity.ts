import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('USER')
export class User extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'USERNAME',
    nullable:false,
    type: 'varchar',
    })
    username: string

    @Column({name:'AD',
    nullable:false,
    type: 'boolean',
    })
    ad: boolean

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

    @Column({name:'DEPARTMENT_CODE',
    nullable:false,
    type: 'varchar',
    })
    department_code: string

    @Column({name:'MODULE',
    nullable:false,
    type: 'varchar',
    })
    module: string

    @Column({name:'TYPE',
    nullable:false,
    type: 'varchar',
    })
    type: string

}
