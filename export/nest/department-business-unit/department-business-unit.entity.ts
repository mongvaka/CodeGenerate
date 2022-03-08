import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('DEPARTMENT_BUSINESS_UNIT')
export class DepartmentBusinessUnit extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'TYPE',
    nullable:false,
    type: 'varchar',
    })
    type: string

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
