import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { ProductCategoryListComponent } from './product_category-list/product_category-list.component';
import { ProductCategoryItemComponent } from './product_category-item/product_category-item.component';
import { ProductCategoryListCustomComponent } from './product_category-list/product_category-list-custom.component';
import { ProductCategoryItemCustomComponent } from './product_category-item/product_category-item-custom.component';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [ProductCategoryListComponent, ProductCategoryItemComponent],
  providers: [ProductCategoryListCustomComponent, ProductCategoryItemCustomComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ProductCategoryListComponent, ProductCategoryItemComponent],
})
export class ProductCategoryComponentModule {}
