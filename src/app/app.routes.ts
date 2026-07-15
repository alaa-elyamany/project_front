import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { AboutUs } from './about-us/about-us';
import { Notfoundpage } from './notfoundpage/notfoundpage';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'home',component:Home},
    {path:'products',component:Products},
    {path:'about_us',component:AboutUs},
    
    {path:'**',component:Notfoundpage},
];
