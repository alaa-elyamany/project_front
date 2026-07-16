import { inject, Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from '../models/iproducts';


@Injectable({
     providedIn: 'root',
})
// @Service()
export class ProductService {
   constructor(private HttpClient: HttpClient) {}
  // private http=inject(HttpClient);
  
   getProducts(){
    return this.HttpClient.get('http://localhost:5000/api/v1/products');
  }
  updateProduct(id: string, data: any){
    return this.HttpClient.put(`http://localhost:5000/api/v1/products/${id}`, data);
  }
  deleteProduct(id: string) {
    return this.HttpClient.delete(`http://localhost:5000/api/v1/products/${id}`);
  }
  addProduct(load:FormData){
    return this.HttpClient.post(`http://localhost:5000/api/v1/products`,load);
  }
  getProductById(id:string){
    return this.HttpClient.get(`http://localhost:5000/api/v1/products/${id}`);
  }

  }

