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
import { SupplieGroupService } from './supplie-group.service';
import { CreateSupplieGroupDto, DeleteSupplieGroupDto, SearchSupplieGroupDto, UpdateSupplieGroupDto } from './supplie-group.dto';
import { Users } from 'src/users/users.entity';
@ApiTags('supplie-group')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('supplie-group')
export class SupplieGroupController {
    constructor(private readonly supplieGroupService:SupplieGroupService){

    }
    @Get('get-supplie-group-list')
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    findAll(@Query() query: SearchSupplieGroupDto) {
        query.deleted = query.deleted == false;
        return this.supplieGroupService.findFilter(query);
    }

    @Get('get-supplie-group-by-id/:id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Supplier Group ในฐานข้อมูล',
    })
    @HttpCode(200)
    async get(@Param('id') id: number) {
      return await this.supplieGroupService.findById(id);
    }
  
    @Post('create-supplie-group')
    @HttpCode(201)
    @ApiBody({type: CreateSupplieGroupDto})
    @ApiCreatedResponse({
      description: MessageResponse.CREATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async create(@Body() dto: CreateSupplieGroupDto, @Req() req,
    ) {
      const user: Users = req.user;
      dto.createdBy = user.username;
      return await this.supplieGroupService.insert(dto);
    }
  
    @Post('update-supplie-group/:id')
    @HttpCode(200)
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Supplier Group ในฐานข้อมูล',
    })
    @ApiOkResponse({
      description: MessageResponse.UPDATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async update(@Param('id') id: number,
                 @Body() dto: UpdateSupplieGroupDto,
                 @Req() req,
    ) {
      const users: Users = req.user;
       dto.updatedBy = users.username;
      dto.id = id;
      return this.supplieGroupService.updated(dto);
    }
  
    @Post('delete-supplie-group/:id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Supplier Group ในฐานข้อมูล',
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
      const dto: DeleteSupplieGroupDto = {
        id: id,
        deleted: true,
        active: false,
        deletedBy: users.username
      }
      return await this.supplieGroupService.deleted(dto);
    }
}
