import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoryRoutingModule } from './product_category-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, ProductCategoryRoutingModule],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductCategoryPageModule {}
