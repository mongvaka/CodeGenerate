import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsString} from "class-validator";
export class SupplierCodeDto extends BasicDataDto{
}
export class CreateSupplierCodeDto extends SupplierCodeDto{
    @ApiPropertyOptional({type:Number})
    id:number;
}
export class UpdateSupplierCodeDto extends BasicDataDto{
}
export class DeleteSupplierCodeDto extends BasicDataDto{
    @ApiProperty({type:Number})
    id:number;
}
export class SearchSupplierCodeDto extends BaseSearchDataDto{
}
