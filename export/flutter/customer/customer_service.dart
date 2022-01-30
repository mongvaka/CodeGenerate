import 'dart:convert';

import 'package:http/http.dart';
import 'package:ice_fac_mobile/Shared/Base/base_service.dart';
import 'package:ice_fac_mobile/Shared/Constants/base_url.dart';
import 'package:ice_fac_mobile/Shared/SystemModel/search_parameter.dart';
import 'package:ice_fac_mobile/ViewModel/customer_item_view.dart';
import 'package:ice_fac_mobile/ViewModel/customer_list_view.dart';
import 'package:ice_fac_mobile/ViewModel/search_result.dart';

class CustomerService {
  final String _moduleName = '/Customer';
  BaseService _baseService = new BaseService();
  Future<SearchResult> getCustomerList(SearchParameterModel searchParameter) async {
    String url = '$_moduleName/getCustomerTableList';
    Response res = await _baseService.getList(url, searchParameter);
    Map<dynamic, dynamic> body = jsonDecode(res.body);
    if (res.statusCode == 200) {
      return SearchResult.formJson(body);
    } else {
      return null;
    }
  }

  Future<CustomerItemView> getCustomerItemById(String id) async {
    String url = '$_moduleName/getCustomerTableById';
    Response res = await _baseService.getView(url, id);
    dynamic body = jsonDecode(res.body);
    return CustomerItemView.fromJson(body);
  }

  Future<CustomerItemView> createCustomer(CustomerItemView model) async {
    String url = '$_moduleName/createCustomerTable';
    Response res =
        await _baseService.create(url, model.getFromControllerToJson());
    dynamic body = jsonDecode(res.body);
    return CustomerItemView.fromJson(body);
  }

  Future<CustomerItemView> editCustomer(CustomerItemView model) async {
    String url = '$_moduleName/editCustomerTable';
    Response res =
        await _baseService.edit(url, model.getFromControllerToJson());
    dynamic body = jsonDecode(res.body);
    return CustomerItemView.fromJson(body);
  }

  Future<CustomerListView> deleteCustomer(String id) async {
    String url = '$_moduleName/deleteCustomerTable';
    Response res = await _baseService.delete(url, id);
    dynamic body = jsonDecode(res.body);
    return CustomerListView.fromJson(body);
  }

  Future<CustomerItemView> initialCreateData() async {
    return new CustomerItemView();
  }
}
