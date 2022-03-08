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
import { FundingTypeService } from './funding-type.service';
import { CreateFundingTypeDto, DeleteFundingTypeDto, SearchFundingTypeDto, UpdateFundingTypeDto } from './funding-type.dto';
import { Users } from 'src/users/users.entity';
@ApiTags('fundingType')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('fundingType')
export class FundingTypeController {
    constructor(private readonly fundingTypeService:FundingTypeService){

    }
    @Get()
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    findAll(@Query() query: SearchFundingTypeDto) {
        query.deleted = query.deleted == false;
        return this.fundingTypeService.findFilter(query);
    }

    @Get(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Funding Type ในฐานข้อมูล',
    })
    @HttpCode(200)
    async get(@Param('id') id: number) {
      return await this.fundingTypeService.findById(id);
    }
  
    @Post()
    @HttpCode(201)
    @ApiBody({type: CreateFundingTypeDto})
    @ApiCreatedResponse({
      description: MessageResponse.CREATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async create(@Body() dto: CreateFundingTypeDto, @Req() req,
    ) {
      const user: Users = req.user;
      dto.createdBy = user.username;
      return await this.fundingTypeService.insert(dto);
    }
  
    @Put(':id')
    @HttpCode(200)
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Funding Type ในฐานข้อมูล',
    })
    @ApiOkResponse({
      description: MessageResponse.UPDATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async update(@Param('id') id: number,
                 @Body() dto: UpdateFundingTypeDto,
                 @Req() req,
    ) {
      const users: Users = req.user;
       dto.updatedBy = users.username;
      dto.id = id;
      return this.fundingTypeService.updated(dto);
    }
  
    @Delete(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละ Funding Type ในฐานข้อมูล',
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
      const dto: DeleteFundingTypeDto = {
        id: id,
        deleted: true,
        active: false,
        deletedBy: users.username
      }
      return await this.fundingTypeService.deleted(dto);
    }
}
