import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts = this.cartService.getShippingPrices();
  
  constructor(private cartService: CartService) { } //把購物車服務注入到 ShippingComponent 的 constructor() 建構函式中

  ngOnInit() {
  }

}