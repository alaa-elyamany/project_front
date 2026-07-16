import { ChangeDetectorRef, Component } from '@angular/core';
import { IProducts } from '../models/iproducts';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products implements OnInit {
  productArr!: any[];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
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
    });
  }
}

// import { Component} from '@angular/core';
// import { IProducts } from '../models/iproducts';
// import { ProductService } from '../services/product-service';
// import { CommonModule } from '@angular/common';
// import { OnInit } from '@angular/core';

// @Component({
//   standalone:true,
//   selector: 'app-products',
//   imports:[CommonModule],
//   templateUrl: './products.html',
//   styleUrls: ['./products.css'],
// })

// export class Products {
//   productArr:any[]=[];

//   constructor(private productService: ProductService) {

//     this.productService.getProducts().subscribe({
//       next: (res:any) => {
//         this.productArr = res.data.Products;
//         console.log(this.productArr);
        
//       },
//       error: (err:any) => {
//         console.error(err);
//       },
//       complete: () => {
//         console.log('finish');
//       },

//     });
  
//   }
 

// }
// productArr: any[] = [];

// constructor(private productService: ProductService) {}

// ngOnInit(): void {
//   this.productService.getProducts().subscribe({
//     next: (res:any) => {
//       this.productArr = res.data.Products;
//       console.log(this.productArr);
      
//     },
//     error: (err) => {
//       console.log(err);
//     }
//   });
// }




