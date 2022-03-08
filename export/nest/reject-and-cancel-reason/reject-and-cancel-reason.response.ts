import {ApiProperty} from "@nestjs/swagger";
import {IResponse} from "../shared/interfaces/response.interface";
import { RejectAndCancelReasonDto } from "./reject-and-cancel-reason.dto";

export class RejectAndCancelReasonPagenation implements IResponse<RejectAndCancelReasonDto[]> {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  error: string[];

  @ApiProperty()
  data: RejectAndCancelReasonDto[];

  @ApiProperty()
  currentPage?: number;

  @ApiProperty()
  perPage?: number;

  @ApiProperty()
  totalPage?: number;

  @ApiProperty()
  total?: number;
}
