import { Component,ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user-service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required],
    });
  }


onSubmit(): void {
  if (this.loginForm.invalid) {
    
    this.loginForm.markAllAsTouched();
    Swal.fire({
  icon: "warning",
  title:"Missing data",
  text: "Please enter your email and password",
});
    return;
  }
  const load = this.loginForm.value;
  this.userService.loginUser(load).subscribe({
    next:(res:any)=>{
      Swal.fire({
  title: "Login Successsfully!",
  icon: "success",
  draggable: true
});
    localStorage.setItem('token', res.token);
    this.userService.setStatus();
      this.userService.isLoggedIn.next(true);
      const decoded: any = jwtDecode(res.token);
      if(decoded.role === 'admin'){
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/home']);
      }
      this.cdr.detectChanges();
    },
    error:(err)=>{
      console.log("error",err);
         Swal.fire({
  icon: "error",
  text: "Something went wrong! Password or email is incorrect",
});
    }
  });
}
}

