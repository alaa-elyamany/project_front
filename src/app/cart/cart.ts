import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { OrdeService } from '../services/orde-service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  Cart!:any[];
  price!:number;
  constructor(private cart:CartService,private cdr: ChangeDetectorRef,
    private orderService:OrdeService
  ){}
  ngOnInit(){
    this.getCart();

  }
  getCart(){
    this.cart.getCart().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.Cart=res.data.cart;
        this.price=res.totaiPrice;
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log(err);
        

      }
    })
  }
  deleteItem(id:string){
    this.cart.deleteItem(id).subscribe({
      next:(res:any)=>{
        this.getCart();
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log(err);
        
      }

    })

  }
  increasequantity(id:string,quantity:number){
    this.cart.updateItem(id,quantity).subscribe({
      next:(res:any)=>{
       
        this.getCart();
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log(err);
      }
    }
    )
  }
  decreasequantity(id:string,quantity:number){
    this.cart.updateItem(id,quantity).subscribe({
      next:(res:any)=>{
        this.getCart();
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  
}
checkout(){
  this.orderService.checkout().subscribe({
    next:(res:any)=>{
      console.log(res);
      
      this.getCart();
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
