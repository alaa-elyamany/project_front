import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
     providedIn: 'root',
})

export class ProductService {
   constructor(private HttpClient: HttpClient) {}

  
   getProducts(){
    return this.HttpClient.get('http://localhost:5000/api/v1/products');
  }
  updateProduct(id: string, data: any){
    const token=localStorage.getItem('token');
    return this.HttpClient.patch(`http://localhost:5000/api/v1/products/${id}`, data, {headers:{Authorization:`Bearer ${token}`}});
  
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
  getProductByCategory(category:string){
    return this.HttpClient.get(`http://localhost:5000/api/v1/products?category=${category}`);
  }

  }

