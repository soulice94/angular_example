import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent {
  constructor(private productService: ProductService) {}
  productForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl('0'),
  });

  onSubmit() {
    console.warn(this.productForm.value);
    this.productService.save(this.productForm.value as Product)
      .subscribe((response) => {
        console.warn(response);
      });
  }
}
