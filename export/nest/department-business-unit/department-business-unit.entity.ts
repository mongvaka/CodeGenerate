import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('DEPARTMENT_BUSINESS_UNIT')
export class DepartmentBusinessUnit extends BasicData{
    @PrimaryGeneratedColumn({type:'bigint', name:'ID'})
    id :number;
    @Column({name:'TYPE',
    nullable:true,
    type: 'varchar',
    })
    type: string

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

    @Column({name:'ACTIVE',
    nullable:true,
    type: 'bit',
    })
    active: boolean

}
