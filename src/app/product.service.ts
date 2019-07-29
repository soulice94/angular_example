import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { Product } from './products/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*'
  })
};

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsUrl = 'http://localhost:3000/products'
  constructor( private http: HttpClient ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl, httpOptions);
  }

  save(product: Product): Observable<any> {
    return this.http.post(this.productsUrl, product, httpOptions);
  }

}
