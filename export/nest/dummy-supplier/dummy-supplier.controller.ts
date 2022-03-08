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
import { DummySupplierService } from './dummy-supplier.service';
import { CreateDummySupplierDto, DeleteDummySupplierDto, SearchDummySupplierDto, UpdateDummySupplierDto } from './dummy-supplier.dto';
import { Users } from 'src/users/users.entity';
@ApiTags('dummySupplier')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('dummySupplier')
export class DummySupplierController {
    constructor(private readonly dummySupplierService:DummySupplierService){

    }
    @Get()
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    findAll(@Query() query: SearchDummySupplierDto) {
        query.deleted = query.deleted == false;
        return this.dummySupplierService.findFilter(query);
    }

    @Get(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Dummy Supplier ในฐานข้อมูล',
    })
    @HttpCode(200)
    async get(@Param('id') id: number) {
      return await this.dummySupplierService.findById(id);
    }
  
    @Post()
    @HttpCode(201)
    @ApiBody({type: CreateDummySupplierDto})
    @ApiCreatedResponse({
      description: MessageResponse.CREATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async create(@Body() dto: CreateDummySupplierDto, @Req() req,
    ) {
      const user: Users = req.user;
      dto.createdBy = user.username;
      return await this.dummySupplierService.insert(dto);
    }
  
    @Put(':id')
    @HttpCode(200)
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Dummy Supplier ในฐานข้อมูล',
    })
    @ApiOkResponse({
      description: MessageResponse.UPDATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async update(@Param('id') id: number,
                 @Body() dto: UpdateDummySupplierDto,
                 @Req() req,
    ) {
      const users: Users = req.user;
       dto.updatedBy = users.username;
      dto.id = id;
      return this.dummySupplierService.updated(dto);
    }
  
    @Delete(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Dummy Supplier ในฐานข้อมูล',
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
      const dto: DeleteDummySupplierDto = {
        id: id,
        deleted: true,
        active: false,
        deletedBy: users.username
      }
      return await this.dummySupplierService.deleted(dto);
    }
}
