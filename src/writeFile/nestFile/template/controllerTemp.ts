import { CellItemModel } from "../../../model/cellModel";
import { BaseNestClass } from "../base/baseNestClass";
export class NestControllerTemp extends BaseNestClass {
  private masterList: CellItemModel[];
  private t: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.t = [];
  }
  getTemplate() {
    this.initialDataItemPage();
    return this.t;
  }
  private initialDataItemPage() {
    this.t.push(`import {`);
    this.t.push(`    Body,`);
    this.t.push(`    Controller,`);
    this.t.push(`    Delete,`);
    this.t.push(`    Get,`);
    this.t.push(`    HttpCode,`);
    this.t.push(`    Param,`);
    this.t.push(`    Post,`);
    this.t.push(`    Put,`);
    this.t.push(`    Query,`);
    this.t.push(`    Req,`);
    this.t.push(`    UseGuards`);
    this.t.push(`  } from '@nestjs/common';`);
    this.t.push(`  import {`);
    this.t.push(`    ApiBadGatewayResponse, ApiBearerAuth,`);
    this.t.push(`    ApiBody, ApiCreatedResponse,`);
    this.t.push(`    ApiInternalServerErrorResponse,`);
    this.t.push(`    ApiOkResponse,`);
    this.t.push(`    ApiParam,`);
    this.t.push(`    ApiTags`);
    this.t.push(`  } from "@nestjs/swagger";`);
    this.t.push(
      `  import {MessageResponse} from "../shared/responses/message.response";`
    );
    this.t.push(
      `  import {JwtAuthGuard} from "../authentications/jwt-auth.guard";`
    );
    this.t.push(
      `import { ${this.pascalCae}Service } from './${this.fileName}.service';`
    );
    this.t.push(
      `import { Create${this.pascalCae}Dto, Delete${this.pascalCae}Dto, Search${this.pascalCae}Dto, Update${this.pascalCae}Dto } from './${this.fileName}.dto';`
    );
    this.t.push(`import { Users } from 'src/users/users.entity';`);
    this.t.push(`@ApiTags('${this.fileName}')`);
    this.t.push(`@UseGuards(JwtAuthGuard)`);
    this.t.push(`@ApiBearerAuth()`);
    this.t.push(`@Controller('${this.fileName}')`);
    this.t.push(`export class ${this.pascalCae}Controller {`);
    this.t.push(
      `    constructor(private readonly ${this.camelCase}Service:${this.pascalCae}Service){`
    );
    this.t.push(``);
    this.t.push(`    }`);
    this.t.push(`    @Get()`);
    this.t.push(
      `    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})`
    );
    this.t.push(
      `    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})`
    );
    this.t.push(`    findAll(@Query() query: Search${this.pascalCae}Dto) {`);
    this.t.push(`        query.deleted = query.deleted == false;`);
    this.t.push(
      `        return this.${this.camelCase}Service.findFilter(query);`
    );
    this.t.push(`    }`);
    this.t.push(``);
    this.t.push(`    @Get(':id')`);
    this.t.push(`    @ApiParam({`);
    this.t.push(`      name: 'id',`);
    this.t.push(`      type: Number,`);
    this.t.push(`      description: '${this.descriptionID}',`);
    this.t.push(`    })`);
    this.t.push(`    @HttpCode(200)`);
    this.t.push(`    async get(@Param('id') id: number) {`);
    this.t.push(
      `      return await this.${this.camelCase}Service.findById(id);`
    );
    this.t.push(`    }`);
    this.t.push(`  `);
    this.t.push(`    @Post()`);
    this.t.push(`    @HttpCode(201)`);
    this.t.push(`    @ApiBody({type: Create${this.pascalCae}Dto})`);
    this.t.push(`    @ApiCreatedResponse({`);
    this.t.push(`      description: MessageResponse.CREATED_SUCCESS,`);
    this.t.push(`    })`);
    this.t.push(
      `    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})`
    );
    this.t.push(
      `    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})`
    );
    this.t.push(
      `    async create(@Body() dto: Create${this.pascalCae}Dto, @Req() req,`
    );
    this.t.push(`    ) {`);
    this.t.push(`      const user: Users = req.user;`);
    this.t.push(`      dto.createdBy = user.username;`);
    this.t.push(
      `      return await this.${this.camelCase}Service.insert(dto);`
    );
    this.t.push(`    }`);
    this.t.push(`  `);
    this.t.push(`    @Put(':id')`);
    this.t.push(`    @HttpCode(200)`);
    this.t.push(`    @ApiParam({`);
    this.t.push(`      name: 'id',`);
    this.t.push(`      type: Number,`);
    this.t.push(`      description: '${this.descriptionID}',`);
    this.t.push(`    })`);
    this.t.push(`    @ApiOkResponse({`);
    this.t.push(`      description: MessageResponse.UPDATED_SUCCESS,`);
    this.t.push(`    })`);
    this.t.push(
      `    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})`
    );
    this.t.push(
      `    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})`
    );
    this.t.push(`    async update(@Param('id') id: number,`);
    this.t.push(`                 @Body() dto: Update${this.pascalCae}Dto,`);
    this.t.push(`                 @Req() req,`);
    this.t.push(`    ) {`);
    this.t.push(`      const users: Users = req.user;`);
    this.t.push(`       dto.updatedBy = users.username;`);
    this.t.push(`      dto.id = id;`);
    this.t.push(`      return this.${this.camelCase}Service.updated(dto);`);
    this.t.push(`    }`);
    this.t.push(`  `);
    this.t.push(`    @Delete(':id')`);
    this.t.push(`    @ApiParam({`);
    this.t.push(`      name: 'id',`);
    this.t.push(`      type: Number,`);
    this.t.push(`      description: '${this.descriptionID}',`);
    this.t.push(`    })`);
    this.t.push(`    @HttpCode(200)`);
    this.t.push(`    @ApiOkResponse({`);
    this.t.push(`      description: MessageResponse.DELETED_SUCCESS,`);
    this.t.push(`    })`);
    this.t.push(
      `    @ApiBadGatewayResponse({description: MessageResponse.BAD_GATEWAY})`
    );
    this.t.push(
      `    @ApiInternalServerErrorResponse({description: MessageResponse.INTERNAL_SERVER_ERROR})`
    );
    this.t.push(`    async delete(`);
    this.t.push(`      @Param('id') id: number,`);
    this.t.push(`      @Req() req`);
    this.t.push(`    ) {`);
    this.t.push(`      const users: Users = req.user;      `);
    this.t.push(`      const dto: Delete${this.pascalCae}Dto = {`);
    this.t.push(`        id: id,`);
    this.t.push(`        deleted: true,`);
    this.t.push(`        active: false,`);
    this.t.push(`        deletedBy: users.username`);
    this.t.push(`      }`);
    this.t.push(
      `      return await this.${this.camelCase}Service.deleted(dto);`
    );
    this.t.push(`    }`);
    this.t.push(`}`);
  }
}
