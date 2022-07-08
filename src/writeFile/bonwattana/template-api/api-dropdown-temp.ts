import { CellItemModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class NestDropdownTemp extends BaseBoonwattanaClass {
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
    this.t.push(`    async demoDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        `);
    this.t.push(`        const buider = this.createQueryBuider(dto,repository)`);
    this.t.push(`        const data =await buider.getMany();`);
    this.t.push(`        const dropdownList:SelectItems[]=[]`);
    this.t.push(`        data.forEach(el => {`);
    this.t.push(`            const model:VwDemoDropdown = el as unknown as VwDemoDropdown`);
    this.t.push(`            const dropdownModel:SelectItems ={`);
    this.t.push(`                label:model.demoEmail,`);
    this.t.push(`                value:model.id,`);
    this.t.push(`                rowData:model`);
    this.t.push(`            }`);
    this.t.push(`            dropdownList.push(dropdownModel)`);
    this.t.push(`        });        `);
    this.t.push(`        return dropdownList;`);
    this.t.push(`    }`);
  }
}
