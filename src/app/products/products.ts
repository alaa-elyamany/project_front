import { ChangeDetectorRef, Component } from '@angular/core';
import { IProducts } from '../models/iproducts';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      const category=params['category'];
      if(category){
        this.getByCategory(category);
      }
      else{
        this.getProducts();
      }
    })

  }
 getProducts(){
      this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.productArr = res.data.Products;
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
  getByCategory(category:string){
    this.productService.getProductByCategory(category).subscribe({
      next:(res:any)=>{
        console.log(res);
        
        this.productArr=res.data.Products;
        this.cdr.detectChanges();
      },
       error: (err: any) => {
        console.error(err);
      },

    })
  }
  
}







