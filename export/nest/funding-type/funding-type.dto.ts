import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class FundingTypeDto extends BasicDataDto{
    @ApiProperty({type: String,description:'Code ของ Funding Type'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Funding Type'})
    description: string
    @ApiProperty({type: String,description:'Commercial Income หรือ Other Income'})
    fundingGroup: string
    @ApiProperty({type: String,description:'Account Code ของ Funding Type'})
    accountCode: string
    @ApiProperty({type: Boolean,description:'การระบุว่าแต่ละ Funding Type มี Vat หรือไม่'})
    vatIncluded: boolean
    @ApiProperty({type: Number,description:'ค่า Vat ของ Funding Type'})
    vatRate: number
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Funding Type'})
    active: boolean
}
export class CreateFundingTypeDto extends FundingTypeDto{
    @ApiPropertyOptional({type:Number})
    id:number;
    @ApiProperty({type: String,description:'Code ของ Funding Type'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Funding Type'})
    description: string
    @ApiProperty({type: String,description:'Commercial Income หรือ Other Income'})
    fundingGroup: string
    @ApiProperty({type: String,description:'Account Code ของ Funding Type'})
    accountCode: string
    @ApiProperty({type: Boolean,description:'การระบุว่าแต่ละ Funding Type มี Vat หรือไม่'})
    vatIncluded: boolean
    @ApiProperty({type: Number,description:'ค่า Vat ของ Funding Type'})
    vatRate: number
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Funding Type'})
    active: boolean
}
export class UpdateFundingTypeDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำแต่ละ Funding Type ในฐานข้อมูล'})
    id: number
    @ApiProperty({type: String,description:'Code ของ Funding Type'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Funding Type'})
    description: string
    @ApiProperty({type: String,description:'Commercial Income หรือ Other Income'})
    fundingGroup: string
    @ApiProperty({type: String,description:'Account Code ของ Funding Type'})
    accountCode: string
    @ApiProperty({type: Boolean,description:'การระบุว่าแต่ละ Funding Type มี Vat หรือไม่'})
    vatIncluded: boolean
    @ApiProperty({type: Number,description:'ค่า Vat ของ Funding Type'})
    vatRate: number
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Funding Type'})
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
    fundingGroup: string
}
