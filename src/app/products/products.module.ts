import { FilterPipe } from './../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, FilterPipe],
  imports: [RouterModule, CommonModule, FormsModule, NgxPaginationModule],
})
export class ProductsModule {}
