import { Component, OnInit } from '@angular/core';

import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any = [];

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService
      .getProducts()
      .subscribe((products) => (this.products = products.body));
  }

  delete(product: any) {
    const productId = product.id;

    this.productListService.deleteProduct(productId).subscribe((res) => {});

    window.location.reload();
    window.alert('O produto foi deletado!');
  }

  update(product: any) {}

  getProducts(): void {
    this.products = this.productListService.getProducts();
  }
}
