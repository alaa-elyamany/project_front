import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../services/product-service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink,CurrencyPipe,CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  productId:string='';
  product:any={};
  productArr:any=[];

  constructor(private serviceProduct:ProductService,private route:ActivatedRoute,
    private cdr: ChangeDetectorRef,private serviceCart:CartService){}
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      this.productId=params.get('id')||'';
      console.log(this.productId);
      
        this.getproduct();
    })


  }
  getproduct(){
    this.serviceProduct.getProductById(this.productId).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.product=res.data.product;
        console.log(this.product);
        this.getsimilarProducts();
        this.cdr.detectChanges();

      },
      error:(err)=>{
        console.log(err);
        
      },
    })
  }
  getsimilarProducts(){
     this.serviceProduct.getProductByCategory(this.product.category).subscribe({
      next:(res:any)=>{
        console.log(res);
        
       this.productArr = res.data.Products
  .filter((p: any) => p._id !== this.product._id)
  .slice(0, 4);
        console.log(this.productArr);
        
        this.cdr.detectChanges();
      },
       error: (err: any) => {
        console.error(err);
      },

    })
  }
  addtoCart(){
    this.serviceCart.addToCart(this.product._id).subscribe({
      next:(res:any)=>{
        console.log(res);
         Swal.fire({
          title: "Added Successsfully to the cart!",
          icon: "success",
          draggable: true
        });
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  
}
