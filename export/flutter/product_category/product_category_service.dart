import 'dart:convert';

import 'package:http/http.dart';
import 'package:ice_fac_mobile/Shared/Base/base_service.dart';
import 'package:ice_fac_mobile/Shared/Constants/base_url.dart';
import 'package:ice_fac_mobile/Shared/SystemModel/search_parameter.dart';
import 'package:ice_fac_mobile/ViewModel/product_category_item_view.dart';
import 'package:ice_fac_mobile/ViewModel/product_category_list_view.dart';
import 'package:ice_fac_mobile/ViewModel/search_result.dart';

class ProductCategoryService {
  final String _moduleName = '/ProductCategory';
  BaseService _baseService = new BaseService();
  Future<SearchResult> getProductCategoryList(SearchParameterModel searchParameter) async {
    String url = '$_moduleName/getProductCategoryTableList';
    Response res = await _baseService.getList(url, searchParameter);
    Map<dynamic, dynamic> body = jsonDecode(res.body);
    if (res.statusCode == 200) {
      return SearchResult.formJson(body);
    } else {
      return null;
    }
  }

  Future<ProductCategoryItemView> getProductCategoryItemById(String id) async {
    String url = '$_moduleName/getProductCategoryTableById';
    Response res = await _baseService.getView(url, id);
    dynamic body = jsonDecode(res.body);
    return ProductCategoryItemView.fromJson(body);
  }

  Future<ProductCategoryItemView> createProductCategory(ProductCategoryItemView model) async {
    String url = '$_moduleName/createProductCategoryTable';
    Response res =
        await _baseService.create(url, model.getFromControllerToJson());
    dynamic body = jsonDecode(res.body);
    return ProductCategoryItemView.fromJson(body);
  }

  Future<ProductCategoryItemView> editProductCategory(ProductCategoryItemView model) async {
    String url = '$_moduleName/editProductCategoryTable';
    Response res =
        await _baseService.edit(url, model.getFromControllerToJson());
    dynamic body = jsonDecode(res.body);
    return ProductCategoryItemView.fromJson(body);
  }

  Future<ProductCategoryListView> deleteProductCategory(String id) async {
    String url = '$_moduleName/deleteProductCategoryTable';
    Response res = await _baseService.delete(url, id);
    dynamic body = jsonDecode(res.body);
    return ProductCategoryListView.fromJson(body);
  }

  Future<ProductCategoryItemView> initialCreateData() async {
    return new ProductCategoryItemView();
  }
}
