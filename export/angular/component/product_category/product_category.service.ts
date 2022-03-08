import { Injectable } from '@angular/core';
import {
  PageInformationModel,
  SearchParameter,
} from 'app/shared/models/system_model';
import { GatewayService } from 'app/core/services/gateway.service';
@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  serviceKey = 'product_category_uuid';
  servicePath = '';
  constructor(private gateway: GatewayService) {}
  getProductCategoryTableList(search: SearchParameter): any {
    const url = `${this.servicePath}/getProductCategoryTableList`;
    return this.gateway.list(url, search);
  }
  getProductCategoryTableById(id: string): any {
    const url = `${this.servicePath}/getProductCategoryTableById`;
    return this.gateway.get(url, id);
  }
  createProductCategoryTable(data: any): any {
    const url = `${this.servicePath}/createProductCategoryTable`;
    return this.gateway.create(url, data);
  }
  editProductCategoryTable(data: any): any {
    const url = `${this.servicePath}/editProductCategoryTable`;
    return this.gateway.edit(url, data);
  }
  deleteProductCategoryTable(id: string): any {
    const url = `${this.servicePath}/deleteProductCategoryTable`;
    return this.gateway.del(url, id);
  }
  setPath(param: PageInformationModel): void {
    this.gateway.serviceKey = this.serviceKey;
    this.servicePath = param.servicePath;
  }
}
