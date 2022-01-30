import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerItemModel } from 'app/models';
import { BaseItemInterface } from 'app/core/interfaces/base-item/base-item.interface';
import { BaseItemComponent } from 'app/core/components/base-item/base-item.component';
import {
  FormValidationModel,
  PageInformationModel,
  SelectItems,
} from 'app/shared/models/system_model';
import { CustomerService } from '../customer.service';
import {
  isNullOrUndefined,
  isUpdateMode,
} from 'app/shared/functions/value.function';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { modelRegister } from 'app/shared/functions/model.function';
import { CustomerItemCustomComponent } from './bank-item-custom.component';
@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss'],
})
export class CustomerItemComponent
  extends BaseItemComponent<CustomerItemModel>
  implements BaseItemInterface
{
  @Input() set pageInfo(param: PageInformationModel) {
    super.setPath(param);
    this.service.setPath(param);
  }
  customerBranchTableOptions: SelectItems[] = [];
  customerCategoryTableOptions: SelectItems[] = [];
  addressTableOptions: SelectItems[] = [];
  taxTableOptions: SelectItems[] = [];
  bankTableOptions: SelectItems[] = [];
  constructor(
    private service: CustomerService,
    private currentActivatedRoute: ActivatedRoute,
    public custom: CustomerItemCustomComponent
  ) {
    super();
    this.custom.baseService = this.baseService;
    this.id = this.currentActivatedRoute.snapshot.params.id;
  }
  setActionOptions(model?: any): void {
    // super.setActionOptions();
  }
  setInfoOptions(model?: any): void {
    // super.setInfoOptions();
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {}
 // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.checkAccessMode();
    this.checkPageMode();
  }
  checkPageMode(): void {
    if (isUpdateMode(this.id)) {
      this.isUpdateMode = true;
      this.setInitialUpdatingData();
    } else {
      this.isUpdateMode = false;
      this.setInitialCreatingData();
    }
    this.onEnumLoader();
    this.getGroups();
  }
  checkAccessMode(): void {
    super.checkAccessMode(
      this.accessService.getNestedComponentAccessRight(false)
    );
  }
  onEnumLoader(): void {
  }
  getById(): Observable<CustomerItemModel> {
    return this.service.getCustomerTableById(this.id);
  }
  getInitialData(): Observable<CustomerItemModel> {
    return this.custom.getInitialData();
  }
  setInitialCreatingData(): void {
    this.getInitialData().subscribe((result) => {
      this.model = result;
      this.onAsyncRunner(result);
      super.setDefaultValueSystemFields();
    });
  }
  setInitialUpdatingData(): void {
    this.getById().subscribe(
      (result) => {
        this.model = result;
        this.setUpdateUser(result);
        this.onAsyncRunner(result);
        this.setInfoOptions(result);
        this.setActionOptions(result);
      },
      (error) => {
        this.notificationService.showErrorMessageFromResponse(error);
      }
    );
  }
  onAsyncRunner(model?: any): void {
    forkJoin(
      this.baseDropdown.getCustomerBranchDropDown(),
      this.baseDropdown.getCustomerCategoryDropDown(),
      this.baseDropdown.getAddressDropDown(),
      this.baseDropdown.getTaxDropDown(),
      this.baseDropdown.getBankDropDown(),
    ).subscribe(
      ([
        customerBranch,
        customerCategory,
        address,
        tax,
        bank,
      ]) => {
        this.customerBranchOptions = customerBranch;
        this.customerCategoryOptions = customerCategory;
        this.addressOptions = address;
        this.taxOptions = tax;
        this.bankOptions = bank;
        if (!isNullOrUndefined(model)) {
          this.model = model;
          modelRegister(this.model);
        }
        this.setFieldAccessing();
      },
      (error) => {
        this.notificationService.showErrorMessageFromResponse(error);
      }
    );
  }
  setFieldAccessing(): void {
    this.custom
      .getPageAccessRight(
        super.getCanCreate(),
        super.getCanUpdate(),
        this.model
      )
      .subscribe((res) => {
        this.isView = res;
      });
    this.custom.getFieldAccessing(this.model).subscribe((res) => {
      super.setBaseFieldAccessing(res);
    });
  }
  onSave(validation: FormValidationModel): void {
    this.getDataValidation().subscribe((res) => {
      if (res && validation.isValid) {
        this.onSubmit(true);
      }
    });
  }
  onSaveAndClose(validation: FormValidationModel): void {
    this.getDataValidation().subscribe((res) => {
      if (res && validation.isValid) {
        this.onSubmit(true);
      }
    });
  }
  onSubmit(isColsing: boolean): void {
    if (this.isUpdateMode) {
      super.onUpdate(this.service.editCustomerTable(this.model), isColsing);
    } else {
      super.onCreate(this.service.createCustomerTable(this.model), isColsing);
    }
  }
  getDataValidation(): Observable<boolean> {
    return this.custom.getDataValidation();
  }
}
