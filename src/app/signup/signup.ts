import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user-service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signup',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.loginForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      Swal.fire({
    icon: "warning",
    title:"Missing data",
    text: "Please fill in all required fields",
  });
      return;
    }
    const load = this.loginForm.value;
    console.log(load);
    
    this.userService.signupUser(load).subscribe({
      next:(res:any)=>{
        Swal.fire({
    title: "Signup Successsfully!",
    icon: "success",
    draggable: true
  });
        localStorage.setItem('token', res.token);
        this.router.navigate(['/login']);
         this.cdr.detectChanges();
      },
      error:(err)=>{
           Swal.fire({
    icon: "error",
    title: "Signup Failed!",
    text: err.error.message || "Something went wrong! Please try again.",
  });
      }
    });
  }
}
