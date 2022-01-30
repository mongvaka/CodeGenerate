import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { CellItemModel } from "../../../model/cellModel";

export class ModulePageTemp extends BaseClass {
  masterList: CellItemModel[];
  template: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }

  getModulePageData(): string[] {
    this.template.push(
      `import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';`
    );
    this.template.push(`import { CommonModule } from '@angular/common';`);
    this.template.push(
      `import { SharedModule } from 'app/shared/shared.module';`
    );
    this.template.push(
      `import { FormsModule, ReactiveFormsModule } from '@angular/forms';`
    );
    this.template.push(
      `import { ${this.moduleName}RoutingModule } from './${this.moduleNameSnakeNonTable}-routing.module';`
    );
    this.template.push(``);
    this.template.push(`@NgModule({`);
    this.template.push(
      `  imports: [CommonModule, SharedModule, ${this.moduleName}RoutingModule],`
    );
    this.template.push(`  declarations: [],`);
    this.template.push(`  schemas: [CUSTOM_ELEMENTS_SCHEMA],`);
    this.template.push(`})`);
    this.template.push(`export class ${this.moduleName}PageModule {}`);

    return this.template;
  }
}
