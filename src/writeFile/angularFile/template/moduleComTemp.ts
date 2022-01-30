import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { CellItemModel } from "../../../model/cellModel";

export class ModuleComTemp extends BaseClass {
  masterList: CellItemModel[];
  template: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getModuleComponentData(): string[] {
    this.template.push(
      `import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';`
    );
    this.template.push(`import { CommonModule } from '@angular/common';`);
    this.template.push(
      `import { FormsModule, ReactiveFormsModule } from '@angular/forms';`
    );
    this.template.push(
      `import { SharedModule } from 'app/shared/shared.module';`
    );
    this.template.push(
      `import { ${this.moduleName}ListComponent } from './${this.moduleNameSnakeNonTable}-list.component/${this.moduleNameSnakeNonTable}-list.component';`
    );
    this.template.push(
      `import { ${this.moduleName}ItemComponent } from './${this.moduleNameSnakeNonTable}-item.component/${this.moduleNameSnakeNonTable}-item.component';`
    );
    this.template.push(
      `import { ${this.moduleName}ListCustomComponent } from './${this.moduleNameSnakeNonTable}-list.component/${this.moduleNameSnakeNonTable}-list-custom.component';`
    );
    this.template.push(
      `import { ${this.moduleName}ItemCustomComponent } from './${this.moduleNameSnakeNonTable}-item.component/${this.moduleNameSnakeNonTable}-item-custom.component';`
    );
    this.template.push(`@NgModule({`);
    this.template.push(
      `  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],`
    );
    this.template.push(
      `  declarations: [${this.moduleName}ListComponent, ${this.moduleName}ItemComponent],`
    );
    this.template.push(
      `  providers: [${this.moduleName}ListCustomComponent, ${this.moduleName}ItemCustomComponent],`
    );
    this.template.push(`  schemas: [CUSTOM_ELEMENTS_SCHEMA],`);
    this.template.push(
      `  exports: [${this.moduleName}ListComponent, ${this.moduleName}ItemComponent],`
    );
    this.template.push(`})`);
    this.template.push(`export class ${this.moduleName}ComponentModule {}`);

    return this.template;
  }
}
