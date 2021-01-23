import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private productListUrl = `${environment.URL}produto`;
  private deleteProductUrl = `${environment.URL}produto/`;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.productListUrl, {
      observe: 'response',
    });
  }

  deleteProduct(productId: number) {
    return this.http.delete<any>(this.deleteProductUrl + `${productId}`);
  }
}
