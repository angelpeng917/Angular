import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();  //定義 items 屬性，以便把商品存放在購物車中
  checkoutForm = this.formBuilder.group({ //收集使用者的姓名和地址
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here 該方法允許使用者提交其姓名和地址
    this.items = this.cartService.clearCart();  //重置表單並清除購物車
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}