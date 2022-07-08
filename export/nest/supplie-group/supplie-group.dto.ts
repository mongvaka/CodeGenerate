import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class SupplieGroupDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplierCodeId: number
    @ApiProperty({type: String,description:'ชื่อ Group ของ Supplier'})
    name: string
}
export class CreateSupplieGroupDto extends SupplieGroupDto{
    @ApiPropertyOptional({type:Number})
    id:number;
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplierCodeId: number
    @ApiProperty({type: String,description:'ชื่อ Group ของ Supplier'})
    name: string
}
export class UpdateSupplieGroupDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Supplier Group ในฐานข้อมูล'})
    id: number
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplierCodeId: number
    @ApiProperty({type: String,description:'ชื่อ Group ของ Supplier'})
    name: string
}
export class DeleteSupplieGroupDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchSupplieGroupDto extends BaseSearchDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplierCodeId: number
    @ApiPropertyOptional({type: String,description:'ชื่อ Group ของ Supplier'})
    name: string
}
