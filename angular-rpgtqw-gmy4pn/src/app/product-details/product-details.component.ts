import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product|undefined;
  
  constructor(
    private route: ActivatedRoute, //新增為建構函式括號內的引數，來把 ActivatedRoute 注入到 constructor() 中。
    private cartService: CartService //透過把購物車服務注入到這裡的 constructor() 中來注入它。
  ) { }
  addToCart(product: Product) {  //該方法會當前商品新增到購物車中
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;   //要訪問路由引數，我們使用 route.snapshot ，它是一個 ActivatedRouteSnapshot，其中包含有關該特定時刻的活動路由資訊。
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

}