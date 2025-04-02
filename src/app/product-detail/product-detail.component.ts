import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../table/table.mock';
import { Iproducts } from '../models/product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  producto?: Iproducts 
  constructor(private _route: ActivatedRoute, private _apiService: ApiService){}
  ngOnInit(): void {
    this._route.params.subscribe(params=> {
      this._apiService.getProductById(params['id']).subscribe((prod: Iproducts) =>{
        this.producto = prod
      })
    })
  }
}
