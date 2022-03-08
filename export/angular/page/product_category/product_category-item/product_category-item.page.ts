import { Component, OnInit } from '@angular/core';
import { UIControllerService } from 'app/core/services/uiController.service';
import { ROUTE_MASTER_GEN } from 'app/shared/constants';
import { PageInformationModel } from 'app/shared/models/system_model';
@Component({
  selector: 'app-product_category-item-page',
  templateUrl: './product_category-item-page.html',
  styleUrls: ['./product_category-item-page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ProductCategoryItemPage implements OnInit {
  pageInfo: PageInformationModel;
  // masterRoute = this.uiService.getMasterRoute();
  constructor(public uiService: UIControllerService) {}
  ngOnInit(): void {
    this.setPath();
  }
  setPath(): void {
    this.pageInfo = {
      pagePath: ROUTE_MASTER_GEN.PRODUCTCATEGORY,
      servicePath: '/ProductCategory',
    };
  }
}
