import { InputDataType } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppItemTsTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { Component, ElementRef, Renderer2 } from '@angular/core';`);
    this.t.push(`import { ActivatedRoute, Router } from '@angular/router';`);
    this.t.push(`import { SelectItem } from 'primeng/api';`);
    this.t.push(`import { forkJoin } from 'rxjs';`);
    this.t.push(`import { SelectItems } from 'src/app/shared/models/miscellaneous';`);
    this.t.push(`import { BaseItemComponent } from 'src/app/shared/component/base-item/base-item.component';`);
    this.t.push(`import { BaseItemInterface } from 'src/app/shared/interface/base-item-interface';`);
    this.t.push(`import { ${this.pascalCae}ItemModel } from '../${this.fileName}-model';`);
    this.t.push(`import { ${this.pascalCae}Service } from '../${this.fileName}.service';`);
    this.t.push(``);
    this.t.push(`@Component({`);
    this.t.push(`  selector: '${this.fileName}-item',`);
    this.t.push(`  templateUrl: './${this.fileName}-item.component.html',`);
    this.t.push(`  styleUrls: ['./${this.fileName}-item.component.scss']`);
    this.t.push(`})`);
    this.t.push(`export class ${this.pascalCae}ItemComponent extends BaseItemComponent<${this.pascalCae}ItemModel>  implements BaseItemInterface {`);
    this.t.push(`  constructor(el:ElementRef,renderer:Renderer2,private readonly service:${this.pascalCae}Service, router: Router , route:ActivatedRoute){`);
    this.t.push(`    super(el,renderer,router,route) `);
    this.t.push(`  }`);
    //dropdownSection
    const dropdownOptions = this.masterList.filter(fl=>fl.INPUT_TYPE == InputDataType.ENUM || fl.INPUT_TYPE == InputDataType.FOREIGN)
    dropdownOptions.forEach(el=>{
      const optionNameCamel = this.getCamelCase(el.COLUMN_NAME)
      this.t.push(`  ${optionNameCamel}Dropdown:SelectItems[]=[]`);
    })
    //dropdownSection
    this.t.push(`  formValidate:boolean =true`);
    this.t.push(`  ngOnDestroy(): void {`);
    this.t.push(`  }`);
    this.t.push(`  ngAfterViewInit(): void {`);
    this.t.push(`    if(this.isUpdateMode){`);
    this.t.push(`      this.getById()`);
    this.t.push(`    }else{`);
    this.t.push(`      this.setInitialCreatingData()`);
    this.t.push(`    }`);
    this.t.push(`  }`);
    this.t.push(``);
    this.t.push(`  onEnumLoader(): void {`);
    //enumdropdownSection
    const enumsOptions = this.masterList.filter(fl=>fl.INPUT_TYPE == InputDataType.ENUM)
    enumsOptions.forEach(el=>{
      const optionName = this.getCamelCase(el.COLUMN_NAME);
      const optionNamePascal = this.getPascalCase(el.COLUMN_NAME);

      this.t.push(`    this.${optionName}Dropdown = this.dropdownService.get${optionNamePascal}Dropdown()`);

    })
    //enumdropdownSection
    this.t.push(`  }`);
    this.t.push(`  getById(): void{`);
    this.t.push(`    this.service.getItem(this.id).subscribe(result=>{      `);
    this.t.push(`      this.model = result`);
    this.t.push(`      this.onAsyncRunner(result);`);
    this.t.push(`    })`);
    this.t.push(`  }`);
    this.t.push(`  onAsyncRunner(model?: any): void {`);
    this.t.push(`    this.onEnumLoader()`);

    //dropdownSection
    const foreignOptions = this.masterList.filter(fl=> fl.INPUT_TYPE == InputDataType.FOREIGN);
    
    this.t.push(`  if(!this.view){`);

    this.t.push(`    forkJoin(`);
    foreignOptions.forEach(el=>{
      const optionNamePascal = this.getPascalCase(el.COLUMN_NAME)
      this.t.push(`    this.service.get${optionNamePascal}Dropdown(),`);
    })
    this.t.push(`    ).subscribe(`);
    this.t.push(`      (`);
    this.t.push(`      [`);

    foreignOptions.forEach(el=>{
      const optionNameCamel = this.getCamelCase(el.COLUMN_NAME)
      this.t.push(`      ${optionNameCamel}Dropdown,`);
    })
    this.t.push(`      ]`);

    this.t.push(`      ) => {`);
    this.t.push(`      [`);
    foreignOptions.forEach(el=>{
      const optionNameCamel = this.getCamelCase(el.COLUMN_NAME)
      this.t.push(`     this.${optionNameCamel}Dropdown =${optionNameCamel}Dropdown  as SelectItems[],`);
    })
    this.t.push(`      ]`);
    this.t.push(`      }),`);
    this.t.push(`      (error) => {`);
    this.t.push(`      }`);
    this.t.push(`   }`);

    //dropdownSection
    this.t.push(`  }`);
    this.t.push(`  async setInitialCreatingData(){`);
    this.t.push(`    this.service.initial().subscribe(result=>{`);
    this.t.push(`      this.model = result`);
    this.t.push(`      this.onAsyncRunner(result);`);
    this.t.push(`    })`);
    this.t.push(`  }`);
    this.t.push(`  onSave(): void {`);
    this.t.push(`    this.onSubmit(this.validateField())`);
    this.t.push(`  }`);
    this.t.push(`  ngOnInit(): void {`);
    this.t.push(`   this.setInitialCreatingData()`);
    this.t.push(`  } `);
    this.t.push(`  async onSubmit(isValid:boolean){    `);
    this.t.push(`    if(isValid){`);
    this.t.push(`      if(this.isUpdateMode){`);
    this.t.push(`        this.service.update(this.id,this.model).subscribe(value=>{`);
    this.t.push(`          this.backTolist()`);
    this.t.push(`        })`);
    this.t.push(`      }else{`);
    this.t.push(`        this.service.create(this.model).subscribe(value=>{`);
    this.t.push(`          this.backTolist()`);
    this.t.push(`        })`);
    this.t.push(`      }`);
    this.t.push(`    }`);
    this.t.push(`  }`);
    this.t.push(`  backTolist(){    `);
    this.t.push(`    this.toList('${this.fileName}')`);
    this.t.push(`  }`);
    this.t.push(`}`);
  }
}
