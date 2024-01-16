import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private modalService: ModalService,
  ) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    this.productService
      .create({
        id: 1,
        title: this.form.value.title as string,
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://tengrinews.kz/userdata/0.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
  ngOnInit(): void {}
}
