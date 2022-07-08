import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class DummySupplierDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplierCodeId: number
    @ApiProperty({type: String,description:'ชื่อของ Supplier'})
    name: string
    @ApiProperty({type: String,description:'ที่อยู่ของ Supplier'})
    address: string
    @ApiPropertyOptional({type: String,description:'เบอร์โทรศัพท์ของ Supplier'})
    phone: string
    @ApiPropertyOptional({type: String,description:'หมายเลข Fax ของ Supplier'})
    fax: string
    @ApiPropertyOptional({type: String,description:'Email ของ Supplier'})
    email: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุเมื่อมีการเพิ่ม Dummy Supplier ในฐานข้อมูล'})
    remark: string
}
export class CreateDummySupplierDto extends DummySupplierDto{
    @ApiPropertyOptional({type:Number})
    id:number;
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplierCodeId: number
    @ApiProperty({type: String,description:'ชื่อของ Supplier'})
    name: string
    @ApiProperty({type: String,description:'ที่อยู่ของ Supplier'})
    address: string
    @ApiPropertyOptional({type: String,description:'เบอร์โทรศัพท์ของ Supplier'})
    phone: string
    @ApiPropertyOptional({type: String,description:'หมายเลข Fax ของ Supplier'})
    fax: string
    @ApiPropertyOptional({type: String,description:'Email ของ Supplier'})
    email: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุเมื่อมีการเพิ่ม Dummy Supplier ในฐานข้อมูล'})
    remark: string
}
export class UpdateDummySupplierDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Dummy Supplier ในฐานข้อมูล'})
    id: number
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplierCodeId: number
    @ApiProperty({type: String,description:'ชื่อของ Supplier'})
    name: string
    @ApiProperty({type: String,description:'ที่อยู่ของ Supplier'})
    address: string
    @ApiPropertyOptional({type: String,description:'เบอร์โทรศัพท์ของ Supplier'})
    phone: string
    @ApiPropertyOptional({type: String,description:'หมายเลข Fax ของ Supplier'})
    fax: string
    @ApiPropertyOptional({type: String,description:'Email ของ Supplier'})
    email: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุเมื่อมีการเพิ่ม Dummy Supplier ในฐานข้อมูล'})
    remark: string
}
export class DeleteDummySupplierDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchDummySupplierDto extends BaseSearchDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplierCodeId: number
    @ApiPropertyOptional({type: String,description:'ชื่อของ Supplier'})
    name: string
}
