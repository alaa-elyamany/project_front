import { ChangeDetectorRef, Component } from '@angular/core';
import{FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addProdForm:FormGroup;
  selectedFile!:File;
  onFileSelected(event: any): void {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
  }
}
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService:ProductService,
    private cdr: ChangeDetectorRef,
  )
  {
    this.addProdForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      category:['',Validators.required],
      description:['',[Validators.required,Validators.maxLength(1000)]],
      price:['',[Validators.required,Validators.min(0)]],
      stock:['',[Validators.required,Validators.min(0)]],
    });
  }
  onSubmit(): void {
      if (this.addProdForm.invalid) {
        this.addProdForm.markAllAsTouched();
        Swal.fire({
      icon: "warning",
      title:"Missing data",
      text: "Please fill in all required fields",
    });
        return;
      }
      const formData = new FormData();

formData.append('name', this.addProdForm.value.name);
formData.append('category', this.addProdForm.value.category);
formData.append('description', this.addProdForm.value.description);
formData.append('price', this.addProdForm.value.price);
formData.append('stock', this.addProdForm.value.stock);

if (this.selectedFile) {
  formData.append('imageUrl', this.selectedFile);
}
      
      this.productService.addProduct(formData).subscribe({
        next:(res:any)=>{
          Swal.fire({
      title: "Product added Successsfully!",
      icon: "success",
      draggable: true
    });
          this.router.navigate(['/adminproducts']);
           this.cdr.detectChanges();
        },
        error:(err)=>{
             Swal.fire({
      icon: "error",
      title: "Added Producted Failed!",
      text: err.error.message || "Something went wrong! Please try again.",
    });
        }
      });
    }
}
