import 'package:ice_fac_mobile/Shared/Function/data_type_function.dart';
  final String product_category_name;
  final String product_category_description;
import 'package:ice_fac_mobile/ViewModel/product_category_item_view.dart';
import 'package:ice_fac_mobile/Shared/Function/data_type_function.dart';

class ProductCategoryListView {
  final String product_category_uuid;
  final String product_category_name;
  final String product_category_description;

  ProductCategoryListView(
      {
      this.product_category_uuid,
      this.product_category_name,
      this.product_category_description,
      });
  factory ProductCategoryListView.fromJson(Map<dynamic, dynamic> json) {
    return ProductCategoryListView(
      product_category_uuid: json['product_category_uuid'].toString(),
      product_category_name: json['product_category_name'].toString(),
      product_category_description: json['product_category_description'].toString(),
    );
  }
  static List<ProductCategoryListView> fromArray(List<dynamic> array) {
    return array.map((item) => ProductCategoryListView.fromJson(item)).toList();
  }

  factory ProductCategoryListView.formItem(ProductCategoryItemView itemView) {
    return ProductCategoryListView(
        product_category_uuid: itemView.product_category_uuid,
        product_category_name: itemView.product_category_name,
        product_category_description: itemView.product_category_description,
        );
  }
}
