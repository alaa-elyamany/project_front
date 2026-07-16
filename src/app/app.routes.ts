import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { AboutUs } from './about-us/about-us';
import { Notfoundpage } from './notfoundpage/notfoundpage';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';
import { AdminProducts } from './admin-products/admin-products';
import { AddProduct } from './add-product/add-product';
import { AdminUsers } from './admin-users/admin-users';



export const routes: Routes = [
    {path:'',component:Home},
    {path:'home',component:Home},
    {path:'products',component:Products},
    {path:'about_us',component:AboutUs},
    {path:'login',component:Login},
    {path:'signup',component: Signup},
    {path:'dashboard',component:Dashboard},
    {path:'adminproducts',component:AdminProducts},
    {path:'addproduct',component:AddProduct},
    {path:'getusers',component:AdminUsers},
    {path:'**',component:Notfoundpage},
];
