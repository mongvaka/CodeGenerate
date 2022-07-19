import { InputDataType, SearchOptionDataType } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppListTsTemp extends BaseBoonwattanaClass {
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
    this.t.push(`import { Component } from '@angular/core';`);
    
    this.t.push(`import { forkJoin } from 'rxjs';`);
    this.t.push(`import { ActivatedRoute, Router } from '@angular/router';`);
    this.t.push(`import { BaseListComponent } from 'src/app/shared/component/base-list/base-list.component';`);
    this.t.push(`import { Operators } from 'src/app/shared/constants/constanst';`);
    this.t.push(`import { ColumnType, InputType, SortType } from 'src/app/shared/constants/enum-system';`);
    this.t.push(`import { BaseListInterface } from 'src/app/shared/interface/base-list-interface';`);
    this.t.push(`import { ColumnModel, OptionModel, RowIdentity, SelectItems } from 'src/app/shared/models/miscellaneous';`);
    this.t.push(`import { SearchCondition, SearchParameter } from 'src/app/shared/models/search-param-model';`);
    this.t.push(`import { ${this.pascalCae}ListModel } from '../${this.fileName}-model';`);
    this.t.push(`import { ${this.pascalCae}Service } from '../${this.fileName}.service';`);
    this.t.push(`@Component({`);
    this.t.push(`  selector: '${this.fileName}-list',`);
    this.t.push(`  templateUrl: './${this.fileName}-list.component.html',`);
    this.t.push(`  styleUrls: ['./${this.fileName}-list.component.scss']`);
    this.t.push(`})`);
    this.t.push(`export class ${this.pascalCae}ListComponent extends BaseListComponent<${this.pascalCae}ListModel> implements BaseListInterface {`);
    this.t.push(`  tableName:string ='${this.snakeCase}'`);
    this.t.push(`  moduleName:string = 'MODULE.${this.getUpperCase(this.moduleName)}'`);
    this.t.push(`  lastRemoveId:number = undefined;`);
    //enumDropdown section
    const dropdownOptions = this.masterList.filter(fl=>(fl.INPUT_TYPE == InputDataType.ENUM||fl.INPUT_TYPE == InputDataType.FOREIGN)&& (fl.SEARCH||fl.LIST_ORDER))
    dropdownOptions.forEach(el=>{
      const nameCamel = this.getCamelCase(el.COLUMN_NAME)
      this.t.push(`  ${nameCamel}Option:SelectItems[] = []`);
    })
    //enumDropdown section
    this.t.push(`  constructor(private service: ${this.pascalCae}Service,`);
    this.t.push(`     router:Router,route:ActivatedRoute`);
    this.t.push(`    ) {`);
    this.t.push(`    super(router,route);`);
    this.t.push(`  }`);
    this.t.push(`  setSerachCondtion(): void {`);
    this.t.push(`    const searchConditions:SearchCondition[] = [`);

    // setSearchSection
    this.searchs.forEach(el=>{
      const feildNameCamel = this.getCamelCase(el.COLUMN_NAME)
      const nameUpper = this.getUpperCase(el.COLUMN_NAME)
      const inputType = this.getInputType(el.INPUT_TYPE)
      const optionName = this.getOptionName(el.INPUT_TYPE,el.COLUMN_NAME)
      const operatorName = this.getOperator(el.INPUT_TYPE)
      this.t.push(`      {`);
      this.t.push(`          tableName:'${this.snakeCase}',`);
      this.t.push(`          feildName:'${feildNameCamel}',`);
      this.t.push(`          label:'LABEL.${nameUpper}',`);
      this.t.push(`          inputType:InputType.${inputType},`);
      this.t.push(`          operator:Operators.${operatorName}`);
      this.t.push(`${optionName}`);
      this.t.push(`      },`);
    })
        // setSearchSection

    this.t.push(`    ]`);
    this.t.push(`    this.searchConditions = searchConditions;`);
    this.t.push(`  }`);
    this.t.push(`  ngOnInit(): void {`);
    this.t.push(`    this.onEnumLoader()`);
    this.t.push(`    this.setSerachCondtion()`);
    this.t.push(`    this.setDataGridOption()`);
    this.t.push(`  }`);
    this.t.push(`  onSearch(searchParameter: SearchParameter): void {        `);
    this.t.push(`    this.service.getList(searchParameter).subscribe(result=>{      `);
    this.t.push(`      this.searchResult = result`);
    this.t.push(`    })`);
    this.t.push(`  }`);
    this.t.push(`  ngAfterViewInit(): void {`);
    this.t.push(`  }`);
    this.t.push(`  ngOnDestroy(): void {`);
    this.t.push(`  }`);
    this.t.push(`  onEnumLoader(): void {`);
    // enumDropdownSection
    const enumOptions = this.masterList.filter(fl=>(fl.INPUT_TYPE == InputDataType.ENUM)&& fl.LIST_ORDER)
    enumOptions.forEach(el=>{
      const nameCamel = this.getCamelCase(el.COLUMN_NAME)
      const namePascal = this.getPascalCase(el.COLUMN_NAME)
      this.t.push(`    this.${nameCamel}Option = this.dropdownService.get${namePascal}Dropdown()`);
    })
    // enumDropdownSection
    const foreignOptions = this.masterList.filter(fl=> fl.INPUT_TYPE == InputDataType.FOREIGN&&fl.LIST_ORDER);
    if(foreignOptions.length){
      this.t.push(`    forkJoin(`);
      foreignOptions.forEach(el=>{
        const optionNamePascal = this.getPascalCase(el.COLUMN_NAME)
        this.t.push(`    this.service.get${optionNamePascal}Dropdown(),`);
      })
      this.t.push(`    ).subscribe(`);
      this.t.push(`      (`);
      foreignOptions.forEach(el=>{
        const optionNameCamel = this.getCamelCase(el.COLUMN_NAME)
        this.t.push(`      ${optionNameCamel}Option,`);
      })
      this.t.push(`      ) => {`);
      this.t.push(`      [`);
      foreignOptions.forEach(el=>{
        const optionNameCamel = this.getCamelCase(el.COLUMN_NAME)
        this.t.push(`     this.${optionNameCamel}Option =${optionNameCamel}Option  as SelectItems[],`);
      })
      this.t.push(`      ]`);
      this.t.push(`      }),`);
      this.t.push(`      (error) => {`);
      this.t.push(`      }`);
  
    }
    


    this.t.push(`  }`);
    this.t.push(`  setDataGridOption(): void {`);
    this.t.push(`    this.option = new OptionModel();`);
    this.t.push(`    this.option.canCreate = true;`);
    this.t.push(`    this.option.canView = true;`);
    this.t.push(`    this.option.canDelete = true;`);
    this.t.push(`    const columns: ColumnModel[] = [`);
    // setDataGridOption
    this.lists.forEach(el=>{
      const labelName = this.getUpperCase(el.COLUMN_NAME)
      const columnName  = this.getCamelCase(el.COLUMN_NAME)
      const columnType  = this.getColumnType(el.INPUT_TYPE)
      const optionName = this.getOptionName(el.INPUT_TYPE,el.COLUMN_NAME)
      this.t.push(`      {`);
      this.t.push(`        label: 'LABEL.${labelName}',`);
      this.t.push(`        textKey: '${columnName}',`);
      this.t.push(`        type: ColumnType.${columnType},`);
      this.t.push(`        tableName: '${this.snakeCase}',`);
      this.t.push(`        visibility: true,`);
      this.t.push(`        sorting: SortType.NONE,`);
      this.t.push(`${optionName}`);
      this.t.push(`      },`);
    })
    
    // setDataGridOption
    this.t.push(`    ];`);
    this.t.push(`    this.option.columns = columns;`);
    this.t.push(`  }`);
    this.t.push(`  onCreate(): void {`);
    this.t.push(`    this.toItemPage(0,false)`);
    this.t.push(`  }`);
    this.t.push(`  onView(row: RowIdentity): void {`);
    this.t.push(`    this.toItemPage(row.id,true)`);
    this.t.push(`  }`);
    this.t.push(`  onEdit(row: RowIdentity):void{`);
    this.t.push(`    this.toItemPage(row.id,false)`);
    this.t.push(`  }`);
    this.t.push(`  onDelete(row: RowIdentity): void {`);
    this.t.push(`    this.service.delete(row.id).subscribe(result=>{`);
    this.t.push(`      this.lastRemoveId = result.id`);
    this.t.push(`    })`);
    this.t.push(`  }`);
    this.t.push(`  toItemPage(id:number,isView:boolean){`);
    this.t.push(`    this.toItem('demo',id,isView)`);
    this.t.push(`  }`);
    this.t.push(`}`);
  }
  getOperator(INPUT_TYPE: string) {
    if(INPUT_TYPE == InputDataType.FOREIGN || INPUT_TYPE == InputDataType.ENUM){
      return `EQUAL`
    }else{
      return  `LIKE` 
    }  }
  getOptionName(INPUT_TYPE: string, COLUMN_NAME: string) {
    if(INPUT_TYPE == InputDataType.FOREIGN || INPUT_TYPE == InputDataType.ENUM){
      const nameCamel = this.getCamelCase(COLUMN_NAME)
      return `        enumOption: this.${nameCamel}Option`
    }else{
      return  ''
    }
  }
  getColumnType(inputType: string) {
    switch(inputType){
      case InputDataType.BOOLEAN :
        return SearchOptionDataType.BOOLEAN
        case InputDataType.DATE :
          return SearchOptionDataType.DATE
          case InputDataType.DECIMAL0 :
          return SearchOptionDataType.DECIMAL0
          case InputDataType.DECIMAL2 :
          return SearchOptionDataType.DECIMAL2
          case InputDataType.DECIMAL4 :
          return SearchOptionDataType.DECIMAL4
          case InputDataType.TIME :
          return SearchOptionDataType.TIME
          case InputDataType.EMAIL :
          return SearchOptionDataType.EMAIL
          case InputDataType.ENUM :
          return SearchOptionDataType.ENUM
          case InputDataType.FOREIGN :
          return SearchOptionDataType.FOREIGN
          case InputDataType.LONG_TEXT :
          return SearchOptionDataType.LONG_TEXT
          case InputDataType.PHONE :
          return SearchOptionDataType.PHONE
          case InputDataType.SHOT_TEXT :
          return SearchOptionDataType.SHOT_TEXT
          default :
          return SearchOptionDataType.SHOT_TEXT;
    }
  }
}
