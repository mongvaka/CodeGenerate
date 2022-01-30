import { BaseClass } from "../../../shared/sharedClass/baseClass";
import { CellItemModel } from "../../../model/cellModel";

export class RoutingPageTemp extends BaseClass {
  masterList: CellItemModel[];
  template: string[];

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getRountingData(): string[] {
    this.template.push(`import { NgModule } from '@angular/core';`);
    this.template.push(
      `import { RouterModule, Routes } from '@angular/router';`
    );
    this.template.push(``);
    this.template.push(`const routes: Routes = [`);
    this.template.push(`  {`);
    this.template.push(`    path: '${this.moduleName.toLocaleLowerCase()}',`);
    this.template.push(`    loadChildren: () =>`);
    this.template.push(
      `      import('./${this.moduleNameSnakeNonTable}/${this.moduleNameSnakeNonTable}.module').then(`
    );
    this.template.push(`        (m) => m.${this.moduleName}PageModule`);
    this.template.push(`      ),`);
    this.template.push(`  },`);
    this.template.push(`];`);
    this.template.push(`@NgModule({`);
    this.template.push(`  imports: [RouterModule.forChild(routes)],`);
    this.template.push(`  exports: [RouterModule],`);
    this.template.push(`})`);
    this.template.push(`export class ${this.moduleName}RoutingModule {}`);
    this.template.push(`import { NgModule } from '@angular/core';`);
    this.template.push(
      `import { RouterModule, Routes } from '@angular/router';`
    );
    this.template.push(``);
    this.template.push(`const routes: Routes = [`);
    this.template.push(`  {`);
    this.template.push(
      `    path: '${this.moduleNameSnakeNonTable.toLocaleLowerCase()}',`
    );
    this.template.push(`    loadChildren: () =>`);
    this.template.push(
      `      import('./${this.moduleNameSnakeNonTable}/${this.moduleNameSnakeNonTable}.module').then(`
    );
    this.template.push(`        (m) => m.${this.moduleName}PageModule`);
    this.template.push(`      ),`);
    this.template.push(`  },`);
    this.template.push(`];`);
    this.template.push(`@NgModule({`);
    this.template.push(`  imports: [RouterModule.forChild(routes)],`);
    this.template.push(`  exports: [RouterModule],`);
    this.template.push(`})`);
    this.template.push(`export class ${this.moduleName}RoutingModule {}`);

    return this.template;
  }
}
