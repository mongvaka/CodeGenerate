export enum BooleanType {
  YES = "Yes",
  NO = "No",
}
export enum FormatType {
  TS = ".ts",
  CSHAP = ".cs",
  DART = ".dart",
  HTML = ".html",
  SCSS = ".scss",
}
export enum ControlType {
  DATE = "Date",
  TIME = "Time",

  DROPDOWN = "Dropdown",
  FILE_UPLOAD = "FileUpload",
  INPUT_NUMBER = "Number",
  INPUT_TEXT = "Text",
  INPUT_SWITCH = "Switch",
  INPUT_TEXT_AREA = "Textbox",
}
export enum DataType {
  UUID = "uuid",
  SHOT_TEXT = "character varying (500)",
  LONG_TEXT = "character varying",
  INT = "integer",
  DOUBLE = "double precision",
  TIME = "time without time zone",
  DATE_TIME = "timestamp without time zone",
  BOOLEAN = "boolean",
}
export enum ModelAgFieldType {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  ANY = "any",
}
export enum ModelDartFieldType {
  STRING = "String",
  INT = "int",
  DOUBLE = "double",
  DYNAMIC = "dynamic",
  BOOLEAN = "bool",
}
export enum StyleType {
  CAMEL = "CamelCase",
  SNAKE = "SnakeCase",
  PASCAL = "PascalCase",
  UPPER = "UpperCase",
}
export enum ComponentName {
  DATE = "kis-calendar",
  TIME = "kis-calendar",

  DROPDOWN = "kis-dropdown",
  FILE_UPLOAD = "kis-file-upload",
  INPUT_NUMBER = "kis-input-number",
  INPUT_TEXT = "kis-input-text",
  INPUT_SWITCH = "kis-input-switch",
  INPUT_TEXT_AREA = "kis-textarea",
}
export enum ConfigType {
  INTEGER = "INTEGER",
  DEFAULT_INPUTTEXT = "DEFAULT_INPUTTEXT",
  DEFAULT_INPUTTEXT_AREA = "DEFAULT_INPUTTEXT_AREA",
  DEFAULT_DROPDOWN = "DEFAULT_DROPDOWN",
  DATETIME = "DATETIME",
  DATE = "DATE",
  DATERANGE = "DATERANGE",
  TIME = "TIME",
  DEFAULT_INPUTSWITCH = "DEFAULT_INPUTSWITCH",
  CURRENCY_13_2 = "CURRENCY_13_2",
}
export enum PostgresDataType {
  DOUBLE = "double precision",
  INTEGER = "integer",
  UUID = "uuid",
  STRING = "text",
  DATE_TIME = "timestamp without time zone",
  TIME = "time without time zone",
  BOOLEAN = "boolean",
}
export enum ColumnTypeNest {
  VARCHAR = "VARCHAR",
  INT = "INT",
  DATE = "TIMESTAMP",
  BOOLEAN = "BOOLEAN",
  TEXT = "TEXT",
  DECIMAL = "DECIMAL",
  DECIMAL14_4 = "DECIMAL(14, 4)",
}
export enum ColumnType {
  STRING = "STRING",
  INT = "INT",
  DATE = "DATE",
  DATERANGE = "DATERANGE",
  BOOLEAN = "BOOLEAN",
  MASTER = "MASTER",
  ENUM = "ENUM",
  DECIMAL = "DECIMAL",
}
export enum ConvertMethod {
  INT = "toInteger()",
  DOUBLE = "toDouble()",
  DATE = "stringToDateTime()",
  STRING = "toString()",
  BOOLEAN = "toBoolean()",
}
export enum InputType {
  INT = "CsTextFeild",
  DOUBLE = "CsTextFeild",
  DATE = "CsCalendar",
  STRING = "CsTextFeild",
  BOOLEAN = "CSSwitch",
  UUID = "CsDropdown",
}
export enum ColumnArray {
  TABLE_NAME = 0,
  COLUMN_NAME = 1,
  DATA_TYPE = 2,
  UNBOUND_FIELD = 3,
  UNBOUND_DISPLAY = 4,
  LOOKUP_TABLE_NAME = 5,
  LOOKUP_CONTROL = 6,
  READONLY = 7,
  READONLY_ON_CREATE = 8,
  LOOKUP_ORDERING = 9,
  CONTROL_SIZE = 10,
  CONTROL_TYPE = 11,
  TABLE_LABEL = 12,
  COLUMN_LABEL = 13,
  CREATE = 14,
  DELETE = 15,
  UPDATE = 16,
  LIST_VIEW_ORDERING = 17,
  MANDATORY = 18,
  GROUP_NAME = 19,
  GROUP_ORDERING = 20,
  COLUMN_ORDERING = 21,
}
export enum ColumnArrayNest {
  TABLE_NAME = 0,
  COLUMN_NAME = 1,
  DATA_TYPE = 2,
  COLUMN_TYPE = 3,
  LOOKUP_TABLE_NAME = 4,
  REF_FIELD = 5,
  DESCRIPTION = 6,
  MANDATORY = 7,
  CREATE = 8,
  UPDATE = 9,
  SEARCH_PARAM = 10,
  UNBOUND_FIELD = 11,
  READONLY = 12,
  READONLY_ON_CREATE = 13,
  CONTROL_TYPE = 14,
  TABLE_LABEL = 15,
  COLUMN_LABEL = 16,
}
