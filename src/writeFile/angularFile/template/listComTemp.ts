import { getColumnType, getNameRemoveTable } from "./../../../shared/function";
import { ColumnType, DataType, StyleType } from "./../../../shared/constans";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { CellItemModel } from "./../../../model/cellModel";
import { getColumnName } from "../../../shared/function";
export class ListComTemp extends BaseClass {
  masterList: CellItemModel[];
  custom: string[];
  typeScript: string[];
  html: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.custom = [];
    this.typeScript = [];
    this.html = [];
  }
  getCustomComData(): string[] {
    this.initialCustomComData();
    return this.custom;
  }
  initialCustomComData() {
    this.custom.push(`import { AccessModeView } from 'app/models';`);
    this.custom.push(
      `import { BaseServiceModel } from 'app/shared/models/system_model';`
    );
    this.custom.push(`import { Observable, of } from 'rxjs';`);
    this.custom.push(
      `import { ${this.moduleName}Service } from '../${this.moduleNameSnakeNonTable}.service';`
    );
    this.custom.push(`export class ${this.moduleName}ListCustomComponent {`);
    this.custom.push(
      `  baseService: BaseServiceModel<${this.moduleName}Service>;`
    );
    this.custom.push(`  parentName = null;`);
    this.custom.push(
      `  accessModeView: AccessModeView = new AccessModeView();`
    );
    this.custom.push(`  getPageAccessRight(): Observable<any> {`);
    this.custom.push(`    return new Observable((observer) => {});`);
    this.custom.push(`  }`);
    this.custom.push(
      `  setAccessModeByParentStatus(): Observable<AccessModeView> {`
    );
    this.custom.push(`    return of(this.accessModeView);`);
    this.custom.push(`  }`);
    this.custom.push(`  getCanCreateByParent(accessRight: boolean): boolean {`);
    this.custom.push(
      `    return accessRight && this.accessModeView.canCreate;`
    );
    this.custom.push(`  }`);
    this.custom.push(`  getCanViewByParent(accessRight: boolean): boolean {`);
    this.custom.push(`    return accessRight && this.accessModeView.canView;`);
    this.custom.push(`  }`);
    this.custom.push(`  getCanDeleteByParent(accessRight: boolean): boolean {`);
    this.custom.push(
      `    return accessRight && this.accessModeView.canDelete;`
    );
    this.custom.push(`  }`);
    this.custom.push(`}`);
  }
  getHtmlPageData(): string[] {
    this.initialHtmlCompData();
    return this.html;
  }
  initialHtmlCompData() {
    this.html.push(`<div class="k-container-cm">`);
    this.html.push(`  <div class="k-w-max none-print">`);
    this.html.push(`    <p class="kis-panel-title">`);
    this.html.push(
      `      {{ "LABEL.${this.moduleNameUpper}" | translate }} <i class="fas fa-chevron-right"></i>`
    );
    this.html.push(`      {{ "LABEL.LIST" | translate }}`);
    this.html.push(`    </p>`);
    this.html.push(`  </div>`);
    this.html.push(`  <div class="k-w-max kis-g-btn k-display-flex">`);
    this.html.push(`    <div>`);
    this.html.push(`      <kis-button`);
    this.html.push(`        *ngIf="isRelatedMode"`);
    this.html.push(`        inputId="CANCEL"`);
    this.html.push(`        icon="fas fa-chevron-circle-left"`);
    this.html.push(`        [label]="'LABEL.BACK' | translate"`);
    this.html.push(
      `        className="kis-btn-outline-primary none-print k-ml"`
    );
    this.html.push(`        [kisConfig]="buttonConfig"`);
    this.html.push(`        (click)="onBack()"`);
    this.html.push(`      ></kis-button>`);
    this.html.push(`      <kis-button`);
    this.html.push(`        inputId="PRINT"`);
    this.html.push(`        [label]="'LABEL.PRINT' | translate"`);
    this.html.push(`        className="kis-btn-outline-primary none-print"`);
    this.html.push(`        [kisConfig]="buttonConfig"`);
    this.html.push(`        onclick="window.print()"`);
    this.html.push(`      ></kis-button>`);
    this.html.push(`      <kis-button`);
    this.html.push(`        inputId="EXPORT_EXCEL"`);
    this.html.push(`        [label]="'LABEL.EXPORT_EXCEL' | translate"`);
    this.html.push(
      `        className="kis-btn-outline-primary none-print k-ml"`
    );
    this.html.push(`        [kisConfig]="buttonConfig"`);
    this.html.push(`        (click)="exportToExcel(searchResult)"`);
    this.html.push(`      ></kis-button>`);
    this.html.push(`    </div>`);
    this.html.push(`    <div>`);
    this.html.push(`      <kis-button`);
    this.html.push(`        inputId="SAVE"`);
    this.html.push(`        [label]="'LABEL.CREATE' | translate"`);
    this.html.push(`        className="kis-btn-primary none-print k-ml"`);
    this.html.push(`        [kisConfig]="buttonConfig"`);
    this.html.push(`        (click)="onCreate()"`);
    this.html.push(`      ></kis-button>`);
    this.html.push(`    </div>`);
    this.html.push(`  </div>`);
    this.html.push(`  <br />`);
    this.html.push(`  <kis-data-grid`);
    this.html.push(`    id="${this.moduleNameUpper}"`);
    this.html.push(`    [isNewSearch]="true"`);
    this.html.push(`    [option]="option"`);
    this.html.push(`    [dataSource]="searchResult"`);
    this.html.push(`    [createable]="canCreate"`);
    this.html.push(`    (createEmit)="onCreate($event)"`);
    this.html.push(`    (viewEmit)="onView($event)"`);
    this.html.push(`    (deleteEmit)="onDelete($event)"`);
    this.html.push(`    (filterEmit)="onFilter($event)"`);
    this.html.push(`    (rowAuthEmit)="getRowAuthorize($event)"`);
    this.html.push(`    (searchEmit)="onsearch($event)"`);
    this.html.push(`  ></kis-data-grid>`);
    this.html.push(`</div>`);
  }
  getTypeScriptPageData(): string[] {
    this.initialTypescriptData();
    return this.typeScript;
  }
  initialTypescriptData() {
    this.typeScript.push(`import { Component, Input } from '@angular/core';`);
    this.typeScript.push(
      `import { ${this.moduleName}ListModel } from 'app/models';`
    );
    this.typeScript.push(
      `import { BaseListInterface } from 'app/core/interfaces/base-list/base-list.interface';`
    );
    this.typeScript.push(
      `import { BaseListComponent } from 'app/core/components/base-list/base-list.component';`
    );
    this.typeScript.push(`import {`);
    this.typeScript.push(`  ColumnModel,`);
    this.typeScript.push(`  GridFilterModel,`);
    this.typeScript.push(`  OptionModel,`);
    this.typeScript.push(`  PageInformationModel,`);
    this.typeScript.push(`  RowIdentity,`);
    this.typeScript.push(`  SearchParameter,`);
    this.typeScript.push(`  SearchResult,`);
    this.typeScript.push(`  SelectItems,`);
    this.typeScript.push(`} from 'app/shared/models/system_model';`);
    this.typeScript.push(
      `import { ${this.moduleName}ListCustomComponent } from './bank-list-custom.component';`
    );
    this.typeScript.push(`import { Observable } from 'rxjs';`);
    this.typeScript.push(
      `import { ${this.moduleName}Service } from '../bank.service';`
    );
    this.typeScript.push(
      `import { ColumnType, SortType, Operators } from 'app/shared/constants';`
    );
    this.typeScript.push(
      `import { Sc${this.moduleName} } from 'app/schema/Sc${this.moduleName}';`
    );
    this.typeScript.push(`const EXCEL_TYPE =`);
    this.typeScript.push(
      `  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';`
    );
    this.typeScript.push(`@Component({`);
    this.typeScript.push(`  selector: 'app-bank-list',`);
    this.typeScript.push(`  templateUrl: './bank-list.component.html',`);
    this.typeScript.push(`  styleUrls: ['./bank-list.component.scss'],`);
    this.typeScript.push(`})`);
    this.typeScript.push(`export class ${this.moduleName}ListComponent`);
    this.typeScript.push(
      `  extends BaseListComponent<${this.moduleName}ListModel>`
    );
    this.typeScript.push(`  implements BaseListInterface`);
    this.typeScript.push(`{`);
    this.typeScript.push(
      `  @Input() set pageInfo(param: PageInformationModel) {`
    );
    this.typeScript.push(`    super.setPath(param);`);
    this.typeScript.push(`    this.service.setPath(param);`);
    this.typeScript.push(`  }`);

    const masterDropdownList: CellItemModel[] = this.masterList.filter(
      (value, index) => value.listViewOrdering != null && index != 0
    );
    masterDropdownList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.CAMEL,
        item.lookupTableName
      );
      const optionNameNonTable = getNameRemoveTable(optionName);
      if (item.dataType == DataType.UUID) {
        this.typeScript.push(
          `  ${optionNameNonTable}Option: SelectItems[] = [];`
        );
      }
    });
    this.typeScript.push(`  constructor(`);
    this.typeScript.push(`    private service: ${this.moduleName}Service,`);
    this.typeScript.push(
      `    public custom: ${this.moduleName}ListCustomComponent`
    );
    this.typeScript.push(`  ) {`);
    this.typeScript.push(`    super();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  addSingle(): any {}`);
    this.typeScript.push(
      `  // tslint:disable-next-line:use-lifecycle-interface`
    );
    this.typeScript.push(`  ngOnInit(): void {}`);
    this.typeScript.push(
      `  // tslint:disable-next-line:use-lifecycle-interface`
    );
    this.typeScript.push(`  ngAfterViewInit(): void {`);
    this.typeScript.push(`    this.checkAccessMode();`);
    this.typeScript.push(`    this.checkPageMode();`);
    this.typeScript.push(`    this.onEnumLoader();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(
      `  // tslint:disable-next-line:use-lifecycle-interface`
    );
    this.typeScript.push(`  ngOnDestroy(): void {}`);
    this.typeScript.push(`  checkPageMode(): void {}`);
    this.typeScript.push(`  onFilter(param: GridFilterModel): void {`);

    masterDropdownList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.CAMEL,
        item.lookupTableName
      );
      const optionNameNonTable = getNameRemoveTable(optionName);
      const dropdownMethod: string = getColumnName(
        StyleType.PASCAL,
        item.lookupTableName
      );
      const dropdownMethodNonTable: string = getNameRemoveTable(dropdownMethod);
      if (item.dataType == DataType.UUID) {
        this.typeScript.push(
          `    this.baseDropdown.get${dropdownMethodNonTable}DropDown(this.${optionNameNonTable}Option);`
        );
      }
    });
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onEnumLoader(): void {`);
    masterDropdownList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.CAMEL,
        item.lookupTableName
      );
      const optionNameNonTable = getNameRemoveTable(optionName);
      const dropdownMethod: string = getColumnName(
        StyleType.PASCAL,
        item.lookupTableName
      );
      const dropdownMethodNonTable: string = getNameRemoveTable(dropdownMethod);
      if (item.dataType == DataType.INT) {
        this.typeScript.push(
          `    this.baseDropdown.get${dropdownMethodNonTable}DropDown(this.${optionNameNonTable}Option);`
        );
      }
    });
    this.typeScript.push(`    this.setDataGridOption();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  checkAccessMode(): void {`);
    this.typeScript.push(
      `    super.checkAccessMode(this.accessService.getAccessRight());`
    );
    this.typeScript.push(`  }`);
    this.typeScript.push(`  setDataGridOption(): void {`);
    this.typeScript.push(`    this.option = new OptionModel();`);
    this.typeScript.push(`    this.option.canCreate = true;`);
    this.typeScript.push(`    this.option.canView = true;`);
    this.typeScript.push(`    this.option.canDelete = true;`);
    this.typeScript.push(`    this.option.key = '${this.primaryColumn}';`);
    this.typeScript.push(`    const columns: ColumnModel[] = [`);

    masterDropdownList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.CAMEL,
        item.lookupTableName
      );
      const optionNameNonTable = getNameRemoveTable(optionName);
      const dropdownMethod: string = getColumnName(
        StyleType.PASCAL,
        item.lookupTableName
      );
      const dropdownMethodNonTable: string = getNameRemoveTable(dropdownMethod);
      const columnNameUpper: string = getColumnName(
        StyleType.SNAKE,
        item.columnName
      );
      const columnType: string =
        item.lookupTableName == null
          ? ColumnType.MASTER
          : getColumnType(item.dataType);
      this.typeScript.push(`      {`);
      this.typeScript.push(`        label: 'LABEL.${columnNameUpper}',`);
      this.typeScript.push(`        textKey: '${columnNameUpper}',`);
      this.typeScript.push(`        type: ColumnType.${columnType},`);
      this.typeScript.push(`        tableName: Sc${this.moduleName}.tb_name,`);
      this.typeScript.push(`        visibility: true,`);
      this.typeScript.push(`        sorting: SortType.NONE,`);
      this.typeScript.push(`        operator: Operators.EQUAL,`);
      if (
        item.dataType == DataType.UUID ||
        (item.dataType == DataType.INT && item.lookupTableName != null)
      ) {
        this.typeScript.push(
          `        masterList: this.${optionNameNonTable}Option,`
        );
      }
      this.typeScript.push(`      },`);
    });
    this.typeScript.push(`    ];`);
    this.typeScript.push(`    this.option.columns = columns;`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  loadList(): void {`);
    this.typeScript.push(
      `    this.getList(this.searchParam).subscribe((result) => {`
    );
    this.typeScript.push(`      this.searchResult = result;`);
    this.typeScript.push(`    });`);
    this.typeScript.push(`  }`);
    this.typeScript.push(
      `  getList(search: SearchParameter): Observable<SearchResult<${this.moduleName}ListModel>> {`
    );
    this.typeScript.push(
      `    this.$baseGetList = this.service.get${this.moduleName}TableList(search);`
    );
    this.typeScript.push(`    return this.$baseGetList;`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onCreate(row?: RowIdentity): void {`);
    this.typeScript.push(`    super.onCreate(row);`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onView(row: RowIdentity): void {`);
    this.typeScript.push(`    super.onView(row);`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onDelete(row: RowIdentity): void {`);
    this.typeScript.push(
      `    super.onDelete(row, this.service.delete${this.moduleName}Table(row.uuid));`
    );
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onsearch(e: SearchParameter): void {`);
    this.typeScript.push(`    this.searchParam = e;`);
    this.typeScript.push(`    this.loadList();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`}`);
  }
}
