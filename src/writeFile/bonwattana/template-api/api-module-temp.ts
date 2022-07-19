import { InputDataType } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class ApiModuleTemp extends BaseBoonwattanaClass {
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

    this.t.push(`import { Module } from '@nestjs/common';`);
    this.t.push(`import { TypeOrmModule } from '@nestjs/typeorm';`);
    this.t.push(`import { DropdownService } from 'src/shared/services/dropdown.service';`);
    dropdownField.forEach(el=>{
      const namePascal =this.getPascalCase(el.LOOKUP_TABLE)
      const fileName = this.getFileCase(el.LOOKUP_TABLE)
      this.t.push(`import { Vw${namePascal}Dropdown } from 'src/${fileName}/${fileName}.entity';`);

    })
    this.t.push(`import { ${this.pascalCae}Controller } from './${this.fileName}.controller';`);
    this.t.push(`import { ${this.pascalCae}, Vw${this.pascalCae}Dropdown, Vw${this.pascalCae}Item, Vw${this.pascalCae}List } from './${this.fileName}.entity';`);
    this.t.push(`import { ${this.pascalCae}Service } from './${this.fileName}.service';`);
    this.t.push(``);
    this.t.push(`@Module({`);
    this.t.push(`  imports: [`);
    this.t.push(`    TypeOrmModule.forFeature([${this.pascalCae},Vw${this.pascalCae}List,Vw${this.pascalCae}Item,Vw${this.pascalCae}Dropdown])`);
    dropdownField.forEach(el=>{
      const namePascal =this.getPascalCase(el.LOOKUP_TABLE)
      this.t.push(`    Vw${namePascal}Dropdown,`);

    })
    this.t.push(`    ,`);

    this.t.push(`    ])`);
    this.t.push(`  ],`);
    this.t.push(`  controllers: [${this.pascalCae}Controller],`);
    this.t.push(`  providers: [${this.pascalCae}Service,DropdownService],`);
    this.t.push(`  exports: [${this.pascalCae}Service,DropdownService]`);
    this.t.push(`})`);
    this.t.push(`export class ${this.pascalCae}Module {}`);
  }
}
