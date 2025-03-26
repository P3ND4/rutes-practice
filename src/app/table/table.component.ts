import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productList } from './table.mock';
import { CommonModule } from '@angular/common';
import { Iproducts } from '../models/product';
import { ApiService } from '../services/api.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  prodList: Iproducts[] = []
  constructor(private _apiService: ApiService){

  }

  ngOnInit(): void {
      this._apiService.getProducts().subscribe((data: Iproducts[]) => {
        this.prodList = data
      })
  }

}
