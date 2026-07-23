import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user-service';
import { OrdeService } from '../services/orde-service';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
   productArr: any[]=[];
    usersArr: any[]=[];
    ordersArr:any[]=[];
     orderArr:any[]=[];

  constructor(private productService: ProductService, private userService: UserService,
    private cdr: ChangeDetectorRef, private orderService:OrdeService){}
  
  ngOnInit(): void {
    this.getProducts();
    this.getUser();
    this.getallOrder();

  }
  getProducts(){

    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.productArr = res.data.Products;
        console.log(this.productArr);
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('finish');
      },
    })
  }
  getUser(){
    
     this.userService.getUsers().subscribe({
       next: (res: any) => {
         this.usersArr = res.data.user;
         console.log(this.usersArr);
         this.cdr.detectChanges();
       },
       error: (err: any) => {
         console.error(err);
       },
       complete: () => {
         console.log('finish');
       },
     });
   }
   getallOrder(){
    this.orderService.getOrders().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.orderArr=res.data.orders;
        this.ordersArr=res.data.orders.slice(-5).reverse();
        this.cdr.detectChanges();
      },
      error: (err: any) => {
         console.error(err);
       }

    })
   }
  }


