import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AllProductComponent} from './products/all-product/all-product.component'
import {ProductDetailsComponent} from './products/product-details/product-details.component'
import {ProductListComponent} from './products/product-list/product-list.component'
import {CreateProductComponent} from './products/create-product/create-product.component'
const routes: Routes = [
  {
    path:'' , component:HomeComponent
  },
  {
    path:'product-details/:id' , component:ProductDetailsComponent
  },
  {
    path:'product-list' , component:ProductListComponent
  },
  {
    path:'view-all' , component:AllProductComponent
  },
  {
    path:'create-product' , component:CreateProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
