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
  // @ViewChild('name') name: ElementRef;
  items: Product[] = [];
  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private cartSendService: CartSendService
  ) {
    this.checkoutForm = this.formBuilder.group({
      clienteId: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(event: any) {
    const clienteId = event.target.clienteId.value;
    const items = this.items;

    let total = 0;
    for (const item of items) {
      const { precoUnitario } = item;
      total += precoUnitario;
    }

    const venda = {
      data: new Date(),
      total,
      cliente: {
        id: clienteId,
      },
    };

    this.cartSendService.registerSale(venda).subscribe((res) => {
      for (const item of items) {
        const { id: itemId, precoUnitario } = item;

        const itemVenda = {
          quantidade: 1,
          valorUnitario: precoUnitario,
          produto: {
            id: itemId,
          },
          venda: {
            id: res.id,
          },
        };

        this.cartSendService
          .registerItemVenda(itemVenda)
          .subscribe((res) => {});
      }
    });

    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    this.cartService.getCliente(clienteId).subscribe((res) => {
      window.alert(`${res.nome}, seu pedido foi registrado!`);
    });
  }
}
