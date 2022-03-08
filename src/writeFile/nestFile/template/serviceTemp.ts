import { CellItemModel } from "../../../model/cellModel";
import { BaseNestClass } from "../base/baseNestClass";
export class NestServiceTemp extends BaseNestClass {
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
    this.t.push(`import {Injectable} from '@nestjs/common';`);
    this.t.push(`import {Repository} from "typeorm";`);
    this.t.push(`import {InjectRepository} from "@nestjs/typeorm";`);
    this.t.push(
      `import {IBasicService} from "../shared/interfaces/basic-service.interface";`
    );
    this.t.push(
      `import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";`
    );
    this.t.push(
      `import { ${this.pascalCae} } from './${this.fileName}.entity';`
    );
    this.t.push(
      `import { Create${this.pascalCae}Dto, Delete${this.pascalCae}Dto, Search${this.pascalCae}Dto, Update${this.pascalCae}Dto } from './${this.fileName}.dto';`
    );
    this.t.push(
      `import { ${this.pascalCae}Pagenation } from './${this.fileName}.response';`
    );
    this.t.push(``);
    this.t.push(`@Injectable()`);
    this.t.push(`export class ${this.pascalCae}Service {`);
    this.t.push(``);
    this.t.push(`    constructor(`);
    this.t.push(`        @InjectRepository(${this.pascalCae})`);
    this.t.push(
      `        private readonly ${this.camelCase}Repository: Repository<${this.pascalCae}>`
    );
    this.t.push(`      ) {`);
    this.t.push(`      }`);
    this.t.push(
      `      async insert(dto: Create${this.pascalCae}Dto): Promise<Create${this.pascalCae}Dto> {`
    );
    this.t.push(`        const en: Create${this.pascalCae}Dto = {`);
    this.t.push(`          ...dto,`);
    this.t.push(`        };`);
    this.t.push(
      `        const ${this.camelCase} = this.${this.camelCase}Repository.create(en);`
    );
    this.t.push(
      `        return await this.${this.camelCase}Repository.save(${this.camelCase});`
    );
    this.t.push(`      }`);
    this.t.push(`    `);
    this.t.push(
      `      async updated(dto: Update${this.pascalCae}Dto): Promise<Update${this.pascalCae}Dto> {`
    );
    this.t.push(
      `        let ${this.camelCase} = await this.${this.camelCase}Repository.findOne({where: {id: dto.id}});`
    );
    this.t.push(`        ${this.camelCase} = {`);
    this.t.push(`          ...${this.camelCase},`);
    this.t.push(`          ...dto,`);
    this.t.push(`          id: ${this.camelCase}.id,`);
    this.t.push(`        };`);
    this.t.push(
      `        return await this.${this.camelCase}Repository.save(${this.camelCase});`
    );
    this.t.push(`      }`);
    this.t.push(`    `);
    this.t.push(`      async deleted(dto: Delete${this.pascalCae}Dto) {`);
    this.t.push(`        let ${this.camelCase} = await this.findById(dto.id);`);
    this.t.push(`        ${this.camelCase} = {`);
    this.t.push(`          ...${this.camelCase},`);
    this.t.push(`          ...dto,`);
    this.t.push(`          id: ${this.camelCase}.id,`);
    this.t.push(`          deletedAt: new Date()`);
    this.t.push(`        }`);
    this.t.push(
      `        return await this.${this.camelCase}Repository.softRemove(await this.${this.camelCase}Repository.save(${this.camelCase}));`
    );
    this.t.push(`      }`);
    this.t.push(`    `);
    this.t.push(
      `      async findFilter(dto: Search${this.pascalCae}Dto): Promise<${this.pascalCae}Pagenation> {`
    );
    this.t.push(
      `        const _order = createOrderForBuilder('${this.camelCase}', dto.sortBy, dto.orderBy);`
    );
    this.t.push(
      `        const {skip, limit} = calculatePaging(dto.page, dto.size);`
    );
    this.t.push(`        const builder = this.${this.camelCase}Repository`);
    this.t.push(`          .createQueryBuilder('${this.snakeCase}');`);
    this.t.push(`        const [data, count] = await builder`);
    this.t.push(`          .orderBy({..._order})`);
    this.t.push(`          .skip(skip)`);
    this.t.push(`          .take(limit)`);
    this.t.push(`          .getManyAndCount();`);
    this.t.push(`    `);
    this.t.push(`        const result = new ${this.pascalCae}Pagenation();`);
    this.t.push(`        result.currentPage = dto.page;`);
    this.t.push(`        result.total = count;`);
    this.t.push(`        result.perPage = limit;`);
    this.t.push(`        result.success = true;`);
    this.t.push(`        result.error = [];`);
    this.t.push(`        result.totalPage = Math.ceil(count / limit);`);
    this.t.push(`        result.data = data;`);
    this.t.push(`        return result;`);
    this.t.push(`      }`);
    this.t.push(`    `);
    this.t.push(`      async findAll(): Promise<${this.pascalCae}[]> {`);
    this.t.push(
      `        return await this.${this.camelCase}Repository.find();`
    );
    this.t.push(`      }`);
    this.t.push(`    `);
    this.t.push(
      `      async findById(id: number): Promise<${this.pascalCae}> {`
    );
    this.t.push(
      `        return await this.${this.camelCase}Repository.findOne({`
    );
    this.t.push(`          where: {id: id},`);
    this.t.push(`        });`);
    this.t.push(`      }`);
    this.t.push(`}`);
  }
}
