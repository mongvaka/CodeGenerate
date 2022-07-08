import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class NestControllerTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";`);
    this.t.push(`import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";`);
    this.t.push(`import { JwtAuthGuard } from "src/authentications/jwt-auth.guard";`);
    this.t.push(`import { BaseController } from "src/shared/controller/base-controller";`);
    this.t.push(`import { CustomRequest } from "src/shared/models/request-model";`);
    this.t.push(`import { DropdownService } from "src/shared/services/dropdown.service";`);
    this.t.push(`import { CreateDemoDto, SearchDemoDto, UpdateDemoDto } from "./demo.dto";`);
    this.t.push(`import { DemoService } from "./demo.service";`);
    this.t.push(`@ApiTags("demo")`);
    this.t.push(`@UseGuards(JwtAuthGuard)`);
    this.t.push(`@ApiBearerAuth()`);
    this.t.push(`@Controller('demo')`);
    this.t.push(`export class DemoController extends BaseController{`);
    this.t.push(`    constructor(private readonly demoService:DemoService,`);
    this.t.push(`      ){`);
    this.t.push(`      super()`);
    this.t.push(`    }`);
    this.t.push(`  @Get('item/:id')`);
    this.t.push(`  async item(@Param('id') id: number) {`);
    this.t.push(`    try{`);
    this.t.push(`      return this.success(await this.demoService.item(id))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }`);
    this.t.push(`  }`);
    this.t.push(`  @Post('list')`);
    this.t.push(`  async findAll(@Body() dto: SearchDemoDto) {`);
    this.t.push(`    try{      `);
    this.t.push(`      return this.success(await this.demoService.list(dto))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }`);
    this.t.push(`  }`);
    this.t.push(`  @Get('dropdown')`);
    this.t.push(`  async demoDropdown(@Body() dto: SearchDemoDto) {`);
    this.t.push(`    try{      `);
    this.t.push(`      return this.success(await this.demoService.demoDropdown(dto))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }`);
    this.t.push(`  }`);
    this.t.push(`  @Post('create')`);
    this.t.push(`  async create(@Body() dto: CreateDemoDto, @Req() req:CustomRequest,){ `);
    this.t.push(`    try{      `);
    this.t.push(`      return this.success(await this.demoService.create(dto,req))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }   `);
    this.t.push(`  }`);
    this.t.push(`  @Put('update/:id')`);
    this.t.push(`  async update(@Param('id') id: number,@Body() dto: UpdateDemoDto, @Req() req:CustomRequest,){    `);
    this.t.push(`    try{`);
    this.t.push(`      return this.success(await this.demoService.update(id,dto,req))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }   `);
    this.t.push(`  }`);
    this.t.push(`  @Delete('delete/:id')`);
    this.t.push(`  async delete(@Param('id') id: number, @Req() req:CustomRequest,){`);
    this.t.push(`    try{`);
    this.t.push(`      return this.success(await this.demoService.delete(id,req))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }    `);
    this.t.push(`  }`);
    this.t.push(`}`);
  }
}
