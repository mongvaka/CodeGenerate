export class CustomerViewModel extends BaseCompanyView {
  customer_uuid: string;
  customer_code: string;
  customer_branch_uuid: string;
  customer_category_uuid: string;
  customer_name: string;
  address_uuid: string;
  credit_term: number;
  description: string;
  tax_uuid: string;
  bank_uuid: string;
  constructor(json: any) {
    super();
    this.customer_uuid = json["customer_uuid"];
    this.customer_code = json["customer_code"];
    this.customer_branch_uuid = json["customer_branch_uuid"];
    this.customer_category_uuid = json["customer_category_uuid"];
    this.customer_name = json["customer_name"];
    this.address_uuid = json["address_uuid"];
    this.credit_term = json["credit_term"];
    this.description = json["description"];
    this.tax_uuid = json["tax_uuid"];
    this.bank_uuid = json["bank_uuid"];
  }
}
