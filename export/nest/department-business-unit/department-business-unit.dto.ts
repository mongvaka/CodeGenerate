import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class DepartmentBusinessUnitDto extends BasicDataDto{
    @ApiProperty({type: String,description:'Department หรือ Business Unit'})
    type: string
    @ApiProperty({type: String,description:'Code ของ Department/Business Unit'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Department/Business Unit'})
    description: string
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Department/Business Unit'})
    active: boolean
}
export class CreateDepartmentBusinessUnitDto extends DepartmentBusinessUnitDto{
    @ApiPropertyOptional({type:Number})
    id:number;
    @ApiProperty({type: String,description:'Department หรือ Business Unit'})
    type: string
    @ApiProperty({type: String,description:'Code ของ Department/Business Unit'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Department/Business Unit'})
    description: string
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Department/Business Unit'})
    active: boolean
}
export class UpdateDepartmentBusinessUnitDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Department/Business Unit ในฐานข้อมูล'})
    id: number
    @ApiProperty({type: String,description:'Department หรือ Business Unit'})
    type: string
    @ApiProperty({type: String,description:'Code ของ Department/Business Unit'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Department/Business Unit'})
    description: string
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Department/Business Unit'})
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
