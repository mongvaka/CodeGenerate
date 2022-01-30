import { Component, OnInit } from '@angular/core';
import { UIControllerService } from 'app/core/services/uiController.service';
import { ROUTE_MASTER_GEN } from 'app/shared/constants/constant_gen';
import {
  ColumnModel,
  OptionModel,
  PageInformationModel,
} from 'app/shared/models/system_model/miscellaneous_model';
@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.html',
  styleUrls: ['./customer-list-page.scss'],
})
export class CustomerListPage implements OnInit {
  pageInfo: PageInformationModel;
  option: OptionModel;
  constructor(public uiService: UIControllerService) {}
  ngOnInit(): void {
    this.setOption();
    this.setPath();
  }
  setOption(): void {
    this.option = new OptionModel();
    this.option.key = 'customer_uuid';
    const columns: ColumnModel[] = [];
    this.option.columns = columns;
  }
  setPath(): void {
    this.pageInfo = {
      pagePath: ROUTE_MASTER_GEN.CUSTOMER,
      servicePath: '/Customer',
    };
  }
}
