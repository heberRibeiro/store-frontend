import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private productListUrl = `${environment.URL}produto`;
  private productByIdUrl = `${environment.URL}produto/`;
  private deleteProductUrl = `${environment.URL}produto/`;
  private updateProductUrl = `${environment.URL}produto/`;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.productListUrl, {
      observe: 'response',
    });
  }

  getProductById(productId: any) {
    return this.http.get<Product>(this.productByIdUrl + `${productId}`, {
      observe: 'response',
    });
  }

  deleteProduct(productId: number) {
    return this.http.delete<any>(this.deleteProductUrl + `${productId}`);
  }

  updateProduct(productId: number, data: any) {
    return this.http.put<any>(this.updateProductUrl + `${productId}`, data);
  }
}
