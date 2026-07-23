import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
     providedIn: 'root',
})
export class OrdeService {
    constructor(private HttpClient: HttpClient){}
    checkout(){
        const token=localStorage.getItem('token');
         return this.HttpClient.post('http://localhost:5000/api/v1/order',{},
            {headers:{Authorization:`Bearer ${token}`}});
    }
    getOrders(){
        const token=localStorage.getItem('token');
         return this.HttpClient.get('http://localhost:5000/api/v1/order',
            {headers:{Authorization:`Bearer ${token}`}});
    }
    updateOrderStatus(id:string,status:any){
        const token=localStorage.getItem('token');
         return this.HttpClient.patch(`http://localhost:5000/api/v1/order/update/${id}`,status,
            {headers:{Authorization:`Bearer ${token}`}});
    }

}
