import {ApiProperty} from "@nestjs/swagger";
import {IResponse} from "../shared/interfaces/response.interface";
import { DepartmentBusinessUnitDto } from "./department-business-unit.dto";

export class DepartmentBusinessUnitPagenation implements IResponse<DepartmentBusinessUnitDto[]> {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  error: string[];

  @ApiProperty()
  data: DepartmentBusinessUnitDto[];

  @ApiProperty()
  currentPage?: number;

  @ApiProperty()
  perPage?: number;

  @ApiProperty()
  totalPage?: number;

  @ApiProperty()
  total?: number;
}
