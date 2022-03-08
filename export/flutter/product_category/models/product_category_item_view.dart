import 'package:flutter/cupertino.dart';

class ProductCategoryItemView {
  String product_category_uuid;
  TextEditingController product_category_name_controler = new TextEditingController();
  TextEditingController product_category_description_controler = new TextEditingController();

  ProductCategoryItemView(
      {this.product_category_uuid,
      this.product_category_name,
      this.product_category_description,
      });

  factory ProductCategoryItemView.fromJson(Map<String, dynamic> json) {
    return BankItemView(
        product_category_uuid: json['product_category_uuid'].toString(),
        product_category_name: json['product_category_name'].toString(),
        product_category_description: json['product_category_description'].toString(),
        create_by: json['create_by'].toString(),
        update_by: json['update_by'].toString(),
        create_date: json['create_date'].toString(),
        update_date: json['update_date'].toString());
  }
  Map<String, dynamic> getFromControllerToJson() {
    product_category_name = product_category_name_controler.text.toString();
    product_category_description = product_category_description_controler.text.toString();
    return {
      'product_category_name': product_category_name,
      'product_category_description': product_category_description,
    };
  }

  void assignControllerToModel() {
    product_category_name_controler.text = product_category_name;
    product_category_description_controler.text = product_category_description;
  }
}
