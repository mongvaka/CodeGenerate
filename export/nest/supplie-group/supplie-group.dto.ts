import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class SupplieGroupDto extends BasicDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplier_code_id: number
    @ApiPropertyOptional({type: String,description:'ชื่อ Group ของ Supplier'})
    name: string
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการเพิ่มข้อมูล Supplier Group'})
    created_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการเพิ่มข้อมูล Supplier Group'})
    created_by: string
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการอัปเดตข้อมูล Supplier Group'})
    updated_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการอัปเดตข้อมูล Supplier Group'})
    updated_by: string
}
export class CreateSupplieGroupDto extends SupplieGroupDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplier_code_id: number
    @ApiPropertyOptional({type: String,description:'ชื่อ Group ของ Supplier'})
    name: string
}
export class UpdateSupplieGroupDto extends BasicDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier Group ในฐานข้อมูล'})
    id: number
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplier_code_id: number
    @ApiPropertyOptional({type: String,description:'ชื่อ Group ของ Supplier'})
    name: string
}
export class DeleteSupplieGroupDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchSupplieGroupDto extends BaseSearchDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplier_code_id: number
    @ApiPropertyOptional({type: String,description:'ชื่อ Group ของ Supplier'})
    name: string
}
