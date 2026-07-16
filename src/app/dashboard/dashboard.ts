import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user-service';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
   productArr: any[]=[];
    usersArr: any[]=[];

  constructor(private productService: ProductService, private userService: UserService,
    private cdr: ChangeDetectorRef){}
  
  ngOnInit(): void {
    this.getProducts();
    this.getUser();

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
  }


