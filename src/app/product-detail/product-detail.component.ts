import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../table/table.mock';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  producto?: Product 
  productL = productList
  constructor(private _route: ActivatedRoute){}
  ngOnInit(): void {
    this._route.params.subscribe(params=> {
      this.producto = this.productL.find(product => product.id == params["id"])
    })
  }
}
