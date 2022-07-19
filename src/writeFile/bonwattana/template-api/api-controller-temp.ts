import { InputDataType } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class ApiControllerTemp extends BaseBoonwattanaClass {
  private masterList: CellBwModel[];
  private t: string[];
  constructor(masterList: CellBwModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.t = [];
  }
  getTemplate() {
    this.initialDataItemPage();
    return this.t;
  }
  private initialDataItemPage() {
    const dropdownField = this.masterList.filter(fl=> fl.INPUT_TYPE == InputDataType.FOREIGN)

    this.t.push(`import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";`);
    this.t.push(`import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";`);
    this.t.push(`import { JwtAuthGuard } from "src/authentications/jwt-auth.guard";`);
    this.t.push(`import { BaseController } from "src/shared/controller/base-controller";`);
    this.t.push(`import { CustomRequest } from "src/shared/models/request-model";`);
    this.t.push(`import { DropdownService } from "src/shared/services/dropdown.service";`);
    dropdownField.forEach(el=>{
      const namePascal =this.getPascalCase(el.LOOKUP_TABLE)
      const fileName = this.getFileCase(el.LOOKUP_TABLE)
      this.t.push(`import { Search${namePascal}Dto } from "src/${fileName}/${fileName}.dto";`);

    })
    this.t.push(`import { Create${this.pascalCae}Dto, Search${this.pascalCae}Dto, Update${this.pascalCae}Dto } from "./${this.fileName}.dto";`);
    this.t.push(`import { ${this.pascalCae}Service } from "./${this.fileName}.service";`);
    this.t.push(`@ApiTags("${this.fileName}")`);
    this.t.push(`@UseGuards(JwtAuthGuard)`);
    this.t.push(`@ApiBearerAuth()`);
    this.t.push(`@Controller('${this.fileName}')`);
    this.t.push(`export class ${this.pascalCae}Controller extends BaseController{`);
    this.t.push(`    constructor(private readonly ${this.camelCase}Service:${this.pascalCae}Service,`);
    this.t.push(`      ){`);
    this.t.push(`      super()`);
    this.t.push(`    }`);
    this.t.push(`  @Get('item/:id')`);
    this.t.push(`  async item(@Param('id') id: number) {`);
    this.t.push(`    try{`);
    this.t.push(`      return this.success(await this.${this.camelCase}Service.item(id))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }`);
    this.t.push(`  }`);
    this.t.push(`  @Post('list')`);
    this.t.push(`  async findAll(@Body() dto: Search${this.pascalCae}Dto) {`);
    this.t.push(`    try{      `);
    this.t.push(`      return this.success(await this.${this.camelCase}Service.list(dto))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }`);
    this.t.push(`  }`);

    // dropdownSection
    this.foreigns.forEach(el=>{
      const moduleName= this.getFileCase(el.LOOKUP_TABLE)
      const moduleNamePascal= this.getPascalCase(el.LOOKUP_TABLE)
      const moduleNameCamel= this.getCamelCase(el.LOOKUP_TABLE)
      this.t.push(`  @Get('${moduleName}-dropdown')`);
      this.t.push(`  async ${moduleName}Dropdown(@Body() dto: Search${moduleNamePascal}Dto) {`);
      this.t.push(`    try{      `);
      this.t.push(`      return this.success(await this.${this.camelCase}Service.${moduleNameCamel}Dropdown(dto))`);
      this.t.push(`    }catch(e){`);
      this.t.push(`      return this.error(e)`);
      this.t.push(`    }`);
      this.t.push(`  }`);
    })
    
  // dropdownSection

    this.t.push(`  @Post('create')`);
    this.t.push(`  async create(@Body() dto: Create${this.pascalCae}Dto, @Req() req:CustomRequest,){ `);
    this.t.push(`    try{      `);
    this.t.push(`      return this.success(await this.${this.camelCase}Service.create(dto,req))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }   `);
    this.t.push(`  }`);
    this.t.push(`  @Put('update/:id')`);
    this.t.push(`  async update(@Param('id') id: number,@Body() dto: Update${this.pascalCae}Dto, @Req() req:CustomRequest,){    `);
    this.t.push(`    try{`);
    this.t.push(`      return this.success(await this.${this.camelCase}Service.update(id,dto,req))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }   `);
    this.t.push(`  }`);
    this.t.push(`  @Delete('delete/:id')`);
    this.t.push(`  async delete(@Param('id') id: number, @Req() req:CustomRequest,){`);
    this.t.push(`    try{`);
    this.t.push(`      return this.success(await this.${this.camelCase}Service.delete(id,req))`);
    this.t.push(`    }catch(e){`);
    this.t.push(`      return this.error(e)`);
    this.t.push(`    }    `);
    this.t.push(`  }`);
    this.t.push(`}`);
  }
}
