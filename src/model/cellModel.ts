export class CellItemModel {
  tableName: string;
  columnName: string;
  dataType: string;
  unboundField: boolean;
  unboundDisplay: boolean;
  lookupTableName: string;
  lookupControl: string;
  readonly: boolean;
  readonlyOnCreate: boolean;
  lookupOrdering: number;
  controlSize: number;
  controlType: string;
  tableLabel: string;
  columnLabel: string;
  create: boolean;
  delete: boolean;
  update: boolean;
  listViewOrdering: number;
  mandatory: boolean;
  groupName: string;
  groupOrdering: number;
  columnOrdering: number;
  description: string;
  search: boolean;
}
export class CellBwModel{
  TABLE_NAME : string;
  COLUMN_NAME	: string;
  INPUT_TYPE	: string;
  LOOKUP_TABLE	: string;
  REQUIRED	: boolean;
  CREATE	: boolean;
  UPDATE	: boolean;
  SEARCH	: boolean;
  READONLY_ON_UPDATE : boolean;	
  READONLY_ON_CREATE: boolean;
  COLUMN_ORDER : number;
  GROUP_ORDER	: number;
  IS_LABEL: number;
  TABLE_LABEL	: string;
  GROUP_LABEL	: string;
  COLUMN_LABEL: string;
  LIST_ORDER:number;
  child:CellBwModel[]
  GROUP_NAME: string;
}
export class Groups{
  groupName:string
  ordering:number
  child:CellBwModel[]
}
