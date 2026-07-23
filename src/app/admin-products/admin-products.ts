import { ChangeDetectorRef, Component } from '@angular/core';
import { IProducts } from '../models/iproducts';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin-products',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './admin-products.html',
  styleUrls: ['./admin-products.css'],
})
export class AdminProducts implements OnInit {
  products!: IProducts[];
    selectedProduct: any = {};
selectedFile: File | null = null;

  constructor(
    private productService: ProductService,
    private cdRef: ChangeDetectorRef
  ) {}

 ngOnInit(): void {
  this.getProducts();
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



openModal(product: any) {
  this.selectedProduct = { ...product };
}

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}


  updateProduct() {
    const formupdate=new FormData();
    formupdate.append('name',this.selectedProduct.name);
    formupdate.append('price',this.selectedProduct.price);
    formupdate.append('category',this.selectedProduct.category);
    formupdate.append('description',this.selectedProduct.description);
    formupdate.append('stock',this.selectedProduct.stock);
    if(this.selectedFile){
        formupdate.append('image',this.selectedFile);
    }
  this.productService.updateProduct(this.selectedProduct._id,formupdate).subscribe({
    next: (res: any) => {
      
      this.getProducts(); 
      this.cdRef.detectChanges();
           Swal.fire({
        title: "Updated Successsfully!",
        icon: "success",
        draggable: true
      });
    },
    error: (err: any) => {
      console.error('Error updating product:', err);
    },
  });
}


}