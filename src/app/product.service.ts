import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 

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

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl, httpOptions);
  }

}
