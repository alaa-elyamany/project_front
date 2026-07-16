import { ChangeDetectorRef, Component } from '@angular/core';
import { IProducts } from '../models/iproducts';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-admin-products',
  imports: [CommonModule,RouterLink],
  templateUrl: './admin-products.html',
  styleUrls: ['./admin-products.css'],
})
export class AdminProducts implements OnInit {
  products!: IProducts[];

  constructor(
    private productService: ProductService,
    private cdRef: ChangeDetectorRef
  ) {}

 ngOnInit(): void {
  this.getProducts();
  // this.updateProduct('64a0e7f3e4b0c3f1a2b5d6c', { name: 'Updated Product Name' });

}
getProducts() {
this.productService.getProducts().subscribe({
  next: (res: any) => {
    this.products = res.data.Products;
    console.log(this.products);
    this.cdRef.detectChanges();
  },
  error: (err: any) => {
    console.error(err);
  },
  complete: () => {
    console.log('finish');
  },
});
}
// updateProduct(id: string, data: any) {
//   this.productService.updateProduct(id, data).subscribe({
//     next: (res: any) => {
//       console.log('Product updated successfully:', res);
//       this.getProducts(); 
//       this.cdRef.detectChanges();
//     },
//     error: (err: any) => {
//       console.error('Error updating product:', err);
//     },
//   });
// }

deleteProduct(id: string) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You will delete this product!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#cb7eff',
    cancelButtonColor: 'rgb(241, 180, 214)',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {

    if (result.isConfirmed) {

      this.productService.deleteProduct(id).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getProducts();
          Swal.fire({
            title: 'Deleted!',
            text: 'Product has been deleted successfully.',
            icon: 'success'
          });
          this.cdRef.detectChanges();
        },

        error: (err: any) => {
          console.error(err);

          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete the product.',
            icon: 'error'
          });
        }
      });

    }

    });
  }

}