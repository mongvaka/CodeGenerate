import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class CustomerDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'Code ของ Customer'})
    code: number
    @ApiProperty({type: String,description:'ชื่อของ Customer'})
    name: string
    @ApiPropertyOptional({type: String,description:'ชื่อของ Customer ที่ใช้สำหรับการติดต่อ'})
    contactPersonName: string
    @ApiPropertyOptional({type: String,description:'ตำแหน่งของ Customer ที่ใช้สำหรับการติดต่อ'})
    contactPersonTitle: string
    @ApiProperty({type: String,description:'ที่อยู่ของ Customer'})
    address: string
    @ApiProperty({type: String,description:'เบอร์โทรศัพท์สำหรับการติดต่อ Customer'})
    telephone: string
    @ApiPropertyOptional({type: String,description:'เบอร์โทรศัพท์มือถือสำหรับการติดต่อ Customer'})
    mobile: string
    @ApiPropertyOptional({type: String,description:'หมายเลข Fax ของ Customer'})
    fax: string
    @ApiPropertyOptional({type: String,description:'Email ของ Customer'})
    email: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Customer'})
    remark: string
}
export class CreateCustomerDto extends CustomerDto{
    @ApiPropertyOptional({type:Number})
    id:number;
    @ApiProperty({type: Number,description:'Code ของ Customer'})
    code: number
    @ApiProperty({type: String,description:'ชื่อของ Customer'})
    name: string
    @ApiPropertyOptional({type: String,description:'ชื่อของ Customer ที่ใช้สำหรับการติดต่อ'})
    contactPersonName: string
    @ApiPropertyOptional({type: String,description:'ตำแหน่งของ Customer ที่ใช้สำหรับการติดต่อ'})
    contactPersonTitle: string
    @ApiProperty({type: String,description:'ที่อยู่ของ Customer'})
    address: string
    @ApiProperty({type: String,description:'เบอร์โทรศัพท์สำหรับการติดต่อ Customer'})
    telephone: string
    @ApiPropertyOptional({type: String,description:'เบอร์โทรศัพท์มือถือสำหรับการติดต่อ Customer'})
    mobile: string
    @ApiPropertyOptional({type: String,description:'หมายเลข Fax ของ Customer'})
    fax: string
    @ApiPropertyOptional({type: String,description:'Email ของ Customer'})
    email: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Customer'})
    remark: string
}
export class UpdateCustomerDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Customer ในฐานข้อมูล'})
    id: number
    @ApiProperty({type: Number,description:'Code ของ Customer'})
    code: number
    @ApiProperty({type: String,description:'ชื่อของ Customer'})
    name: string
    @ApiPropertyOptional({type: String,description:'ชื่อของ Customer ที่ใช้สำหรับการติดต่อ'})
    contactPersonName: string
    @ApiPropertyOptional({type: String,description:'ตำแหน่งของ Customer ที่ใช้สำหรับการติดต่อ'})
    contactPersonTitle: string
    @ApiProperty({type: String,description:'ที่อยู่ของ Customer'})
    address: string
    @ApiProperty({type: String,description:'เบอร์โทรศัพท์สำหรับการติดต่อ Customer'})
    telephone: string
    @ApiPropertyOptional({type: String,description:'เบอร์โทรศัพท์มือถือสำหรับการติดต่อ Customer'})
    mobile: string
    @ApiPropertyOptional({type: String,description:'หมายเลข Fax ของ Customer'})
    fax: string
    @ApiPropertyOptional({type: String,description:'Email ของ Customer'})
    email: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Customer'})
    remark: string
}
export class DeleteCustomerDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchCustomerDto extends BaseSearchDataDto{
    @ApiPropertyOptional({type: Number,description:'Code ของ Customer'})
    code: number
    @ApiPropertyOptional({type: String,description:'ชื่อของ Customer'})
    name: string
}
