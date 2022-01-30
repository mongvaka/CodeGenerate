import 'package:ice_fac_mobile/Shared/Function/data_type_function.dart';
  final String customer_code;
  final String customer_branch_uuid;
  final String customer_category_uuid;
  final String customer_name;
  final String address_uuid;
  final String credit_term;
  final String description;
  final String tax_uuid;
  final String bank_uuid;
import 'package:ice_fac_mobile/ViewModel/customer_item_view.dart';
import 'package:ice_fac_mobile/Shared/Function/data_type_function.dart';

class CustomerListView {
  final String customer_uuid;
  final String customer_code;
  final String customer_name;
  final String address_uuid;
  final String tax_uuid;
  final String bank_uuid;

  CustomerListView(
      {
      this.customer_uuid,
      this.customer_code,
      this.customer_name,
      this.address_uuid,
      this.tax_uuid,
      this.bank_uuid,
      });
  factory CustomerListView.fromJson(Map<dynamic, dynamic> json) {
    return CustomerListView(
      customer_uuid: json['customer_uuid'].toString(),
      customer_code: json['customer_code'].toString(),
      customer_name: json['customer_name'].toString(),
      address_uuid: json['address_uuid'].toString(),
      tax_uuid: json['tax_uuid'].toString(),
      bank_uuid: json['bank_uuid'].toString(),
    );
  }
  static List<CustomerListView> fromArray(List<dynamic> array) {
    return array.map((item) => CustomerListView.fromJson(item)).toList();
  }

  factory CustomerListView.formItem(CustomerItemView itemView) {
    return CustomerListView(
        customer_uuid: itemView.customer_uuid,
        customer_code: itemView.customer_code,
        customer_name: itemView.customer_name,
        address_uuid: itemView.address_uuid,
        tax_uuid: itemView.tax_uuid,
        bank_uuid: itemView.bank_uuid,
        );
  }
}
