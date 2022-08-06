import { getNameRemoveTable, getPascalCase } from "./../../../shared/function";
import { CellItemModel } from "../../../model/cellModel";
import { ControlType, StyleType, DataType } from "../../../shared/constans";
import {
  getComponent,
  getConfig,
  getColumnName,
  removeFirstRow,
} from "../../../shared/function";
import { BaseClass } from "../../../shared/sharedClass/baseClass";

export class ItemComTemp extends BaseClass {
  private masterList: CellItemModel[];
  private masterGroupList: string[];
  private custom: string[];
  private typeScript: string[];
  private html: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = removeFirstRow(masterList);
    this.custom = [];
    this.typeScript = [];
    this.html = [];
    this.masterGroupList = this.masterList
      .map((item) => item.groupName)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
  getCustomComData(): string[] {
    this.initialCustomComData();
    return this.custom;
  }

  getHtmlComData(): string[] {
    this.initialHtmlComData();
    return this.html;
  }
  getTypeScriptComData(): string[] {
    this.initialTypeScriptComData();
    return this.typeScript;
  }
  //#region Html
  private initialHtmlComData() {
    this.html.push(`<div class="k-container-cm">`);
    this.html.push(`  <div class="k-w-max none-print k-bw">`);
    this.html.push(`    <div>`);
    this.html.push(`      <p *ngIf="!isUpdateMode">`);
    this.html.push(`        {{ "LABEL.${this.moduleNameUpper}" | translate }}`);
    this.html.push(
      `        <i class="fas fa-chevron-right"></i> {{ "LABEL.CREATE" | translate }}`
    );
    this.html.push(`      </p>`);
    this.html.push(`      <p *ngIf="isUpdateMode">`);
    this.html.push(`        {{ "LABEL.${this.moduleNameUpper}" | translate }}`);
    this.html.push(
      `        <i class="fas fa-chevron-right"></i> {{ "LABEL.EDIT" | translate }}`
    );
    this.html.push(`      </p>`);
    this.html.push(`    </div>`);
    this.html.push(`    <div class="kis-m-right-50"></div>`);
    this.html.push(`  </div>`);
    this.html.push(`  <div class="k-w-max kis-g-btn k-display-flex">`);
    this.html.push(`    <div>`);
    this.html.push(`      <kis-button`);
    this.html.push(`        inputId="CANCEL"`);
    this.html.push(`        icon="fas fa-chevron-circle-left"`);
    this.html.push(`        [label]="'LABEL.BACK' | translate"`);
    this.html.push(`        className="kis-btn-back"`);
    this.html.push(`        [kisConfig]="buttonConfig"`);
    this.html.push(`        (click)="onClose()"`);
    this.html.push(`      ></kis-button>`);
    this.html.push(`    </div>`);
    this.html.push(`    <div *ngIf="isUpdateMode" class="kis-m-right-50">`);
    this.html.push(`      <div class="kis-display-flex-space-between">`);
    this.html.push(`        <kis-tiered-menu`);
    this.html.push(`          [disabled]="true"`);
    this.html.push(`          inputId="INFO"`);
    this.html.push(`          class="kis-p"`);
    this.html.push(`          #info`);
    this.html.push(`          [listmenu]="infoItems"`);
    this.html.push(`          [label]="'LABEL.INFO' | translate"`);
    this.html.push(`          icon="fas fa-info-circle"`);
    this.html.push(`        ></kis-tiered-menu>`);
    this.html.push(`        <kis-tiered-menu`);
    this.html.push(`          [disabled]="true"`);
    this.html.push(`          inputId="ACTION"`);
    this.html.push(`          class="kis-p"`);
    this.html.push(`          #action`);
    this.html.push(`          [listmenu]="actionItems"`);
    this.html.push(`          [label]="'LABEL.ACTION' | translate"`);
    this.html.push(`          icon="fas fa-cog"`);
    this.html.push(`        ></kis-tiered-menu>`);
    this.html.push(`      </div>`);
    this.html.push(`    </div>`);
    this.html.push(`  </div>`);
    this.html.push(`  <br />`);

    this.addInputGroup();

    this.html.push(`  <div class="k-card">`);
    this.html.push(`    <div class="k-container-sm">`);
    this.html.push(`      <div class="k-col-8">`);
    this.html.push(`        <span class="h2"> System</span>`);
    this.html.push(`      </div>`);
    this.html.push(`      <br />`);
    this.html.push(`      <div class="p-d-flex p-flex-wrap">`);
    this.html.push(`        <div class="p-d-flex p-flex-column ele-box-w-25">`);
    this.html.push(
      `          <label>{{ "LABEL.CREATE_BY" | translate }} : </label>`
    );
    this.html.push(`          <kis-input-text`);
    this.html.push(`            inputId="CREATE_BY"`);
    this.html.push(`            [(kisModel)]="model.create_by"`);
    this.html.push(`            [kisConfig]="DEFAULT_INPUTTEXT"`);
    this.html.push(`            [disabled]="true"`);
    this.html.push(`          ></kis-input-text>`);
    this.html.push(`        </div>`);
    this.html.push(`        <div class="p-d-flex p-flex-column ele-box-w-25">`);
    this.html.push(
      `          <label>{{ "LABEL.CREATE_DATE" | translate }} : </label>`
    );
    this.html.push(`          <kis-input-text`);
    this.html.push(`            inputId="CREATE_DATE"`);
    this.html.push(`            [(kisModel)]="model.create_date"`);
    this.html.push(`            [kisConfig]="SYSTEM_INPUTTEXT"`);
    this.html.push(`            [disabled]="true"`);
    this.html.push(`          ></kis-input-text>`);
    this.html.push(`        </div>`);
    this.html.push(`        <div class="p-d-flex p-flex-column ele-box-w-25">`);
    this.html.push(
      `          <label>{{ "LABEL.UPDATE_BY" | translate }} : </label>`
    );
    this.html.push(`          <kis-input-text`);
    this.html.push(`            inputId="UPDATE_BY"`);
    this.html.push(`            [(kisModel)]="model.update_by"`);
    this.html.push(`            [kisConfig]="DEFAULT_INPUTTEXT"`);
    this.html.push(`            [disabled]="true"`);
    this.html.push(`          ></kis-input-text>`);
    this.html.push(`        </div>`);
    this.html.push(`        <div class="p-d-flex p-flex-column ele-box-w-25">`);
    this.html.push(
      `          <label>{{ "LABEL.UPDATE_DATE" | translate }} : </label>`
    );
    this.html.push(`          <kis-input-text`);
    this.html.push(`            inputId="UPDATE_DATE"`);
    this.html.push(`            [(kisModel)]="model.update_date"`);
    this.html.push(`            [kisConfig]="SYSTEM_INPUTTEXT"`);
    this.html.push(`            [disabled]="true"`);
    this.html.push(`          ></kis-input-text>`);
    this.html.push(`        </div>`);
    this.html.push(`      </div>`);
    this.html.push(`      <br />`);
    this.html.push(`    </div>`);
    this.html.push(`  </div>`);
    this.html.push(`  <br />`);
    this.html.push(`  <div class="k-display-block">`);
    this.html.push(`    <div class="k-layout-l">`);
    this.html.push(`      <kis-button`);
    this.html.push(`        inputId="CANCEL"`);
    this.html.push(`        [label]="'LABEL.CANCEL' | translate"`);
    this.html.push(`        className="kis-btn-outline-primary p-m-2"`);
    this.html.push(`        [kisConfig]="buttonConfig"`);
    this.html.push(`        (click)="onClose()"`);
    this.html.push(`      ></kis-button>`);
    this.html.push(`      <kis-button`);
    this.html.push(`        inputId="SAVE"`);
    this.html.push(`        [label]="'LABEL.SAVE' | translate"`);
    this.html.push(`        className="kis-btn-primary k-ml p-m-2"`);
    this.html.push(`        [kisConfig]="buttonConfig"`);
    this.html.push(`        (formValidate)="onSave($event)"`);
    this.html.push(`      ></kis-button>`);
    this.html.push(`    </div>`);
    this.html.push(`  </div>`);
    this.html.push(`</div>`);
  }
  private addInputGroup() {
    this.masterGroupList.forEach((groupName) => {
      let groupNameUpperCase: string = groupName.toUpperCase();
      this.html.push(`  <div class="k-card">`);
      this.html.push(`    <div class="k-container-sm">`);
      this.html.push(`      <div class="k-col-8">`);
      this.html.push(
        `        <span class="h2">{{ "LABEL.${groupNameUpperCase}" | translate }}</span>`
      );
      this.html.push(`      </div>`);
      this.html.push(`      <br />`);
      this.html.push(`      <div class="p-d-flex p-flex-wrap">`);

      this.addInputField(groupName);

      this.html.push(`      </div>`);
      this.html.push(`    </div>`);
      this.html.push(`    <br />`);
      this.html.push(`  </div>`);
      this.html.push(`    <br />`);
    });
  }
  private addInputField(groupName: string) {
    const listFiltered = this.masterList
      .filter((val) => val.groupName === groupName)
      .sort((n1, n2) => {
        if (n1.columnOrdering > n2.columnOrdering) {
          return 1;
        }

        if (n1.columnOrdering < n2.columnOrdering) {
          return -1;
        }
        return 0;
      });
    listFiltered.forEach((item) => {
      let labelUpperCase: string = item.columnLabel
        .toUpperCase()
        .replace(/\ /gi, "_");
      let columnSize: number = item.controlSize;
      let columnName: string = item.columnName;
      let componentType: string = getComponent(item.controlType);
      let config: string = getConfig(item.dataType);

      this.html.push(
        `        <div class="p-d-flex p-flex-column ele-box-w-${columnSize}">`
      );
      this.html.push(
        `          <label >{{ "LABEL.${labelUpperCase}" | translate }} : </label>`
      );
      this.html.push(`          <${componentType}`);
      this.html.push(`            inputId="${labelUpperCase}"`);
      this.html.push(`            [(kisModel)]="model.${columnName}"`);
      this.html.push(`            [kisConfig]="${config}"`);
      if (item.mandatory) {
        this.html.push(`            required`);
      }
      if (item.controlType == ControlType.DROPDOWN) {
        const optionName: string = getColumnName(
          StyleType.CAMEL,
          item.lookupTableName
        ).replace("Table", "");
        this.html.push(`            [options]="${optionName}Options"`);
      }

      this.html.push(`            `);
      this.html.push(`          ></${componentType}>`);
      this.html.push(`        </div>`);
    });
  }
  //#endregion Html

