import { inject, Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

}
