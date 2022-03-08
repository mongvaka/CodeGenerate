import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    Query,
    Req,
    UseGuards
  } from '@nestjs/common';
  import {
    ApiBadGatewayResponse, ApiBearerAuth,
    ApiBody, ApiCreatedResponse,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiParam,
    ApiTags
  } from "@nestjs/swagger";
  import {MessageResponse} from "../shared/responses/message.response";
  import {JwtAuthGuard} from "../authentications/jwt-auth.guard";
import { DepartmentBusinessUnitService } from './department-business-unit.service';
import { CreateDepartmentBusinessUnitDto, DeleteDepartmentBusinessUnitDto, SearchDepartmentBusinessUnitDto, UpdateDepartmentBusinessUnitDto } from './department-business-unit.dto';
import { Users } from 'src/users/users.entity';
@ApiTags('departmentBusinessUnit')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('departmentBusinessUnit')
export class DepartmentBusinessUnitController {
    constructor(private readonly departmentBusinessUnitService:DepartmentBusinessUnitService){

    }
    @Get()
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    findAll(@Query() query: SearchDepartmentBusinessUnitDto) {
        query.deleted = query.deleted == false;
        return this.departmentBusinessUnitService.findFilter(query);
    }

    @Get(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Department/Business Unit ในฐานข้อมูล',
    })
    @HttpCode(200)
    async get(@Param('id') id: number) {
      return await this.departmentBusinessUnitService.findById(id);
    }
  
    @Post()
    @HttpCode(201)
    @ApiBody({type: CreateDepartmentBusinessUnitDto})
    @ApiCreatedResponse({
      description: MessageResponse.CREATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async create(@Body() dto: CreateDepartmentBusinessUnitDto, @Req() req,
    ) {
      const user: Users = req.user;
      dto.createdBy = user.username;
      return await this.departmentBusinessUnitService.insert(dto);
    }
  
    @Put(':id')
    @HttpCode(200)
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Department/Business Unit ในฐานข้อมูล',
    })
    @ApiOkResponse({
      description: MessageResponse.UPDATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async update(@Param('id') id: number,
                 @Body() dto: UpdateDepartmentBusinessUnitDto,
                 @Req() req,
    ) {
      const users: Users = req.user;
       dto.updatedBy = users.username;
      dto.id = id;
      return this.departmentBusinessUnitService.updated(dto);
    }
  
    @Delete(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Department/Business Unit ในฐานข้อมูล',
    })
    @HttpCode(200)
    @ApiOkResponse({
      description: MessageResponse.DELETED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async delete(
      @Param('id') id: number,
      @Req() req
    ) {
      const users: Users = req.user;      
      const dto: DeleteDepartmentBusinessUnitDto = {
        id: id,
        deleted: true,
        active: false,
        deletedBy: users.username
      }
      return await this.departmentBusinessUnitService.deleted(dto);
    }
}
