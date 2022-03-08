import {ApiProperty} from "@nestjs/swagger";
import {IResponse} from "../shared/interfaces/response.interface";
import { SupplieGroupDto } from "./supplie-group.dto";

export class SupplieGroupPagenation implements IResponse<SupplieGroupDto[]> {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  error: string[];

  @ApiProperty()
  data: SupplieGroupDto[];

  @ApiProperty()
  currentPage?: number;

  @ApiProperty()
  perPage?: number;

  @ApiProperty()
  totalPage?: number;

  @ApiProperty()
  total?: number;
}
