import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { FormBuilder } from '@angular/forms';

import { CartSendService } from '../cart-send.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  items: Product[] = [];
  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private cartSendService: CartSendService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(event: any) {
    const name = event.target.name.value;
    const address = event.target.address.value;

    const items = this.items;

    for (const item of items) {
      const { id: itemId, precoUnitario } = item;

      const insertVenda = {
        data: new Date(),
        total: precoUnitario,
        clientId: 1,
      };

      this.cartSendService.sendVenda(insertVenda).subscribe(() => {});
    }

    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    window.alert(`Seu pedido foi enviado!`);
  }
}
