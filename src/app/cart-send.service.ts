import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartSendService {
  private vendaSendUrl = `${environment.URL}venda`;
  private itemVendaSendUrl = `${environment.URL}item-venda`;

  constructor(private http: HttpClient) {}

  registerSale(data: Object) {
    return this.http.post<any>(this.vendaSendUrl, data);
  }

  registerItemVenda(data: Object) {
    return this.http.post<any>(this.itemVendaSendUrl, data);
  }
}
