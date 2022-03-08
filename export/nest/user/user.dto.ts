import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class UserDto extends BasicDataDto{
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้ของผู้ใช้งานในการใช้งานระบบ'})
    username: string
    @ApiPropertyOptional({type: Boolean,description:'Active Directory สำหรับเก็บข้อมูลผู้ใช้งาน'})
    ad: boolean
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการเพิ่มข้อมูล User'})
    created_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการเพิ่มข้อมูล User'})
    created_by: string
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการอัปเดตข้อมูล User'})
    updated_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการอัปเดตข้อมูล User'})
    updated_by: string
    @ApiPropertyOptional({type: String,description:'null'})
    department_code: string
    @ApiPropertyOptional({type: String,description:'null'})
    module: string
    @ApiPropertyOptional({type: String,description:'null'})
    type: string
}
export class CreateUserDto extends UserDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละบัญชีผู้ใช้งานในฐานข้อมูล'})
    id: number
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้ของผู้ใช้งานในการใช้งานระบบ'})
    username: string
    @ApiPropertyOptional({type: String,description:'null'})
    department_code: string
    @ApiPropertyOptional({type: String,description:'null'})
    module: string
    @ApiPropertyOptional({type: String,description:'null'})
    type: string
}
export class UpdateUserDto extends BasicDataDto{
    @ApiPropertyOptional({type: String,description:'null'})
    department_code: string
    @ApiPropertyOptional({type: String,description:'null'})
    module: string
    @ApiPropertyOptional({type: String,description:'null'})
    type: string
}
export class DeleteUserDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchUserDto extends BaseSearchDataDto{
}
