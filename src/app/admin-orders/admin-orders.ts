import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrdeService } from '../services/orde-service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-orders',
  imports: [FormsModule],
  templateUrl: './admin-orders.html',
  styleUrl: './admin-orders.css',
})
export class AdminOrders implements OnInit {
  ordersArr:any[]=[];
      selectedOrder: any = {};

  constructor(private orderService:OrdeService ,private cdr: ChangeDetectorRef){}
  ngOnInit(){
    this.getOrders();
  }
  getOrders(){
    this.orderService.getOrders().subscribe({
      next:(res:any)=>{
        this.ordersArr=res.data.orders;
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log(err);
        
      }

    })
  }openModal(order: any) {
    this.selectedOrder = { ...order };
  }
  
  
    updateStatus() {
    
      const statusupdate={
        status:this.selectedOrder.status
      };
     
    this.orderService.updateOrderStatus(this.selectedOrder._id,statusupdate).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: " Statys updated Successsfully!",
          icon: "success",
          draggable: true
        });
   
        this.getOrders();
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Error updating status:', err);
      },
    });
  }
  
  
}
