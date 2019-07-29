import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/create', component: ProductEditorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
