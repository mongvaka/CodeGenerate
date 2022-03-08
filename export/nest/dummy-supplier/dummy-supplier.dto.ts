import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class DummySupplierDto extends BasicDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplier_code_id: number
    @ApiPropertyOptional({type: String,description:'ชื่อของ Supplier'})
    name: string
    @ApiPropertyOptional({type: String,description:'ที่อยู่ของ Supplier'})
    address: string
    @ApiPropertyOptional({type: String,description:'เบอร์โทรศัพท์ของ Supplier'})
    phone: string
    @ApiPropertyOptional({type: String,description:'หมายเลข Fax ของ Supplier'})
    fax: string
    @ApiPropertyOptional({type: String,description:'Email ของ Supplier'})
    email: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุเมื่อมีการเพิ่ม Dummy Supplier ในฐานข้อมูล'})
    remark: string
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการเพิ่มข้อมูล Dummy Supplier'})
    created_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการเพิ่มข้อมูล Dummy Supplier'})
    created_by: string
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการอัปเดตข้อมูล Dummy Supplier'})
    updated_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการอัปเดตข้อมูล Dummy Supplier'})
    updated_by: string
}
export class CreateDummySupplierDto extends DummySupplierDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplier_code_id: number
    @ApiPropertyOptional({type: String,description:'ชื่อของ Supplier'})
    name: string
    @ApiPropertyOptional({type: String,description:'ที่อยู่ของ Supplier'})
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
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Dummy Supplier ในฐานข้อมูล'})
    id: number
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Supplier ในฐานข้อมูล'})
    supplier_code_id: number
    @ApiPropertyOptional({type: String,description:'ชื่อของ Supplier'})
    name: string
    @ApiPropertyOptional({type: String,description:'ที่อยู่ของ Supplier'})
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
    supplier_code_id: number
    @ApiPropertyOptional({type: String,description:'ชื่อของ Supplier'})
    name: string
}
