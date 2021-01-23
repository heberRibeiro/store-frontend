import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  private clienteUrl = `${environment.URL}cliente/`;

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    const cleanList: Product[] = [];
    this.items = cleanList;
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getCliente(clienteId: number) {
    return this.http.get<any>(this.clienteUrl + `${clienteId}`);
  }
}
