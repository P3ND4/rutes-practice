import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute){}
  ngOnInit(): void {
    this._route.params.subscribe(params=> {
      console.log(params["id"])
    })
  }
}
