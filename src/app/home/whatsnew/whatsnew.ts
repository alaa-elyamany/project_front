import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-whatsnew',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './whatsnew.html',
  styleUrl: './whatsnew.css',
})
export class Whatsnew implements OnInit{
  productArr:any[]=[];
  constructor(private productService:ProductService,private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
    this.getProducts();
  }

   getProducts(){
      this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.productArr = res.data.Products.slice(-8).reverse();
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
