import {ApiProperty} from "@nestjs/swagger";
import {IResponse} from "../shared/interfaces/response.interface";
import { CustomerDto } from "./customer.dto";

export class CustomerPagenation implements IResponse<CustomerDto[]> {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  error: string[];

  @ApiProperty()
  data: CustomerDto[];

  @ApiProperty()
  currentPage?: number;

  @ApiProperty()
  perPage?: number;

  @ApiProperty()
  totalPage?: number;

  @ApiProperty()
  total?: number;
}
