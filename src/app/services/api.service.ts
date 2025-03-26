import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Iproducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl="https://fakestoreapi.com/products"
  constructor(private _httpClient: HttpClient) { }
  public getProducts(): Observable<Iproducts[]>{
    return this._httpClient.get<Iproducts[]>(this.baseUrl)
  }
  public getProductById(id: number): Observable<Iproducts>{
    return this._httpClient.get<Iproducts>(`${this.baseUrl}/${id}`)
  }
  public getCategories(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`)

  }

}
