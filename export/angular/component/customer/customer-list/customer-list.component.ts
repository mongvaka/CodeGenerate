import { Component, Input } from '@angular/core';
import { CustomerListModel } from 'app/models';
import { BaseListInterface } from 'app/core/interfaces/base-list/base-list.interface';
import { BaseListComponent } from 'app/core/components/base-list/base-list.component';
import {
  ColumnModel,
  GridFilterModel,
  OptionModel,
  PageInformationModel,
  RowIdentity,
  SearchParameter,
  SearchResult,
  SelectItems,
} from 'app/shared/models/system_model';
import { CustomerListCustomComponent } from './bank-list-custom.component';
import { Observable } from 'rxjs';
import { CustomerService } from '../bank.service';
import { ColumnType, SortType, Operators } from 'app/shared/constants';
import { ScCustomer } from 'app/schema/ScCustomer';
const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss'],
})
export class CustomerListComponent
  extends BaseListComponent<CustomerListModel>
  implements BaseListInterface
{
  @Input() set pageInfo(param: PageInformationModel) {
    super.setPath(param);
    this.service.setPath(param);
  }
  addressOption: SelectItems[] = [];
  taxOption: SelectItems[] = [];
  bankOption: SelectItems[] = [];
  constructor(
    private service: CustomerService,
    public custom: CustomerListCustomComponent
  ) {
    super();
  }
  addSingle(): any {}
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {}
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.checkAccessMode();
    this.checkPageMode();
    this.onEnumLoader();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {}
  checkPageMode(): void {}
  onFilter(param: GridFilterModel): void {
    this.baseDropdown.getAddressDropDown(this.addressOption);
    this.baseDropdown.getTaxDropDown(this.taxOption);
    this.baseDropdown.getBankDropDown(this.bankOption);
  }
  onEnumLoader(): void {
    this.setDataGridOption();
  }
  checkAccessMode(): void {
    super.checkAccessMode(this.accessService.getAccessRight());
  }
  setDataGridOption(): void {
    this.option = new OptionModel();
    this.option.canCreate = true;
    this.option.canView = true;
    this.option.canDelete = true;
    this.option.key = 'customer_uuid';
    const columns: ColumnModel[] = [
      {
        label: 'LABEL.customer_code',
        textKey: 'customer_code',
        type: ColumnType.STRING,
        tableName: ScCustomer.tb_name,
        visibility: true,
        sorting: SortType.NONE,
        operator: Operators.EQUAL,
      },
      {
        label: 'LABEL.customer_name',
        textKey: 'customer_name',
        type: ColumnType.STRING,
        tableName: ScCustomer.tb_name,
        visibility: true,
        sorting: SortType.NONE,
        operator: Operators.EQUAL,
      },
      {
        label: 'LABEL.address_uuid',
        textKey: 'address_uuid',
        type: ColumnType.MASTER,
        tableName: ScCustomer.tb_name,
        visibility: true,
        sorting: SortType.NONE,
        operator: Operators.EQUAL,
        masterList: this.addressOption,
      },
      {
        label: 'LABEL.tax_uuid',
        textKey: 'tax_uuid',
        type: ColumnType.MASTER,
        tableName: ScCustomer.tb_name,
        visibility: true,
        sorting: SortType.NONE,
        operator: Operators.EQUAL,
        masterList: this.taxOption,
      },
      {
        label: 'LABEL.bank_uuid',
        textKey: 'bank_uuid',
        type: ColumnType.MASTER,
        tableName: ScCustomer.tb_name,
        visibility: true,
        sorting: SortType.NONE,
        operator: Operators.EQUAL,
        masterList: this.bankOption,
      },
    ];
    this.option.columns = columns;
  }
  loadList(): void {
    this.getList(this.searchParam).subscribe((result) => {
      this.searchResult = result;
    });
  }
  getList(search: SearchParameter): Observable<SearchResult<CustomerListModel>> {
    this.$baseGetList = this.service.getCustomerTableList(search);
    return this.$baseGetList;
  }
  onCreate(row?: RowIdentity): void {
    super.onCreate(row);
  }
  onView(row: RowIdentity): void {
    super.onView(row);
  }
  onDelete(row: RowIdentity): void {
    super.onDelete(row, this.service.deleteCustomerTable(row.uuid));
  }
  onsearch(e: SearchParameter): void {
    this.searchParam = e;
    this.loadList();
  }
}
