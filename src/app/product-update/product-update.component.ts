import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  updateForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productListService: ProductListService
  ) {
    this.updateForm = this.formBuilder.group({
      productName: '',
      productDescription: '',
    });
  }

  ngOnInit(): void {
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    const productId = productIdFromRoute ? parseInt(productIdFromRoute) : '';
    console.log('===============');
    console.log(productId);

    this.productListService.getProductById(productId);
  }

  onSubmit(event: any) {
    //
  }
}
