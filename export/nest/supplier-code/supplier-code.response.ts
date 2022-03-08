import {ApiProperty} from "@nestjs/swagger";
import {IResponse} from "../shared/interfaces/response.interface";
import { SupplierCodeDto } from "./supplier-code.dto";

export class SupplierCodePagenation implements IResponse<SupplierCodeDto[]> {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  error: string[];

  @ApiProperty()
  data: SupplierCodeDto[];

  @ApiProperty()
  currentPage?: number;

  @ApiProperty()
  perPage?: number;

  @ApiProperty()
  totalPage?: number;

  @ApiProperty()
  total?: number;
}
