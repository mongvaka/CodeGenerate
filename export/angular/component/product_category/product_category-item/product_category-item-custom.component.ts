import { ProductCategoryItemModel } from 'app/models';
import { isNullOrUndefOrEmptyGUID } from 'app/shared/functions/value.function';
import {
  BaseServiceModel,
  FieldAccessing,
} from 'app/shared/models/system_model';
import { Observable, of } from 'rxjs';
const firstGroup = [
];
const secondGroup = [
];
export class ProductCategoryItemCustomComponent {
  baseService: BaseServiceModel<any>;
  getFieldAccessing(model: ProductCategoryItemModel): Observable<FieldAccessing[]> {
    const fieldAccessing: FieldAccessing[] = [];
    if (isNullOrUndefOrEmptyGUID(model.product_category_uuid)) {
      fieldAccessing.push({ filedIds: firstGroup, readonly: true });
    } else {
      fieldAccessing.push({ filedIds: secondGroup, readonly: true });
    }
    return of(fieldAccessing);
  }
  getDataValidation(): Observable<boolean> {
    return of(true);
  }
  getPageAccessRight(
    canCreate: boolean,
    canUpdate: boolean,
    model: ProductCategoryItemModel
  ): Observable<boolean> {
    const accessright = isNullOrUndefOrEmptyGUID(model.product_category_uuid)
      ? canCreate
      : canUpdate;
    const accessLogic = true;
    return of(!(accessLogic && accessright));
  }
  getInitialData(): Observable<ProductCategoryItemModel> {
    const model = new ProductCategoryItemModel();
    return of(model);
  }
}
