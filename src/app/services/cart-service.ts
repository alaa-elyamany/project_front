import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
     providedIn: 'root',
})
export class CartService {
    constructor(private HttpClient :HttpClient){}
    addToCart(id:string,quantity:number=1){
        const token=localStorage.getItem('token');
        
        return this.HttpClient.post('http://localhost:5000/api/v1/cart',{productId:id,quantity},
            {headers:{Authorization:`Bearer ${token}`}});
    }
    getCart(){
        const token=localStorage.getItem('token');
        return this.HttpClient.get('http://localhost:5000/api/v1/cart',
            {headers:{Authorization:`Bearer ${token}`}});
    }
    deleteItem(id:string){
        const token=localStorage.getItem('token');
        return this.HttpClient.delete('http://localhost:5000/api/v1/cart/remove',
            {headers:{Authorization:`Bearer ${token}`},body:{productId:id}});
    }
     updateItem(id:string,quantity:number){
        const token=localStorage.getItem('token');
        return this.HttpClient.patch('http://localhost:5000/api/v1/cart',
            {productId:id,quantity:quantity},{headers:{Authorization:`Bearer ${token}`}});
    }
    
    }


