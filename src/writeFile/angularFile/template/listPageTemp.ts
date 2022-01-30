import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { CellItemModel } from "../../../model/cellModel";

export class ListPageTemp extends BaseClass {
  masterList: CellItemModel[];
  typeScript: string[];
  html: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.typeScript = [];
    this.html = [];
  }
  getHtmlPageData(): string[] {
    this.initialHtmlPageData();
    return this.html;
  }
  private initialHtmlPageData() {
    this.html.push(`<app-${this.moduleNameSnakeNonTable}-list`);
    this.html.push(`  [pageInfo]="pageInfo"`);
    this.html.push(`  [gridOption]="option"`);
    this.html.push(`></app-bank-list>`);
  }
  getTypeScriptPageData(): string[] {
    this.initialTypeScriptPageData();
    return this.typeScript;
  }
  initialTypeScriptPageData() {
    this.typeScript.push(`import { Component, OnInit } from '@angular/core';`);
    this.typeScript.push(
      `import { UIControllerService } from 'app/core/services/uiController.service';`
    );
    this.typeScript.push(
      `import { ROUTE_MASTER_GEN } from 'app/shared/constants/constant_gen';`
    );
    this.typeScript.push(`import {`);
    this.typeScript.push(`  ColumnModel,`);
    this.typeScript.push(`  OptionModel,`);
    this.typeScript.push(`  PageInformationModel,`);
    this.typeScript.push(
      `} from 'app/shared/models/system_model/miscellaneous_model';`
    );
    this.typeScript.push(`@Component({`);
    this.typeScript.push(
      `  selector: 'app-${this.moduleNameSnakeNonTable}-list-page',`
    );
    this.typeScript.push(
      `  templateUrl: './${this.moduleNameSnakeNonTable}-list-page.html',`
    );
    this.typeScript.push(
      `  styleUrls: ['./${this.moduleNameSnakeNonTable}-list-page.scss'],`
    );
    this.typeScript.push(`})`);
    this.typeScript.push(
      `export class ${this.moduleName}ListPage implements OnInit {`
    );
    this.typeScript.push(`  pageInfo: PageInformationModel;`);
    this.typeScript.push(`  option: OptionModel;`);
    this.typeScript.push(
      `  constructor(public uiService: UIControllerService) {}`
    );
    this.typeScript.push(`  ngOnInit(): void {`);
    this.typeScript.push(`    this.setOption();`);
    this.typeScript.push(`    this.setPath();`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  setOption(): void {`);
    this.typeScript.push(`    this.option = new OptionModel();`);
    this.typeScript.push(`    this.option.key = '${this.primaryColumn}';`);
    this.typeScript.push(`    const columns: ColumnModel[] = [];`);
    this.typeScript.push(`    this.option.columns = columns;`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`  setPath(): void {`);
    this.typeScript.push(`    this.pageInfo = {`);
    this.typeScript.push(
      `      pagePath: ROUTE_MASTER_GEN.${this.moduleNameUpper},`
    );
    this.typeScript.push(`      servicePath: '/${this.moduleName}',`);
    this.typeScript.push(`    };`);
    this.typeScript.push(`  }`);
    this.typeScript.push(`}`);
  }
}
