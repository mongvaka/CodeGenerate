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
import { UserService } from './user.service';
import { CreateUserDto, DeleteUserDto, SearchUserDto, UpdateUserDto } from './user.dto';
import { Users } from 'src/users/users.entity';
@ApiTags('user')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){

    }
    @Get()
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    findAll(@Query() query: SearchUserDto) {
        query.deleted = query.deleted == false;
        return this.userService.findFilter(query);
    }

    @Get(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละบัญชีผู้ใช้งานในฐานข้อมูล',
    })
    @HttpCode(200)
    async get(@Param('id') id: number) {
      return await this.userService.findById(id);
    }
  
    @Post()
    @HttpCode(201)
    @ApiBody({type: CreateUserDto})
    @ApiCreatedResponse({
      description: MessageResponse.CREATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async create(@Body() dto: CreateUserDto, @Req() req,
    ) {
      const user: Users = req.user;
      dto.createdBy = user.username;
      return await this.userService.insert(dto);
    }
  
    @Put(':id')
    @HttpCode(200)
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละบัญชีผู้ใช้งานในฐานข้อมูล',
    })
    @ApiOkResponse({
      description: MessageResponse.UPDATED_SUCCESS,
    })
    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})
    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})
    async update(@Param('id') id: number,
                 @Body() dto: UpdateUserDto,
                 @Req() req,
    ) {
      const users: Users = req.user;
       dto.updatedBy = users.username;
      dto.id = id;
      return this.userService.updated(dto);
    }
  
    @Delete(':id')
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'ID ประจำแต่ละบัญชีผู้ใช้งานในฐานข้อมูล',
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
      const dto: DeleteUserDto = {
        id: id,
        deleted: true,
        active: false,
        deletedBy: users.username
      }
      return await this.userService.deleted(dto);
    }
}
