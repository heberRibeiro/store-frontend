import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private productListUrl = 'http://localhost:8080/produto';
  // products: any[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    // return this.http.get('/assets/products.json');
    return this.http.get<Product[]>(this.productListUrl, {
      observe: 'response',
    });
  }
}
