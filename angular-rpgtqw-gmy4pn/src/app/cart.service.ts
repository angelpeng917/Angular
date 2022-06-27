import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
    providedIn: 'root'
  })
export class CartService {
  items: Product[] = [];   //定義一個 items 屬性來儲存購物車中當前產品的陣列

  addToCart(product: Product) {  //新增，將產品附加到 items 陣列中
    this.items.push(product);  
  }

  getItems() {  //返回，會收集使用者加到購物車中的商品，並返回每個商品及其數量
    return this.items;
  }

  clearCart() { //清除，返回一個空陣列
    this.items = [];
    return this.items;
  }
  getShippingPrices() {  //配置 CartService 以得到商品價格
      return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }
    
  constructor(
    private http: HttpClient   //注入 HttpClient 服務到你的服務中, 這樣你的應用可以獲取資料並且與外部API和資源互動。
  ) { }

}