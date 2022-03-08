import { CellItemModel } from "../../../model/cellModel";
import { BaseNestClass } from "../base/baseNestClass";
export class NestModuleTemp extends BaseNestClass {
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
    this.t.push(`import { Module } from '@nestjs/common';`);
    this.t.push(`import { TypeOrmModule } from '@nestjs/typeorm';`);
    this.t.push(
      `import { ${this.pascalCae}Controller } from './${this.fileName}.controller';`
    );
    this.t.push(
      `import { ${this.pascalCae} } from './${this.fileName}.entity';`
    );
    this.t.push(
      `import { ${this.pascalCae}Service } from './${this.fileName}.service';`
    );
    this.t.push(``);
    this.t.push(`@Module({`);
    this.t.push(`  imports: [`);
    this.t.push(`    TypeOrmModule.forFeature([${this.pascalCae}])`);
    this.t.push(`  ],`);
    this.t.push(`  controllers: [${this.pascalCae}Controller],`);
    this.t.push(`  providers: [${this.pascalCae}Service],`);
    this.t.push(`  exports:[${this.pascalCae}Service]`);
    this.t.push(`})`);
    this.t.push(`export class ${this.pascalCae}Module {}`);
  }
}
