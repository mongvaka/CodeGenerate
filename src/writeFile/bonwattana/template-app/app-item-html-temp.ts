import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppItemHtmlTemp extends BaseBoonwattanaClass {
  private masterList: CellItemModel[];
  private t: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.t = [];
  }
  getTemplate() {
    this.initialDataItemPage();
    return this.t;
  }
  private initialDataItemPage() {
    this.t.push(`<div class="itemCard">`);
    this.t.push(`  <div>`);
    this.t.push(`    <div>`);
    this.t.push(`      <p class="title-item">{{"MODULE.DEMO"|translate}}</p>`);
    this.t.push(`    </div>`);
    this.t.push(`  </div>`);
    this.t.push(`  <div class="customCard">`);
    this.t.push(`    <button class="group">{{"MODULE.GROUP_NAME"|translate}}</button>`);
    this.t.push(`    <div class="grid p-fluid form ">`);
    this.t.push(`      <div class="field col-6 md:col-3">`);
    this.t.push(`        <m-input-text setId="DEMO_EMAIL" setLabel="LABEL.DEMO_EMAIL" [(setModel)]=model.demoEmail [setEmail]="true">`);
    this.t.push(`        </m-input-text>`);
    this.t.push(`      </div>`);
    this.t.push(`      <div class="field col-6 md:col-4">`);
    this.t.push(`        <m-input-number setId="DEMO_NUMBER" setLabel="LABEL.DEMO_NUMBER" [(setModel)]=model.demoNumber>`);
    this.t.push(`        </m-input-number>`);
    this.t.push(`      </div>`);
    this.t.push(`      <div class="field col-6 md:col-5">`);
    this.t.push(`        <m-calendar setId="DEMO_DATE" setLabel="LABEL.DEMO_DATE" [(setModel)]=model.demoDate>`);
    this.t.push(`        </m-calendar>`);
    this.t.push(`      </div>`);
    this.t.push(`      <div class="field col-6 md:col-2">`);
    this.t.push(`        <m-dropdown setId="DEMO_ENUM" setLabel="LABEL.DEMO_ENUM" [(setModel)]=model.demoEnum`);
    this.t.push(`          [setSelectOption]=gendarDropdown>`);
    this.t.push(`        </m-dropdown>`);
    this.t.push(``);
    this.t.push(`      </div>`);
    this.t.push(``);
    this.t.push(`      <div class="field col-6 md:col-3">`);
    this.t.push(`        <m-calendar setId="DEMO_DATE" setLabel="LABEL.DEMO_DATE" [(setModel)]=model.demoDate>`);
    this.t.push(`        </m-calendar>`);
    this.t.push(`      </div>`);
    this.t.push(`      <div class="field col-6 md:col-3">`);
    this.t.push(`        <m-dropdown setId="DEMO_ENUM" setLabel="LABEL.DEMO_ENUM" [(setModel)]=model.demoEnum`);
    this.t.push(`          [setSelectOption]=gendarDropdown>`);
    this.t.push(`        </m-dropdown>`);
    this.t.push(`      </div>`);
    this.t.push(``);
    this.t.push(`      <div class="field col-6 md:col-3">`);
    this.t.push(`        <m-switch setId="DEMO_ENUM" setLabel="LABEL.DEMO_ENUM" [(setModel)]=model.isActive>`);
    this.t.push(`        </m-switch>`);
    this.t.push(`      </div>`);
    this.t.push(`    </div>`);
    this.t.push(`  </div>`);
    this.t.push(`  <div class="grid p-fluid">`);
    this.t.push(`    <div class="field col-6 md:col-2">`);
    this.t.push(`      <m-button setLabel="LABEL.BACK" (onClick)="onBack()">`);
    this.t.push(`      </m-button>`);
    this.t.push(`    </div>`);
    this.t.push(`    <div class="field col-6 md:col-2">`);
    this.t.push(`      <m-button setLabel="LABEL.SAVE" (onClick)="onSave()">`);
    this.t.push(`      </m-button>`);
    this.t.push(`    </div>`);
    this.t.push(`  </div>`);
    this.t.push(`</div>`);
  }
}
