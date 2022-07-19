import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class ApiDropdownTemp extends BaseBoonwattanaClass {
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
    this.t.push(`    async ${this.camelCase}Dropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        `);
    this.t.push(`        const buider = this.createQueryBuider(dto,repository)`);
    this.t.push(`        const data =await buider.getMany();`);
    this.t.push(`        const dropdownList:SelectItems[]=[]`);
    this.t.push(`        data.forEach(el => {`);
    this.t.push(`            const model:Vw${this.pascalCae}Dropdown = el as unknown as Vw${this.pascalCae}Dropdown`);
    this.t.push(`            const dropdownModel:SelectItems ={`);
    this.t.push(`                label:model.label,`);
    this.t.push(`                value:model.value,`);
    this.t.push(`                rowData:model`);
    this.t.push(`            }`);
    this.t.push(`            dropdownList.push(dropdownModel)`);
    this.t.push(`        });        `);
    this.t.push(`        return dropdownList;`);
    this.t.push(`    }`);
  }
}
