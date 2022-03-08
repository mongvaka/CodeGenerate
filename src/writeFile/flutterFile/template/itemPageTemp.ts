import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class ItemPageTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getItemPageTemplate() {
    this.initialDataItemPage();
    return this.template;
  }
  private initialDataItemPage() {
    const itemList = this.masterList.filter(
      (value) => value.listViewOrdering != null
    );
    this.template.push(`import 'dart:convert';`);
    this.template.push(`import 'dart:io';`);
    this.template.push(`import 'dart:typed_data';`);
    this.template.push(``);
    this.template.push(`import 'package:flutter/material.dart';`);
    this.template.push(`import 'package:flutter/services.dart';`);
    this.template.push(
      `import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Page/${this.moduleName}/${this.moduleNameSnakeNonTable}_service.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Page/ThemeSetting/theme_setting.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Base/base_dropdown_service.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Base/base_item_page.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Constants/enum_constans.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/SystemModel/search_condition.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/SystemModel/search_parameter.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/SystemModel/selected_item.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Widget/appbar_item_widget.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Widget/cs_calendar.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Widget/cs_dropdown.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Widget/cs_float_action.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Widget/cs_image_upload.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Widget/cs_text_feild.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Utils/app_setting.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/ViewModel/${this.moduleNameSnakeNonTable}_item_view.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/ViewModel/${this.moduleNameSnakeNonTable}_list_view.dart';`
    );
    this.template.push(`import 'package:image_picker/image_picker.dart';`);
    this.template.push(``);
    this.template.push(
      `class ${this.moduleName}ItemPage extends BaseItemPage {`
    );
    this.template.push(`  String id;`);
    this.template.push(`  Function onCreated;`);
    this.template.push(
      `  ${this.moduleName}ItemPage({this.id, this.onCreated})`
    );
    this.template.push(`      : super(id: id, isUpdateMode: id != null);`);
    this.template.push(``);
    this.template.push(`  @override`);
    this.template.push(
      `  _${this.moduleName}ItemPageState createState() => _${this.moduleName}ItemPageState();`
    );
    this.template.push(`}`);
    this.template.push(``);
    this.template.push(
      `class _${this.moduleName}ItemPageState extends State<${this.moduleName}ItemPage> {`
    );
    this.template.push(
      `  ${this.moduleName}ItemView _model = ${this.moduleName}ItemView();`
    );
    this.template.push(
      `  TextEditingController controller = new TextEditingController();`
    );
    this.template.push(
      `  ${this.moduleName}Service ${this.moduleNameCamel}Service = new ${this.moduleName}Service();`
    );
    this.template.push(
      `  BaseDropdownService dropdownService = new BaseDropdownService();`
    );
    this.template.push(`  _${this.moduleName}ItemPageState();`);
    this.template.push(`  final formKey = GlobalKey<FormState>();`);
    this.template.push(`  @override`);
    this.template.push(`  void initState() {`);
    this.template.push(`    if (widget.isUpdateMode) {`);
    this.template.push(
      `      ${this.moduleNameCamel}Service.get${this.moduleName}ItemById(widget.id).then((value) {`
    );
    this.template.push(`        setState(() {`);
    this.template.push(`          _model = value;`);
    this.template.push(`          widget.assignSystemEditField(_model);`);
    this.template.push(`          _model.assignControllerToModel();`);
    this.template.push(`        });`);
    this.template.push(`      });`);
    this.template.push(`    } else {`);
    this.template.push(
      `      ${this.moduleNameCamel}Service.initialCreateData().then((value) {`
    );
    this.template.push(`        setState(() {`);
    this.template.push(`          _model = value;`);
    this.template.push(`          widget.assignSystemCreateField(_model);`);
    this.template.push(`          _model.assignControllerToModel();`);
    this.template.push(`        });`);
    this.template.push(`      });`);
    this.template.push(`    }`);
    this.template.push(`    super.initState();`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(`  @override`);
    this.template.push(`  Widget build(BuildContext context) {`);
    this.template.push(
      `    final double height = MediaQuery.of(context).size.height;`
    );
    this.template.push(
      `    final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();`
    );
    this.template.push(``);
    this.template.push(`    return Scaffold(`);
    this.template.push(`      appBar: AppbarItem(`);
    this.template.push(`        title: 'BANK',`);
    this.template.push(`        actions: [`);
    this.template.push(`          IconButton(`);
    this.template.push(`              onPressed: () async {`);
    this.template.push(
      `                if (formKey.currentState.validate()) {`
    );
    this.template.push(`                  if (widget.isUpdateMode) {`);
    this.template.push(
      `                    ${this.moduleNameCamel}Service.edit${this.moduleName}(_model);`
    );
    this.template.push(`                  } else {`);
    this.template.push(
      `                    ${this.moduleName}ItemView modelCreated =`
    );
    this.template.push(
      `                        await ${this.moduleNameCamel}Service.create${this.moduleName}(_model);`
    );
    this.template.push(
      `                    widget.onCreated(${this.moduleName}ListView.formItem(modelCreated));`
    );
    this.template.push(`                  }`);
    this.template.push(`                } else {`);
    this.template.push(`                  print('notValidate');`);
    this.template.push(`                }`);
    this.template.push(`              },`);
    this.template.push(`              icon: Icon(Icons.check))`);
    this.template.push(`        ],`);
    this.template.push(`      ),`);
    this.template.push(`      body: Container(`);
    this.template.push(`        padding: const EdgeInsets.all(40),`);
    this.template.push(`        child: Form(`);
    this.template.push(`          key: formKey,`);
    this.template.push(`          child: Column(`);
    this.template.push(
      `            crossAxisAlignment: CrossAxisAlignment.start,`
    );
    this.template.push(`            children: [`);

    itemList.forEach((item) => {
      // const inputType:string = getInputType(item.dataType);

      this.template.push(`              CsTextFeild(`);
      this.template.push(
        `                controller: _model.bank_name_controler,`
      );
      this.template.push(`                hintText: 'BANK_NAME',`);
      this.template.push(`                mandatory: true,`);
      this.template.push(`                inputType: TextFieldType.PASSWORD,`);
      this.template.push(`              ),`);
    });

    this.template.push(`              CsTextFeild(`);
    this.template.push(
      `                controller: _model.bank_name_controler,`
    );
    this.template.push(`                hintText: 'BANK_NAME',`);
    this.template.push(`                mandatory: true,`);
    this.template.push(`                inputType: TextFieldType.PASSWORD,`);
    this.template.push(`              ),`);
    this.template.push(`              CsTextFeild(`);
    this.template.push(
      `                controller: _model.bank_code_controler,`
    );
    this.template.push(`                hintText: "BANK_CODE",`);
    this.template.push(`                mandatory: true,`);
    this.template.push(`              ),`);
    this.template.push(`              CsTextFeild(`);
    this.template.push(
      `                controller: _model.bank_branch_controler,`
    );
    this.template.push(`                hintText: "BANK_BRANCH",`);
    this.template.push(`              ),`);

    this.template.push(`            ],`);
    this.template.push(`          ),`);
    this.template.push(`        ),`);
    this.template.push(`      ),`);
    this.template.push(`    );`);
    this.template.push(`  }`);
    this.template.push(`}`);
  }
}
