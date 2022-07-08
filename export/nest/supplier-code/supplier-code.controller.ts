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
import { SupplierCodeService } from './supplier-code.service';
import { CreateSupplierCodeDto, DeleteSupplierCodeDto, SearchSupplierCodeDto, UpdateSupplierCodeDto } from './supplier-code.dto';
import { Users } from 'src/users/users.entity';
@ApiTags('supplier-code')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('supplier-code')
export class SupplierCodeController {
    constructor(private readonly supplierCodeService:SupplierCodeService){

    }
    @Get('get-supplier-code-list')
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    findAll(@Query() query: SearchSupplierCodeDto) {
        query.deleted = query.deleted == false;
        return this.supplierCodeService.findFilter(query);
    }

    @Get('get-supplier-code-by-id/:id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Supplier ในฐานข้อมูล',
    })
    @HttpCode(200)
    async get(@Param('id') id: number) {
      return await this.supplierCodeService.findById(id);
    }
  
    @Post('create-supplier-code')
    @HttpCode(201)
    @ApiBody({type: CreateSupplierCodeDto})
    @ApiCreatedResponse({
      description: MessageResponse.CREATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async create(@Body() dto: CreateSupplierCodeDto, @Req() req,
    ) {
      const user: Users = req.user;
      dto.createdBy = user.username;
      return await this.supplierCodeService.insert(dto);
    }
  
    @Post('update-supplier-code/:id')
    @HttpCode(200)
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Supplier ในฐานข้อมูล',
    })
    @ApiOkResponse({
      description: MessageResponse.UPDATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async update(@Param('id') id: number,
                 @Body() dto: UpdateSupplierCodeDto,
                 @Req() req,
    ) {
      const users: Users = req.user;
       dto.updatedBy = users.username;
      dto.id = id;
      return this.supplierCodeService.updated(dto);
    }
  
    @Post('delete-supplier-code/:id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Supplier ในฐานข้อมูล',
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
      const dto: DeleteSupplierCodeDto = {
        id: id,
        deleted: true,
        active: false,
        deletedBy: users.username
      }
      return await this.supplierCodeService.deleted(dto);
    }
}
