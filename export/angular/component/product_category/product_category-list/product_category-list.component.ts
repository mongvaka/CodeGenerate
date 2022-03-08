import { Component, Input } from '@angular/core';
import { ProductCategoryListModel } from 'app/models';
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
import { ProductCategoryListCustomComponent } from './product_category-list-custom.component';
import { Observable } from 'rxjs';
import { ProductCategoryService } from '../product_category.service';
import { ColumnType, SortType, Operators } from 'app/shared/constants';
import { ScProductCategory } from 'app/schema/ScProductCategory';
const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
@Component({
  selector: 'app-product_category-list',
  templateUrl: './product_category-list.component.html',
  styleUrls: ['./product_category-list.component.scss'],
})
export class ProductCategoryListComponent
  extends BaseListComponent<ProductCategoryListModel>
  implements BaseListInterface
{
  @Input() set pageInfo(param: PageInformationModel) {
    super.setPath(param);
    this.service.setPath(param);
  }
  constructor(
    private service: ProductCategoryService,
    public custom: ProductCategoryListCustomComponent
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
    this.option.key = 'product_category_uuid';
    const columns: ColumnModel[] = [
      {
        label: 'LABEL.product_category_name',
        textKey: 'product_category_name',
        type: ColumnType.MASTER,
        tableName: ScProductCategory.tb_name,
        visibility: true,
        sorting: SortType.NONE,
        operator: Operators.EQUAL,
      },
      {
        label: 'LABEL.product_category_description',
        textKey: 'product_category_description',
        type: ColumnType.MASTER,
        tableName: ScProductCategory.tb_name,
        visibility: true,
        sorting: SortType.NONE,
        operator: Operators.EQUAL,
      },
    ];
    this.option.columns = columns;
  }
  loadList(): void {
    this.getList(this.searchParam).subscribe((result) => {
      this.searchResult = result;
    });
  }
  getList(search: SearchParameter): Observable<SearchResult<ProductCategoryListModel>> {
    this.$baseGetList = this.service.getProductCategoryTableList(search);
    return this.$baseGetList;
  }
  onCreate(row?: RowIdentity): void {
    super.onCreate(row);
  }
  onView(row: RowIdentity): void {
    super.onView(row);
  }
  onDelete(row: RowIdentity): void {
    super.onDelete(row, this.service.deleteProductCategoryTable(row.uuid));
  }
  onsearch(e: SearchParameter): void {
    this.searchParam = e;
    this.loadList();
  }
}
