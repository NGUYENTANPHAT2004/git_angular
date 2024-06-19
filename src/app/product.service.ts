import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/Product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http : HttpClient) {}
  Get_All_Products = (): Observable<any> => {
    return this.http.get(`${this.apiUrl}/products`);
  }
  Get_Product_By_ID = (id: string): Observable<any> => {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }
  add_Product = (data: Iproduct): Observable<any> => {
    return this.http.post(`${this.apiUrl}/products`,data);
  }
  Update_Product = (id: string, data: Iproduct): Observable<any> => {
    return this.http.put(`${this.apiUrl}/products/${id}`, data);
  }
  Delete_Product = (id: string): Observable<any> => {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }
}
