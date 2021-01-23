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
  id: any;
  nome: any;
  descricao: any;
  precoUnitario: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productListService: ProductListService
  ) {
    this.updateForm = this.formBuilder.group({
      productName: '',
      productDescription: '',
      productPrice: '',
    });
  }

  ngOnInit(): void {
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    const productId = productIdFromRoute ? parseInt(productIdFromRoute) : '';

    this.productListService.getProductById(productId).subscribe((res) => {
      if (res.body) {
        const { id, nome, descricao, precoUnitario } = res.body;
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
      }
    });
  }

  onSubmit(event: any) {
    const id = this.id;
    const productName = event.target.productName.value;
    const productDescription = event.target.productDescription.value;
    const productPrice = event.target.productPrice.value;

    console.log('id: ' + id);
    console.log('Nome: ' + productName);
    console.log('Descricao: ' + productDescription);
    console.log('Preco: ' + productPrice);

    const product = {
      nome: productName,
      descricao: productDescription,
      precoUnitario: productPrice,
    };

    this.updateForm.reset();

    this.productListService.updateProduct(id, product).subscribe((res) => {
      window.alert(`O produto foi atualizado!`);
    });
  }
}
