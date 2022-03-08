import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class RejectAndCancelReasonDto extends BasicDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำประเภทของ Reason แต่ละรายการในฐานข้อมูล'})
    reason_type_id: number
    @ApiPropertyOptional({type: String,description:'CODE ของ Reject Reason และ Cancel Reason'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Reject Reason และ Cancel Reason'})
    description: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Reject Reason และ Cancel Reason'})
    remark: string
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Reject Reason และ Cancel Reason'})
    active: boolean
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการเพิ่มข้อมูล Reason'})
    created_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการเพิ่มข้อมูล Reason'})
    created_by: string
    @ApiPropertyOptional({type: Date,description:'วัน เดือน ปี และเวลา ณ วันที่ที่ทำการอัปเดตข้อมูล Reason'})
    updated_at: Date
    @ApiPropertyOptional({type: String,description:'ชื่อผู้ใช้งานที่ทำการอัปเดตข้อมูล Reason'})
    updated_by: string
}
export class CreateRejectAndCancelReasonDto extends RejectAndCancelReasonDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำประเภทของ Reason แต่ละรายการในฐานข้อมูล'})
    reason_type_id: number
    @ApiPropertyOptional({type: String,description:'CODE ของ Reject Reason และ Cancel Reason'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Reject Reason และ Cancel Reason'})
    description: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Reject Reason และ Cancel Reason'})
    remark: string
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Reject Reason และ Cancel Reason'})
    active: boolean
}
export class UpdateRejectAndCancelReasonDto extends BasicDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำ Reason แต่ละรายการในฐานข้อมูล'})
    id: number
    @ApiPropertyOptional({type: Number,description:'ID ประจำประเภทของ Reason แต่ละรายการในฐานข้อมูล'})
    reason_type_id: number
    @ApiPropertyOptional({type: String,description:'CODE ของ Reject Reason และ Cancel Reason'})
    code: string
    @ApiPropertyOptional({type: String,description:'คำอธิบายของ Reject Reason และ Cancel Reason'})
    description: string
    @ApiPropertyOptional({type: String,description:'หมายเหตุสำหรับข้อมูล Reject Reason และ Cancel Reason'})
    remark: string
    @ApiPropertyOptional({type: Boolean,description:'สถานะการใช้งาน Active/Inactive ของ Reject Reason และ Cancel Reason'})
    active: boolean
}
export class DeleteRejectAndCancelReasonDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchRejectAndCancelReasonDto extends BaseSearchDataDto{
    @ApiPropertyOptional({type: Number,description:'ID ประจำประเภทของ Reason แต่ละรายการในฐานข้อมูล'})
    reason_type_id: number
    @ApiPropertyOptional({type: String,description:'CODE ของ Reject Reason และ Cancel Reason'})
    code: string
}
