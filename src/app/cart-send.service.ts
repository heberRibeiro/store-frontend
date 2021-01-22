import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartSendService {
  private vendaSendUrl = `${environment.URL}venda`;
  // private itemVendaSendUrl = `${environment.URL}venda`;

  constructor(private http: HttpClient) {}

  sendVenda(data: Object) {
    return this.http.post<any>('vendaSendUrl', data);
  }

  // sendItemVenda(data: Object) {
  //   return this.http.post<any>('itemVendaSendUrl', data);
  // }
}
