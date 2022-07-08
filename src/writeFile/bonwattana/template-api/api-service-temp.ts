import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class NestServiceTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { Injectable } from '@nestjs/common';`);
    this.t.push(`import { InjectRepository } from '@nestjs/typeorm';`);
    this.t.push(`import { CustomRequest } from 'src/shared/models/request-model';`);
    this.t.push(`import { SearchResult, SelectItems } from 'src/shared/models/search-param-model';`);
    this.t.push(`import { BaseService } from 'src/shared/services/base.service';`);
    this.t.push(`import { DropdownService } from 'src/shared/services/dropdown.service';`);
    this.t.push(`import { Repository } from 'typeorm';`);
    this.t.push(`import { CreateDemoDto, DemoDto, SearchDemoDto, UpdateDemoDto } from './demo.dto';`);
    this.t.push(`import { Demo, VwDemoDropdown, VwDemoItem, VwDemoList } from './demo.entity';`);
    this.t.push(``);
    this.t.push(`@Injectable()`);
    this.t.push(`export class DemoService extends BaseService {`);
    this.t.push(``);
    this.t.push(`    constructor(`);
    this.t.push(`        @InjectRepository(Demo)`);
    this.t.push(`        private readonly demoRepository: Repository<Demo>,`);
    this.t.push(`        @InjectRepository(VwDemoList)`);
    this.t.push(`        private readonly vwDemoRepository: Repository<VwDemoList>,`);
    this.t.push(`        @InjectRepository(VwDemoItem)`);
    this.t.push(`        private readonly itemRepository:Repository<VwDemoItem>,`);
    this.t.push(`        @InjectRepository(VwDemoDropdown)`);
    this.t.push(`        private readonly vwDropdownDemoRepository:Repository<VwDemoDropdown>,`);
    this.t.push(`        private readonly dropdownService: DropdownService`);
    this.t.push(`        ){`);
    this.t.push(`        super()`);
    this.t.push(`    }`);
    this.t.push(`    async demoDropdown(dto: SearchDemoDto):Promise<SelectItems[]> {`);
    this.t.push(`        return await this.dropdownService.demoDropdown(dto,this.vwDropdownDemoRepository);`);
    this.t.push(`      }`);
    this.t.push(`    async list(dto:SearchDemoDto):Promise<SearchResult<VwDemoList>>{`);
    this.t.push(`        const builder = this.createQueryBuider<VwDemoList>(dto,this.vwDemoRepository)`);
    this.t.push(`        const [data, count] = await builder`);
    this.t.push(`        .getManyAndCount();`);
    this.t.push(`        return this.toSearchResult<VwDemoList>(dto.paginator,count,data);`);
    this.t.push(`    }`);
    this.t.push(`    async create(dto:CreateDemoDto,req:CustomRequest):Promise<Demo>{        `);
    this.t.push(`        const en = this.toCreateModel(dto,req) as Demo  `);
    this.t.push(`        return await this.demoRepository.save(`);
    this.t.push(`            this.demoRepository.create(en)`);
    this.t.push(`        );`);
    this.t.push(`    }`);
    this.t.push(`    async update(id:number,dto:UpdateDemoDto,req:CustomRequest):Promise<DemoDto>{`);
    this.t.push(`        const m = await this.demoRepository.find({where:{id:dto.id}})`);
    this.t.push(`        return await this.demoRepository.save(`);
    this.t.push(`            this.toUpdateModel(m,dto,req)`);
    this.t.push(`        );`);
    this.t.push(`    }`);
    this.t.push(`    async delete(id:number,req:CustomRequest):Promise<DemoDto>{`);
    this.t.push(`        let m = await this.demoRepository.findOne({where:{id:id}})`);
    this.t.push(`        return await this.demoRepository.softRemove(`);
    this.t.push(`            await this.demoRepository.save(`);
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
