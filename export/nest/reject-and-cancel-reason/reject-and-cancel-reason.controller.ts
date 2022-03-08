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
import { RejectAndCancelReasonService } from './reject-and-cancel-reason.service';
import { CreateRejectAndCancelReasonDto, DeleteRejectAndCancelReasonDto, SearchRejectAndCancelReasonDto, UpdateRejectAndCancelReasonDto } from './reject-and-cancel-reason.dto';
import { Users } from 'src/users/users.entity';
@ApiTags('rejectAndCancelReason')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('rejectAndCancelReason')
export class RejectAndCancelReasonController {
    constructor(private readonly rejectAndCancelReasonService:RejectAndCancelReasonService){

    }
    @Get()
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    findAll(@Query() query: SearchRejectAndCancelReasonDto) {
        query.deleted = query.deleted == false;
        return this.rejectAndCancelReasonService.findFilter(query);
    }

    @Get(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำ Reason แต่ละรายการในฐานข้อมูล',
    })
    @HttpCode(200)
    async get(@Param('id') id: number) {
      return await this.rejectAndCancelReasonService.findById(id);
    }
  
    @Post()
    @HttpCode(201)
    @ApiBody({type: CreateRejectAndCancelReasonDto})
    @ApiCreatedResponse({
      description: MessageResponse.CREATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async create(@Body() dto: CreateRejectAndCancelReasonDto, @Req() req,
    ) {
      const user: Users = req.user;
      dto.createdBy = user.username;
      return await this.rejectAndCancelReasonService.insert(dto);
    }
  
    @Put(':id')
    @HttpCode(200)
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำ Reason แต่ละรายการในฐานข้อมูล',
    })
    @ApiOkResponse({
      description: MessageResponse.UPDATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async update(@Param('id') id: number,
                 @Body() dto: UpdateRejectAndCancelReasonDto,
                 @Req() req,
    ) {
      const users: Users = req.user;
       dto.updatedBy = users.username;
      dto.id = id;
      return this.rejectAndCancelReasonService.updated(dto);
    }
  
    @Delete(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำ Reason แต่ละรายการในฐานข้อมูล',
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
      const dto: DeleteRejectAndCancelReasonDto = {
        id: id,
        deleted: true,
        active: false,
        deletedBy: users.username
      }
      return await this.rejectAndCancelReasonService.deleted(dto);
    }
}
