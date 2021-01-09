import { Component, OnInit } from '@angular/core';

// import { products } from '../products';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // products = products;
  products: any = [];

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService
      .getProducts()
      .subscribe((products) => (this.products = products.body));
  }

  share() {
    window.alert('The product has been shared!');
  }

  getProducts(): void {
    this.products = this.productListService.getProducts();
  }
}
