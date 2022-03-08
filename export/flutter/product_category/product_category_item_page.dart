import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';
import 'package:ice_fac_mobile/Page/ProductCategory/product_category_service.dart';
import 'package:ice_fac_mobile/Page/ThemeSetting/theme_setting.dart';
import 'package:ice_fac_mobile/Shared/Base/base_dropdown_service.dart';
import 'package:ice_fac_mobile/Shared/Base/base_item_page.dart';
import 'package:ice_fac_mobile/Shared/Constants/enum_constans.dart';
import 'package:ice_fac_mobile/Shared/SystemModel/search_condition.dart';
import 'package:ice_fac_mobile/Shared/SystemModel/search_parameter.dart';
import 'package:ice_fac_mobile/Shared/SystemModel/selected_item.dart';
import 'package:ice_fac_mobile/Shared/Widget/appbar_item_widget.dart';
import 'package:ice_fac_mobile/Shared/Widget/cs_calendar.dart';
import 'package:ice_fac_mobile/Shared/Widget/cs_dropdown.dart';
import 'package:ice_fac_mobile/Shared/Widget/cs_float_action.dart';
import 'package:ice_fac_mobile/Shared/Widget/cs_image_upload.dart';
import 'package:ice_fac_mobile/Shared/Widget/cs_text_feild.dart';
import 'package:ice_fac_mobile/Utils/app_setting.dart';
import 'package:ice_fac_mobile/ViewModel/product_category_item_view.dart';
import 'package:ice_fac_mobile/ViewModel/product_category_list_view.dart';
import 'package:image_picker/image_picker.dart';

class ProductCategoryItemPage extends BaseItemPage {
  String id;
  Function onCreated;
  ProductCategoryItemPage({this.id, this.onCreated})
      : super(id: id, isUpdateMode: id != null);

  @override
  _ProductCategoryItemPageState createState() => _ProductCategoryItemPageState();
}

class _ProductCategoryItemPageState extends State<ProductCategoryItemPage> {
  ProductCategoryItemView _model = ProductCategoryItemView();
  TextEditingController controller = new TextEditingController();
  ProductCategoryService productcategoryService = new ProductCategoryService();
  BaseDropdownService dropdownService = new BaseDropdownService();
  _ProductCategoryItemPageState();
  final formKey = GlobalKey<FormState>();
  @override
  void initState() {
    if (widget.isUpdateMode) {
      productcategoryService.getProductCategoryItemById(widget.id).then((value) {
        setState(() {
          _model = value;
          widget.assignSystemEditField(_model);
          _model.assignControllerToModel();
        });
      });
    } else {
      productcategoryService.initialCreateData().then((value) {
        setState(() {
          _model = value;
          widget.assignSystemCreateField(_model);
          _model.assignControllerToModel();
        });
      });
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final double height = MediaQuery.of(context).size.height;
    final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

    return Scaffold(
      appBar: AppbarItem(
        title: 'BANK',
        actions: [
          IconButton(
              onPressed: () async {
                if (formKey.currentState.validate()) {
                  if (widget.isUpdateMode) {
                    productcategoryService.editProductCategory(_model);
                  } else {
                    ProductCategoryItemView modelCreated =
                        await productcategoryService.createProductCategory(_model);
                    widget.onCreated(ProductCategoryListView.formItem(modelCreated));
                  }
                } else {
                  print('notValidate');
                }
              },
              icon: Icon(Icons.check))
        ],
      ),
      body: Container(
        padding: const EdgeInsets.all(40),
        child: Form(
          key: formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              CsTextFeild(
                controller: _model.bank_name_controler,
                hintText: 'BANK_NAME',
                mandatory: true,
                inputType: TextFieldType.PASSWORD,
              ),
              CsTextFeild(
                controller: _model.bank_name_controler,
                hintText: 'BANK_NAME',
                mandatory: true,
                inputType: TextFieldType.PASSWORD,
              ),
              CsTextFeild(
                controller: _model.bank_name_controler,
                hintText: 'BANK_NAME',
                mandatory: true,
                inputType: TextFieldType.PASSWORD,
              ),
              CsTextFeild(
                controller: _model.bank_code_controler,
                hintText: "BANK_CODE",
                mandatory: true,
              ),
              CsTextFeild(
                controller: _model.bank_branch_controler,
                hintText: "BANK_BRANCH",
              ),
            ],
          ),
        ),
      ),
    );
  }
}
