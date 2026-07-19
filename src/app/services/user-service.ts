import { Injectable,} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { IUsers } from '../models/iusers';
import { jwtDecode } from 'jwt-decode';


@Injectable({
     providedIn: 'root',
})
export class UserService {
    constructor(private HttpClient: HttpClient) {}
    loginUser(load: { email: string; password: string }){
        return this.HttpClient.post('http://localhost:5000/api/v1/auth/signin', load);
    }
    signupUser(load:IUsers){
        return this.HttpClient.post('http://localhost:5000/api/v1/auth/signup', load);
    }
    getUsers(){
         return this.HttpClient.get('http://localhost:5000/api/v1/users');
    }

    isLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
    isAdmin=new BehaviorSubject<boolean>(false);
    setStatus(){
        const token = localStorage.getItem('token');
        if (token) {
        const decoded: any = jwtDecode(token);
         this.isAdmin .next(decoded.role==="admin");
    }else{
        this.isAdmin.next(false);
    }

    }
}


