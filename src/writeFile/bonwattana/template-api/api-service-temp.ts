import { InputDataType } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class ApiServiceTemp extends BaseBoonwattanaClass {
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
    const dropdownList = this.masterList.filter(fl=>fl.INPUT_TYPE == InputDataType.FOREIGN)
    this.t.push(`import { Injectable } from '@nestjs/common';`);
    this.t.push(`import { InjectRepository } from '@nestjs/typeorm';`);
    this.t.push(`import { CustomRequest } from 'src/shared/models/request-model';`);
    this.t.push(`import { SearchResult, SelectItems } from 'src/shared/models/search-param-model';`);
    this.t.push(`import { BaseService } from 'src/shared/services/base.service';`);
    this.t.push(`import { DropdownService } from 'src/shared/services/dropdown.service';`);
    this.t.push(`import { Repository } from 'typeorm';`);
    this.t.push(`import { Create${this.pascalCae}Dto, ${this.pascalCae}Dto, Search${this.pascalCae}Dto, Update${this.pascalCae}Dto } from './${this.fileName}.dto';`);
    this.t.push(`import { ${this.pascalCae}, Vw${this.pascalCae}Dropdown, Vw${this.pascalCae}Item, Vw${this.pascalCae}List } from './${this.fileName}.entity';`);
    dropdownList.forEach(el=>{
      const namePascal =this.getPascalCase(el.LOOKUP_TABLE)
      const fileName = this.getFileCase(el.LOOKUP_TABLE)
      this.t.push(`import { Vw${namePascal}Dropdown } from 'src/${fileName}/${fileName}.entity';`);

    })
    this.t.push(``);
    this.t.push(`@Injectable()`);
    this.t.push(`export class ${this.pascalCae}Service extends BaseService {`);
    this.t.push(``);
    this.t.push(`    constructor(`);
    this.t.push(`        @InjectRepository(${this.pascalCae})`);
    this.t.push(`        private readonly ${this.camelCase}Repository: Repository<${this.pascalCae}>,`);
    this.t.push(`        @InjectRepository(Vw${this.pascalCae}List)`);
    this.t.push(`        private readonly vw${this.pascalCae}Repository: Repository<Vw${this.pascalCae}List>,`);
    this.t.push(`        @InjectRepository(Vw${this.pascalCae}Item)`);
    this.t.push(`        private readonly itemRepository:Repository<Vw${this.pascalCae}Item>,`);
    dropdownList.forEach(en=>{
      const tablePascal = this.getPascalCase(en.LOOKUP_TABLE)
      this.t.push(`        @InjectRepository(Vw${tablePascal}Dropdown)`);
      this.t.push(`        private readonly vwDropdown${tablePascal}Repository:Repository<Vw${tablePascal}Dropdown>,`);
    })
    this.t.push(`        private readonly dropdownService: DropdownService`);
    this.t.push(`        ){`);
    this.t.push(`        super()`);
    this.t.push(`    }`);

    //dropdown section
    dropdownList.forEach(en=>{
      const tableCamel = this.getCamelCase(en.LOOKUP_TABLE)
      const tablePascal = this.getPascalCase(en.LOOKUP_TABLE)
      this.t.push(`    async ${tableCamel}Dropdown(dto: Search${tablePascal}Dto):Promise<SelectItems[]> {`);
      this.t.push(`        return await this.dropdownService.${tableCamel}Dropdown(dto,this.vwDropdown${tablePascal}Repository);`);
      this.t.push(`      }`);
    })
       //dropdown section
    this.t.push(`    async list(dto:Search${this.pascalCae}Dto):Promise<SearchResult<Vw${this.pascalCae}List>>{`);
    this.t.push(`        const builder = this.createQueryBuider<Vw${this.pascalCae}List>(dto,this.vw${this.pascalCae}Repository)`);
    this.t.push(`        const [data, count] = await builder`);
    this.t.push(`        .getManyAndCount();`);
    this.t.push(`        return this.toSearchResult<Vw${this.pascalCae}List>(dto.paginator,count,data);`);
    this.t.push(`    }`);
    this.t.push(`    async create(dto:Create${this.pascalCae}Dto,req:CustomRequest):Promise<${this.pascalCae}>{        `);
    this.t.push(`        const en = this.toCreateModel(dto,req) as ${this.pascalCae}  `);
    this.t.push(`        return await this.${this.camelCase}Repository.save(`);
    this.t.push(`            this.${this.camelCase}Repository.create(en)`);
    this.t.push(`        );`);
    this.t.push(`    }`);
    this.t.push(`    async update(id:number,dto:Update${this.pascalCae}Dto,req:CustomRequest):Promise<${this.pascalCae}Dto>{`);
    this.t.push(`        const m = await this.${this.camelCase}Repository.find({where:{id:dto.id}})`);
    this.t.push(`        return await this.${this.camelCase}Repository.save(`);
    this.t.push(`            this.toUpdateModel(m,dto,req)`);
    this.t.push(`        );`);
    this.t.push(`    }`);
    this.t.push(`    async delete(id:number,req:CustomRequest):Promise<${this.pascalCae}Dto>{`);
    this.t.push(`        let m = await this.${this.camelCase}Repository.findOne({where:{id:id}})`);
    this.t.push(`        return await this.${this.camelCase}Repository.softRemove(`);
    this.t.push(`            await this.${this.camelCase}Repository.save(`);
    this.t.push(`                this.toDeleteModel(m,req)`);
    this.t.push(`            )`);
    this.t.push(`        )`);
    this.t.push(`    }`);
    this.t.push(`    async item(id:number):Promise<any>{`);
    this.t.push(`        return await this.itemRepository.findOne({where:{id:id}})`);
    this.t.push(`    }`);
    this.t.push(`}`);
  }
}
