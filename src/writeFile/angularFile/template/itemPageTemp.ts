import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { CellItemModel } from "../../../model/cellModel";

export class ItemPageTemp extends BaseClass {
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
    this.html.push(`<app-bank-item [pageInfo]="pageInfo"></app-bank-item>`);
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
      `import { ROUTE_MASTER_GEN } from 'app/shared/constants';`
    );
    this.typeScript.push(
      `import { PageInformationModel } from 'app/shared/models/system_model';`
    );
    this.typeScript.push(`@Component({`);
    this.typeScript.push(
      `  selector: 'app-${this.moduleNameSnakeNonTable}-item-page',`
    );
    this.typeScript.push(
      `  templateUrl: './${this.moduleNameSnakeNonTable}-item-page.html',`
    );
    this.typeScript.push(
      `  styleUrls: ['./${this.moduleNameSnakeNonTable}-item-page.scss'],`
    );
    this.typeScript.push(`})`);
    this.typeScript.push(`// tslint:disable-next-line: component-class-suffix`);
    this.typeScript.push(
      `export class ${this.moduleName}ItemPage implements OnInit {`
    );
    this.typeScript.push(`  pageInfo: PageInformationModel;`);
    this.typeScript.push(`  // masterRoute = this.uiService.getMasterRoute();`);
    this.typeScript.push(
      `  constructor(public uiService: UIControllerService) {}`
    );
    this.typeScript.push(`  ngOnInit(): void {`);
    this.typeScript.push(`    this.setPath();`);
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
