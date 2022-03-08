import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class FundingTypeDto extends BasicDataDto{
    @ApiPropertyOptional({type: String,description:'Code ของ Funding Type'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Funding Type'})
    description: string
    @ApiPropertyOptional({type: String,description:'Commercial Income หรือ Other Income'})
    funding_group: string
    @ApiPropertyOptional({type: String,description:'Account Code ของ Funding Type'})
    account_code: string
    @ApiPropertyOptional({type: Boolean,description:'การระบุว่าแต่ละ Funding Type มี Vat หรือไม่'})
    vat_included: boolean
    @ApiPropertyOptional({type: Number,description:'ค่า Vat ของ Funding Type'})
    vat_rate: number
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Funding Type'})
    active: boolean
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการเพิ่มข้อมูล Funding Type'})
    created_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการเพิ่มข้อมูล Funding Type'})
    created_by: string
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการอัปเดตข้อมูล Funding Type'})
    updated_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการอัปเดตข้อมูล Funding Type'})
    updated_by: string
}
export class CreateFundingTypeDto extends FundingTypeDto{
    @ApiPropertyOptional({type: String,description:'Code ของ Funding Type'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Funding Type'})
    description: string
    @ApiPropertyOptional({type: String,description:'Commercial Income หรือ Other Income'})
    funding_group: string
    @ApiPropertyOptional({type: String,description:'Account Code ของ Funding Type'})
    account_code: string
    @ApiPropertyOptional({type: Boolean,description:'การระบุว่าแต่ละ Funding Type มี Vat หรือไม่'})
    vat_included: boolean
    @ApiPropertyOptional({type: Number,description:'ค่า Vat ของ Funding Type'})
    vat_rate: number
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Funding Type'})
    active: boolean
}
export class UpdateFundingTypeDto extends BasicDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำแต่ละ Funding Type ในฐานข้อมูล'})
    id: number
    @ApiPropertyOptional({type: String,description:'Code ของ Funding Type'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Funding Type'})
    description: string
    @ApiPropertyOptional({type: String,description:'Commercial Income หรือ Other Income'})
    funding_group: string
    @ApiPropertyOptional({type: String,description:'Account Code ของ Funding Type'})
    account_code: string
    @ApiPropertyOptional({type: Boolean,description:'การระบุว่าแต่ละ Funding Type มี Vat หรือไม่'})
    vat_included: boolean
    @ApiPropertyOptional({type: Number,description:'ค่า Vat ของ Funding Type'})
    vat_rate: number
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Funding Type'})
    active: boolean
}
export class DeleteFundingTypeDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchFundingTypeDto extends BaseSearchDataDto{
    @ApiPropertyOptional({type: String,description:'Code ของ Funding Type'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Funding Type'})
    description: string
    @ApiPropertyOptional({type: String,description:'Commercial Income หรือ Other Income'})
    funding_group: string
}
