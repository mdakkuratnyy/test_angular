import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  standalone: true,
  styleUrls: ['./create-product.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  get title() {
    return this.form.controls.title as FormControl;
  }
  constructor() {}
  submit() {
    console.log(this.form.value);
  }
  ngOnInit(): void {}
}
