import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategoryItemModel } from 'app/models';
import { BaseItemInterface } from 'app/core/interfaces/base-item/base-item.interface';
import { BaseItemComponent } from 'app/core/components/base-item/base-item.component';
import {
  FormValidationModel,
  PageInformationModel,
  SelectItems,
} from 'app/shared/models/system_model';
import { ProductCategoryService } from '../product_category.service';
import {
  isNullOrUndefined,
  isUpdateMode,
} from 'app/shared/functions/value.function';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { modelRegister } from 'app/shared/functions/model.function';
import { ProductCategoryItemCustomComponent } from './product_category-item-custom.component';
@Component({
  selector: 'app-product_category-item',
  templateUrl: './product_category-item.component.html',
  styleUrls: ['./product_category-item.component.scss'],
})
export class ProductCategoryItemComponent
  extends BaseItemComponent<ProductCategoryItemModel>
  implements BaseItemInterface
{
  @Input() set pageInfo(param: PageInformationModel) {
    super.setPath(param);
    this.service.setPath(param);
  }
  constructor(
    private service: ProductCategoryService,
    private currentActivatedRoute: ActivatedRoute,
    public custom: ProductCategoryItemCustomComponent
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
  getById(): Observable<ProductCategoryItemModel> {
    return this.service.getProductCategoryTableById(this.id);
  }
  getInitialData(): Observable<ProductCategoryItemModel> {
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
    ).subscribe(
      ([
      ]) => {
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
      super.onUpdate(this.service.editProductCategoryTable(this.model), isColsing);
    } else {
      super.onCreate(this.service.createProductCategoryTable(this.model), isColsing);
    }
  }
  getDataValidation(): Observable<boolean> {
    return this.custom.getDataValidation();
  }
}
