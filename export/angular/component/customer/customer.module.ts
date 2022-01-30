import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { CustomerListComponent } from './customer-list.component/customer-list.component';
import { CustomerItemComponent } from './customer-item.component/customer-item.component';
import { CustomerListCustomComponent } from './customer-list.component/customer-list-custom.component';
import { CustomerItemCustomComponent } from './customer-item.component/customer-item-custom.component';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [CustomerListComponent, CustomerItemComponent],
  providers: [CustomerListCustomComponent, CustomerItemCustomComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CustomerListComponent, CustomerItemComponent],
})
export class CustomerComponentModule {}
