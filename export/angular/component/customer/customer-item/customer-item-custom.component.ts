import { CustomerItemModel } from 'app/models';
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
export class CustomerItemCustomComponent {
  baseService: BaseServiceModel<any>;
  getFieldAccessing(model: CustomerItemModel): Observable<FieldAccessing[]> {
    const fieldAccessing: FieldAccessing[] = [];
    if (isNullOrUndefOrEmptyGUID(model.customer_uuid)) {
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
    model: CustomerItemModel
  ): Observable<boolean> {
    const accessright = isNullOrUndefOrEmptyGUID(model.customer_uuid)
      ? canCreate
      : canUpdate;
    const accessLogic = true;
    return of(!(accessLogic && accessright));
  }
  getInitialData(): Observable<CustomerItemModel> {
    const model = new CustomerItemModel();
    return of(model);
  }
}
