import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { products } from '../products';
import { ProductListService } from '../product-list.service';
import { Product } from '../product';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productListService: ProductListService
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');

    // Find the product that correspond with the id provided in route.
    this.productListService.getProducts().subscribe(
      (products) =>
        (this.product = products.body?.find((prod) => {
          return prod.id === Number(productIdFromRoute);
        }))
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }
}
