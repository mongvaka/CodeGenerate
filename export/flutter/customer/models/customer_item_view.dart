import 'package:flutter/cupertino.dart';

class CustomerItemView {
  String customer_uuid;
  TextEditingController customer_code_controler = new TextEditingController();
  TextEditingController customer_branch_uuid_controler = new TextEditingController();
  TextEditingController customer_category_uuid_controler = new TextEditingController();
  TextEditingController customer_name_controler = new TextEditingController();
  TextEditingController address_uuid_controler = new TextEditingController();
  TextEditingController credit_term_controler = new TextEditingController();
  TextEditingController description_controler = new TextEditingController();
  TextEditingController tax_uuid_controler = new TextEditingController();
  TextEditingController bank_uuid_controler = new TextEditingController();

  CustomerItemView(
      {this.customer_uuid,
      this.customer_code,
      this.customer_branch_uuid,
      this.customer_category_uuid,
      this.customer_name,
      this.address_uuid,
      this.credit_term,
      this.description,
      this.tax_uuid,
      this.bank_uuid,
      });

  factory CustomerItemView.fromJson(Map<String, dynamic> json) {
    return BankItemView(
        customer_uuid: json['customer_uuid'].toString(),
        customer_code: json['customer_code'].toString(),
        customer_branch_uuid: json['customer_branch_uuid'].toString(),
        customer_category_uuid: json['customer_category_uuid'].toString(),
        customer_name: json['customer_name'].toString(),
        address_uuid: json['address_uuid'].toString(),
        credit_term: json['credit_term'].toString(),
        description: json['description'].toString(),
        tax_uuid: json['tax_uuid'].toString(),
        bank_uuid: json['bank_uuid'].toString(),
        create_by: json['create_by'].toString(),
        update_by: json['update_by'].toString(),
        create_date: json['create_date'].toString(),
        update_date: json['update_date'].toString());
  }
  Map<String, dynamic> getFromControllerToJson() {
    customer_code = customer_code_controler.text.toString();
    customer_branch_uuid = customer_branch_uuid_controler.text.toString();
    customer_category_uuid = customer_category_uuid_controler.text.toString();
    customer_name = customer_name_controler.text.toString();
    address_uuid = address_uuid_controler.text.toString();
    credit_term = credit_term_controler.text.INT;
    description = description_controler.text.toString();
    tax_uuid = tax_uuid_controler.text.toString();
    bank_uuid = bank_uuid_controler.text.toString();
    return {
      'customer_code': customer_code,
      'customer_branch_uuid': customer_branch_uuid,
      'customer_category_uuid': customer_category_uuid,
      'customer_name': customer_name,
      'address_uuid': address_uuid,
      'credit_term': credit_term,
      'description': description,
      'tax_uuid': tax_uuid,
      'bank_uuid': bank_uuid,
    };
  }

  void assignControllerToModel() {
    customer_code_controler.text = customer_code;
    customer_branch_uuid_controler.text = customer_branch_uuid;
    customer_category_uuid_controler.text = customer_category_uuid;
    customer_name_controler.text = customer_name;
    address_uuid_controler.text = address_uuid;
    credit_term_controler.text = credit_term;
    description_controler.text = description;
    tax_uuid_controler.text = tax_uuid;
    bank_uuid_controler.text = bank_uuid;
  }
}