  private initialCustomComData() {
    const readonlyOnCreateList = this.masterList.filter(
      (val) => val.readonlyOnCreate
    );
    const readonlyOnViewList = this.masterList.filter((val) => val.readonly);
    this.custom.push(
      `import { ${this.moduleName}ItemModel } from 'app/models';`
    );
    this.custom.push(
      `import { isNullOrUndefOrEmptyGUID } from 'app/shared/functions/value.function';`
    );
    this.custom.push(`import {`);
    this.custom.push(`  BaseServiceModel,`);
    this.custom.push(`  FieldAccessing,`);
    this.custom.push(`} from 'app/shared/models/system_model';`);
    this.custom.push(`import { Observable, of } from 'rxjs';`);
    this.custom.push(`const firstGroup = [`);
    readonlyOnCreateList.forEach((item) => {
      const inputIdUpperCase = getColumnName(StyleType.UPPER, item.columnName);
      this.custom.push(`  '${inputIdUpperCase}',`);
    });
    this.custom.push(`];`);
    this.custom.push(`const secondGroup = [`);
    readonlyOnViewList.forEach((item) => {
      const inputIdUpperCase = getColumnName(StyleType.UPPER, item.columnName);
      this.custom.push(`  '${inputIdUpperCase}',`);
    });

    this.custom.push(`];`);
    this.custom.push(`export class ${this.moduleName}ItemCustomComponent {`);
    this.custom.push(`  baseService: BaseServiceModel<any>;`);
    this.custom.push(
      `  getFieldAccessing(model: ${this.moduleName}ItemModel): Observable<FieldAccessing[]> {`
    );
    this.custom.push(`    const fieldAccessing: FieldAccessing[] = [];`);
    this.custom.push(
      `    if (isNullOrUndefOrEmptyGUID(model.${this.primaryColumn})) {`
    );
    this.custom.push(
      `      fieldAccessing.push({ filedIds: firstGroup, readonly: true });`
    );
    this.custom.push(`    } else {`);
    this.custom.push(
      `      fieldAccessing.push({ filedIds: secondGroup, readonly: true });`
    );
    this.custom.push(`    }`);
    this.custom.push(`    return of(fieldAccessing);`);
    this.custom.push(`  }`);
    this.custom.push(`  getDataValidation(): Observable<boolean> {`);
    this.custom.push(`    return of(true);`);
    this.custom.push(`  }`);
    this.custom.push(`  getPageAccessRight(`);
    this.custom.push(`    canCreate: boolean,`);
    this.custom.push(`    canUpdate: boolean,`);
    this.custom.push(`    model: ${this.moduleName}ItemModel`);
    this.custom.push(`  ): Observable<boolean> {`);
    this.custom.push(
      `    const accessright = isNullOrUndefOrEmptyGUID(model.${this.primaryColumn})`
    );
    this.custom.push(`      ? canCreate`);
    this.custom.push(`      : canUpdate;`);
    this.custom.push(`    const accessLogic = true;`);
    this.custom.push(`    return of(!(accessLogic && accessright));`);
    this.custom.push(`  }`);
    this.custom.push(
      `  getInitialData(): Observable<${this.moduleName}ItemModel> {`
    );
    this.custom.push(`    const model = new ${this.moduleName}ItemModel();`);
    this.custom.push(`    return of(model);`);
    this.custom.push(`  }`);
    this.custom.push(`}`);
  }
  private initialTypeScriptComData() {
    const dropdownList: CellItemModel[] = this.masterList.filter(
      (item) => item.controlType == ControlType.DROPDOWN
    );
    const dropdownEnumList: CellItemModel[] = this.masterList.filter(
      (item) =>
        item.controlType == ControlType.DROPDOWN &&
        item.dataType == DataType.INT
    );
    const dropdownTableList: CellItemModel[] = this.masterList.filter(
      (item) =>
        item.controlType == ControlType.DROPDOWN &&
        item.dataType == DataType.UUID
    );
    this.typeScript.push(`import { Component, Input } from '@angular/core';`);
    this.typeScript.push(`import { ActivatedRoute } from '@angular/router';`);
    this.typeScript.push(
      `import { ${this.moduleName}ItemModel } from 'app/models';`
    );
    this.typeScript.push(
      `import { BaseItemInterface } from 'app/core/interfaces/base-item/base-item.interface';`
    );
    this.typeScript.push(
      `import { BaseItemComponent } from 'app/core/components/base-item/base-item.component';`
    );
    this.typeScript.push(`import {`);
    this.typeScript.push(`  FormValidationModel,`);
    this.typeScript.push(`  PageInformationModel,`);
    this.typeScript.push(`  SelectItems,`);
    this.typeScript.push(`} from 'app/shared/models/system_model';`);
    this.typeScript.push(
      `import { ${this.moduleName}Service } from '../${this.moduleNameSnake}.service';`
    );
    this.typeScript.push(`import {`);
    this.typeScript.push(`  isNullOrUndefined,`);
    this.typeScript.push(`  isUpdateMode,`);
    this.typeScript.push(`} from 'app/shared/functions/value.function';`);
    this.typeScript.push(
      `import { Observable } from 'rxjs/internal/Observable';`
    );
    this.typeScript.push(
      `import { forkJoin } from 'rxjs/internal/observable/forkJoin';`
    );
    this.typeScript.push(
      `import { modelRegister } from 'app/shared/functions/model.function';`
    );
    this.typeScript.push(
      `import { ${this.moduleName}ItemCustomComponent } from './${this.moduleNameSnake}-item-custom.component';`
    );
    this.typeScript.push(`@Component({`);
    this.typeScript.push(`  selector: 'app-${this.moduleNameSnake}-item',`);
    this.typeScript.push(
      `  templateUrl: './${this.moduleNameSnake}-item.component.html',`
    );
    this.typeScript.push(
      `  styleUrls: ['./${this.moduleNameSnake}-item.component.scss'],`
    );
    this.typeScript.push(`})`);
    this.typeScript.push(`export class ${this.moduleName}ItemComponent`);
    this.typeScript.push(
      `  extends BaseItemComponent<${this.moduleName}ItemModel>`
    );
    this.typeScript.push(`  implements BaseItemInterface`);
    this.typeScript.push(`{`);
    this.typeScript.push(
      `  @Input() set pageInfo(param: PageInformationModel) {`
    );
    this.typeScript.push(`    super.setPath(param);`);
    this.typeScript.push(`    this.service.setPath(param);`);
    this.typeScript.push(`  }`);
    dropdownList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.CAMEL,
        item.lookupTableName
      );
      this.typeScript.push(`  ${optionName}Options: SelectItems[] = [];`);
    });
    this.typeScript.push(`  constructor(`);
    this.typeScript.push(`    private service: ${this.moduleName}Service,`);
    this.typeScript.push(`    private currentActivatedRoute: ActivatedRoute,`);
    this.typeScript.push(
      `    public custom: ${this.moduleName}ItemCustomComponent`
    );
    this.typeScript.push(`  ) {`);
    this.typeScript.push(`    super();`);
    this.typeScript.push(`    this.custom.baseService = this.baseService;`);
    this.typeScript.push(
      `    this.id = this.currentActivatedRoute.snapshot.params.id;`
    );
    this.typeScript.push(`  }`);
    this.typeScript.push(`  setActionOptions(model?: any): void {`);
    this.typeScript.push(`    // super.setActionOptions();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  setInfoOptions(model?: any): void {`);
    this.typeScript.push(`    // super.setInfoOptions();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(
      `  // tslint:disable-next-line: use-lifecycle-interface`
    );
    this.typeScript.push(`  ngOnInit(): void {}`);
    this.typeScript.push(
      ` // tslint:disable-next-line: use-lifecycle-interface`
    );
    this.typeScript.push(`  ngOnDestroy(): void {}`);
    this.typeScript.push(
      `  // tslint:disable-next-line: use-lifecycle-interface`
    );
    this.typeScript.push(`  ngAfterViewInit(): void {`);
    this.typeScript.push(`    this.checkAccessMode();`);
    this.typeScript.push(`    this.checkPageMode();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  checkPageMode(): void {`);
    this.typeScript.push(`    if (isUpdateMode(this.id)) {`);
    this.typeScript.push(`      this.isUpdateMode = true;`);
    this.typeScript.push(`      this.setInitialUpdatingData();`);
    this.typeScript.push(`    } else {`);
    this.typeScript.push(`      this.isUpdateMode = false;`);
    this.typeScript.push(`      this.setInitialCreatingData();`);
    this.typeScript.push(`    }`);
    this.typeScript.push(`    this.onEnumLoader();`);
    this.typeScript.push(`    this.getGroups();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  checkAccessMode(): void {`);
    this.typeScript.push(`    super.checkAccessMode(`);
    this.typeScript.push(
      `      this.accessService.getNestedComponentAccessRight(false)`
    );
    this.typeScript.push(`    );`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onEnumLoader(): void {`);

    dropdownEnumList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.CAMEL,
        item.lookupTableName
      ).replace("Table", "");
      const lookupTableName: string = getNameRemoveTable(item.lookupTableName);
      const dropdownName: string = getPascalCase(lookupTableName);
      this.typeScript.push(
        `    this.baseDropdown.get${dropdownName}Dropdown(this.${optionName}Options);`
      );
    });

    this.typeScript.push(`  }`);
    this.typeScript.push(
      `  getById(): Observable<${this.moduleName}ItemModel> {`
    );
    this.typeScript.push(
      `    return this.service.get${this.moduleName}TableById(this.id);`
    );
    this.typeScript.push(`  }`);
    this.typeScript.push(
      `  getInitialData(): Observable<${this.moduleName}ItemModel> {`
    );
    this.typeScript.push(`    return this.custom.getInitialData();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  setInitialCreatingData(): void {`);
    this.typeScript.push(`    this.getInitialData().subscribe((result) => {`);
    this.typeScript.push(`      this.model = result;`);
    this.typeScript.push(`      this.onAsyncRunner(result);`);
    this.typeScript.push(`      super.setDefaultValueSystemFields();`);
    this.typeScript.push(`    });`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  setInitialUpdatingData(): void {`);
    this.typeScript.push(`    this.getById().subscribe(`);
    this.typeScript.push(`      (result) => {`);
    this.typeScript.push(`        this.model = result;`);
    this.typeScript.push(`        this.setUpdateUser(result);`);
    this.typeScript.push(`        this.onAsyncRunner(result);`);
    this.typeScript.push(`        this.setInfoOptions(result);`);
    this.typeScript.push(`        this.setActionOptions(result);`);
    this.typeScript.push(`      },`);
    this.typeScript.push(`      (error) => {`);
    this.typeScript.push(
      `        this.notificationService.showErrorMessageFromResponse(error);`
    );
    this.typeScript.push(`      }`);
    this.typeScript.push(`    );`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onAsyncRunner(model?: any): void {`);
    this.typeScript.push(`    forkJoin(`);

    dropdownTableList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.PASCAL,
        item.lookupTableName
      );
      const optionNameNonTable = getNameRemoveTable(optionName);

      this.typeScript.push(
        `      this.baseDropdown.get${optionNameNonTable}Dropdown(),`
      );
    });

    this.typeScript.push(`    ).subscribe(`);
    this.typeScript.push(`      ([`);
    dropdownTableList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.CAMEL,
        item.lookupTableName
      ).replace("Table", "");

      this.typeScript.push(`        ${optionName},`);
    });

    this.typeScript.push(`      ]) => {`);
    dropdownTableList.forEach((item) => {
      const optionName: string = getColumnName(
        StyleType.CAMEL,
        item.lookupTableName
      ).replace("Table", "");

      this.typeScript.push(
        `        this.${optionName}Options = ${optionName};`
      );
    });

    this.typeScript.push(`        if (!isNullOrUndefined(model)) {`);
    this.typeScript.push(`          this.model = model;`);
    this.typeScript.push(`          modelRegister(this.model);`);
    this.typeScript.push(`        }`);
    this.typeScript.push(`        this.setFieldAccessing();`);
    this.typeScript.push(`      },`);
    this.typeScript.push(`      (error) => {`);
    this.typeScript.push(
      `        this.notificationService.showErrorMessageFromResponse(error);`
    );
    this.typeScript.push(`      }`);
    this.typeScript.push(`    );`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  setFieldAccessing(): void {`);
    this.typeScript.push(`    this.custom`);
    this.typeScript.push(`      .getPageAccessRight(`);
    this.typeScript.push(`        super.getCanCreate(),`);
    this.typeScript.push(`        super.getCanUpdate(),`);
    this.typeScript.push(`        this.model`);
    this.typeScript.push(`      )`);
    this.typeScript.push(`      .subscribe((res) => {`);
    this.typeScript.push(`        this.isView = res;`);
    this.typeScript.push(`      });`);
    this.typeScript.push(
      `    this.custom.getFieldAccessing(this.model).subscribe((res) => {`
    );
    this.typeScript.push(`      super.setBaseFieldAccessing(res);`);
    this.typeScript.push(`    });`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onSave(validation: FormValidationModel): void {`);
    this.typeScript.push(`    this.getDataValidation().subscribe((res) => {`);
    this.typeScript.push(`      if (res && validation.isValid) {`);
    this.typeScript.push(`        this.onSubmit(true);`);
    this.typeScript.push(`      }`);
    this.typeScript.push(`    });`);
    this.typeScript.push(`  }`);
    this.typeScript.push(
      `  onSaveAndClose(validation: FormValidationModel): void {`
    );
    this.typeScript.push(`    this.getDataValidation().subscribe((res) => {`);
    this.typeScript.push(`      if (res && validation.isValid) {`);
    this.typeScript.push(`        this.onSubmit(true);`);
    this.typeScript.push(`      }`);
    this.typeScript.push(`    });`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  onSubmit(isColsing: boolean): void {`);
    this.typeScript.push(`    if (this.isUpdateMode) {`);
    this.typeScript.push(
      `      super.onUpdate(this.service.edit${this.moduleName}Table(this.model), isColsing);`
    );
    this.typeScript.push(`    } else {`);
    this.typeScript.push(
      `      super.onCreate(this.service.create${this.moduleName}Table(this.model), isColsing);`
    );
    this.typeScript.push(`    }`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  getDataValidation(): Observable<boolean> {`);
    this.typeScript.push(`    return this.custom.getDataValidation();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`}`);
  }
}
