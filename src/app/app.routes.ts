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
import { UserLayout } from './user-layout/user-layout';
import { AdminLayout } from './admin-layout/admin-layout';
import { ProductDetails } from './product-details/product-details';
import { Cart } from './cart/cart';
import { AdminOrders } from './admin-orders/admin-orders';



export const routes: Routes = [

    {path:'login',component:Login},
    {path:'signup',component: Signup},
    {path:'',component:UserLayout,children:[
        {path:'',component:Home},
        {path:'home',component:Home},
        {path:'products',component:Products},
        {path:'about_us',component:AboutUs},
        {path:'products/:id',component:ProductDetails},
        {path:'cart',component:Cart}
    ]},
    {path:'',component:AdminLayout,children:[
        {path:'dashboard',component:Dashboard},
        {path:'adminproducts',component:AdminProducts},
        {path:'addproduct',component:AddProduct},
        {path:'getusers',component:AdminUsers},
        {path:'adminorders',component:AdminOrders}
    ]},
    {path:'**',component:Notfoundpage},
];
