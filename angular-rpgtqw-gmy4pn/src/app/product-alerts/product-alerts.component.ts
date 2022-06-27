import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
@Input() product!: Product;     /* 指出此屬性值要從本元件的父元件 ProductListComponent 中傳入*/
@Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}