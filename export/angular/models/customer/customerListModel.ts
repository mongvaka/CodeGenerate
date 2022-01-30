import { BaseCompanyView } from 'app/core/interfaces/base/baseCompanyView';
export class CustomerListModel extends BaseCompanyView {
  customer_uuid: string = null;
  customer_code: string = null;
  customer_name: string = null;
  address_uuid: string = null;
  tax_uuid: string = null;
  bank_uuid: string = null;
}
