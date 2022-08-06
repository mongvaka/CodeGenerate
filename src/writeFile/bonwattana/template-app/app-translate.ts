import { InputDataType } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppTranslateTemp extends BaseBoonwattanaClass {
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
    const groups:{label:string,value:string}[] = []
    const module:{label:string,value:string}[] = []
    const label:{label:string,value:string}[] = []
    this.masterList.forEach(el=>{
      let indexGroup  = 0
      groups.forEach(en=>{
        if(en.label == el.GROUP_NAME){
          indexGroup = 1
        }
      })
      if(indexGroup == 0){
        groups.push({label:el.GROUP_NAME,value:el.GROUP_LABEL})
      }
      indexGroup =0

      let indeModule = 0
      module.forEach(en=>{
        if(en.label == el.TABLE_NAME){
          indeModule = 1
        }
      })
      if(indeModule == 0){
        module.push({label:el.TABLE_NAME,value:el.TABLE_LABEL})
      }
      indeModule = 0

      let indexLabel = 0
      label.forEach(en=>{
        if(en.label == el.COLUMN_NAME){
          indexLabel = 1
        }
      })
      if(indexLabel == 0){
        label.push({label:el.COLUMN_NAME,value:el.COLUMN_LABEL})
      }
      indexLabel = 0
    }) 
    this.t.push(`//GROUP`);
    groups.forEach(it=>{
      this.t.push(`        "${it.label}":"${it.value}",`);
    })
    this.t.push(`//END GROUP`);
    this.t.push(` `);
    this.t.push(` `);
    this.t.push(`//MODULE`);
    module.forEach(it=>{
      const MODULE = this.getUpperCase(it.label)
      this.t.push(`        "${MODULE}":"${it.value}",`);
    })
    this.t.push(`//END MODULE`);
    this.t.push(` `);
    this.t.push(` `);
    this.t.push(`//LABEL`);
    label.forEach(it=>{
      const LABEL = this.getUpperCase(it.label)

      this.t.push(`        "${LABEL}":"${it.value}",`);
    })
    this.t.push(`//END LABEL`);
  }
}
