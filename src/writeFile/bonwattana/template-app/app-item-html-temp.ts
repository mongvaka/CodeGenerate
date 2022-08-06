import { InputDataType, InputWidget } from "../../../shared/constans";
import { CellBwModel } from "../../../model/cellModel";
import { BaseBoonwattanaClass } from "../base/base-boonwattana-class";
export class AppItemHtmlTemp extends BaseBoonwattanaClass {
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
    this.t.push(`<div class="itemCard">`);
    this.t.push(`  <div>`);
    this.t.push(`    <div>`);
    this.t.push(`      <p class="title-item">{{"MODULE.${this.getUpperCase(this.moduleName)}"|translate}}</p>`);
    this.t.push(`    </div>`);
    this.t.push(`  </div>`);
    this.t.push(`  <div class="customCard">`);

    this.groups.forEach(el=>{
      const groupName = this.getUpperCase(el.groupName)
      this.t.push(`    <button class="group">{{"GROUP.${groupName}"|translate}}</button>`);
      this.t.push(`    <div class="grid p-fluid form ">`);

      el.child.forEach(en=>{
        const colSize = this.getColsize(en.INPUT_TYPE)
        const inputType = this.getInputType(en.INPUT_TYPE)
        const isEmail = this.getIsEmail(en.INPUT_TYPE)
        const isRequired = this.getIsRequired(en.REQUIRED)
        const isReadonly = this.getIsReadonly(en.READONLY_ON_UPDATE)
        const fieldId = this.getUpperCase(en.COLUMN_NAME)
        const fieldLabel = this.getUpperCase(en.COLUMN_NAME)
        const modelField = this.getCamelCase(en.COLUMN_NAME)
        const modelOption = this.getModelOption(en.INPUT_TYPE,en.COLUMN_NAME)
        const viewValue = this.getModelViewValue(en.INPUT_TYPE,en.COLUMN_NAME)
        this.t.push(`      <div class="field col-6 md:col-${colSize}">`);
        this.t.push(`        <${inputType} setId="${fieldId}" setLabel="LABEL.${fieldLabel}" [(setModel)]=model.${modelField} ${isEmail} ${isReadonly} ${isRequired} ${modelOption} ${viewValue}>`);
        this.t.push(`        </${inputType}>`);
        this.t.push(`      </div>`);
      })
      this.t.push(`    </div>`);
    })

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
  
  getModelViewValue(inputType: string,conlumnName:string) {
    const nameCamel = this.getCamelCase(conlumnName)
    const viewValue = nameCamel.replace('Id','Value')
    if(inputType == InputDataType.FOREIGN){
      return `[setViewValue]=model.${viewValue}>`
    }else{
      return ''
    }
  }
  getModelOption(inputType: string,conlumnName:string) {
    const optionName = this.getCamelCase(conlumnName).replace('Id','')
    if(inputType == InputDataType.ENUM){
      return `[setSelectOption]=${optionName}Dropdown`
    }else if(inputType == InputDataType.FOREIGN){
      return `[setSelectOption]=${optionName}Dropdown`
    }else{
      return ''
    }
  }
  getIsReadonly(isReadonly: boolean) {
    if(isReadonly){
      return '[setReadonly]="true"'
    }else{
      return ''
    }
  }
  getIsRequired(isRrequired: boolean) {
    if(isRrequired){
      return '[setRequired]="true"'
    }else{
      return ''
    }
  }
  getIsEmail(inputType: string) {
    if(inputType == InputDataType.EMAIL){
      return '[setEmail]="true"'
    }else{
      return ''
    }
  }
  getInputType(inputType: string) {
    switch(inputType){
      case InputDataType.BOOLEAN :
        return InputWidget.BOOLEAN
        case InputDataType.DATE :
          return InputWidget.DATE
          case InputDataType.DECIMAL0 :
          return InputWidget.DECIMAL0
          case InputDataType.DECIMAL2 :
          return InputWidget.DECIMAL2
          case InputDataType.DECIMAL4 :
          return InputWidget.DECIMAL4
          case InputDataType.TIME :
          return InputWidget.TIME
          case InputDataType.EMAIL :
          return InputWidget.EMAIL
          case InputDataType.ENUM :
          return InputWidget.ENUM
          case InputDataType.FOREIGN :
          return InputWidget.FOREIGN
          case InputDataType.LONG_TEXT :
          return InputWidget.LONG_TEXT
          case InputDataType.PHONE :
          return InputWidget.PHONE
          case InputDataType.SHOT_TEXT :
          return InputWidget.SHOT_TEXT
          default :
          return InputWidget.SHOT_TEXT;
    }  }
  getColsize(inputType: string) {
    const defualtValue = '3'
    switch(inputType){
      case InputDataType.BOOLEAN :
        return defualtValue
        case InputDataType.DATE :
          return defualtValue
          case InputDataType.DECIMAL0 :
          return defualtValue
          case InputDataType.DECIMAL2 :
          return defualtValue
          case InputDataType.DECIMAL4 :
          return defualtValue
          case InputDataType.TIME :
          return defualtValue
          case InputDataType.EMAIL :
          return defualtValue
          case InputDataType.ENUM :
          return defualtValue
          case InputDataType.FOREIGN :
          return defualtValue
          case InputDataType.LONG_TEXT :
          return '6'
          case InputDataType.PHONE :
          return defualtValue
          case InputDataType.SHOT_TEXT :
          return defualtValue
          default :
          return defualtValue;
    }
  }
}
