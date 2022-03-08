import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class DepartmentBusinessUnitDto extends BasicDataDto{
    @ApiPropertyOptional({type: String,description:'Department หรือ Business Unit'})
    type: string
    @ApiPropertyOptional({type: String,description:'Code ของ Department/Business Unit'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Department/Business Unit'})
    description: string
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Department/Business Unit'})
    active: boolean
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการเพิ่มข้อมูล Department/Business Unit'})
    created_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการเพิ่มข้อมูล Department/Business Unit'})
    created_by: string
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการอัปเดตข้อมูล Department/Business Unit'})
    updated_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการอัปเดตข้อมูล Department/Business Unit'})
    updated_by: string
}
export class CreateDepartmentBusinessUnitDto extends DepartmentBusinessUnitDto{
    @ApiPropertyOptional({type: String,description:'Department หรือ Business Unit'})
    type: string
    @ApiPropertyOptional({type: String,description:'Code ของ Department/Business Unit'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Department/Business Unit'})
    description: string
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Department/Business Unit'})
    active: boolean
}
export class UpdateDepartmentBusinessUnitDto extends BasicDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Department/Business Unit ในฐานข้อมูล'})
    id: number
    @ApiPropertyOptional({type: String,description:'Department หรือ Business Unit'})
    type: string
    @ApiPropertyOptional({type: String,description:'Code ของ Department/Business Unit'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Department/Business Unit'})
    description: string
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Department/Business Unit'})
    active: boolean
}
export class DeleteDepartmentBusinessUnitDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchDepartmentBusinessUnitDto extends BaseSearchDataDto{
    @ApiPropertyOptional({type: String,description:'Department หรือ Business Unit'})
    type: string
    @ApiPropertyOptional({type: String,description:'Code ของ Department/Business Unit'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Department/Business Unit'})
    description: string
}
