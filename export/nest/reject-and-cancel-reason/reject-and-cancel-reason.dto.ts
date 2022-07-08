import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class RejectAndCancelReasonDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำประเภทของ Reason แต่ละรายการในฐานข้อมูล'})
    reasonTypeId: number
    @ApiProperty({type: String,description:'CODE ของ Reject Reason และ Cancel Reason'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Reject Reason และ Cancel Reason'})
    description: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Reject Reason และ Cancel Reason'})
    remark: string
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Reject Reason และ Cancel Reason'})
    active: boolean
}
export class CreateRejectAndCancelReasonDto extends RejectAndCancelReasonDto{
    @ApiPropertyOptional({type:Number})
    id:number;
    @ApiProperty({type: Number,description:'ID ประจำประเภทของ Reason แต่ละรายการในฐานข้อมูล'})
    reasonTypeId: number
    @ApiProperty({type: String,description:'CODE ของ Reject Reason และ Cancel Reason'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Reject Reason และ Cancel Reason'})
    description: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Reject Reason และ Cancel Reason'})
    remark: string
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Reject Reason และ Cancel Reason'})
    active: boolean
}
export class UpdateRejectAndCancelReasonDto extends BasicDataDto{
    @ApiProperty({type: Number,description:'ID ประจำ Reason แต่ละรายการในฐานข้อมูล'})
    id: number
    @ApiProperty({type: Number,description:'ID ประจำประเภทของ Reason แต่ละรายการในฐานข้อมูล'})
    reasonTypeId: number
    @ApiProperty({type: String,description:'CODE ของ Reject Reason และ Cancel Reason'})
    code: string
    @ApiProperty({type: String,description:'คำอธิบายของ Reject Reason และ Cancel Reason'})
    description: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Reject Reason และ Cancel Reason'})
    remark: string
    @ApiProperty({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Reject Reason และ Cancel Reason'})
    active: boolean
}
export class DeleteRejectAndCancelReasonDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchRejectAndCancelReasonDto extends BaseSearchDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำประเภทของ Reason แต่ละรายการในฐานข้อมูล'})
    reasonTypeId: number
    @ApiPropertyOptional({type: String,description:'CODE ของ Reject Reason และ Cancel Reason'})
    code: string
}
