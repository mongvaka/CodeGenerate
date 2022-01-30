import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';
import 'package:ice_fac_mobile/Page/Customer/customer_service.dart';
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
import 'package:ice_fac_mobile/ViewModel/customer_item_view.dart';
import 'package:ice_fac_mobile/ViewModel/customer_list_view.dart';
import 'package:image_picker/image_picker.dart';

class CustomerItemPage extends BaseItemPage {
  String id;
  Function onCreated;
  CustomerItemPage({this.id, this.onCreated})
      : super(id: id, isUpdateMode: id != null);

  @override
  _CustomerItemPageState createState() => _CustomerItemPageState();
}

class _CustomerItemPageState extends State<CustomerItemPage> {
  CustomerItemView _model = CustomerItemView();
  TextEditingController controller = new TextEditingController();
  CustomerService customerService = new CustomerService();
  BaseDropdownService dropdownService = new BaseDropdownService();
  _CustomerItemPageState();
  final formKey = GlobalKey<FormState>();
  @override
  void initState() {
    if (widget.isUpdateMode) {
      customerService.getCustomerItemById(widget.id).then((value) {
        setState(() {
          _model = value;
          widget.assignSystemEditField(_model);
          _model.assignControllerToModel();
        });
      });
    } else {
      customerService.initialCreateData().then((value) {
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
                    customerService.editCustomer(_model);
                  } else {
                    CustomerItemView modelCreated =
                        await customerService.createCustomer(_model);
                    widget.onCreated(CustomerListView.formItem(modelCreated));
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
