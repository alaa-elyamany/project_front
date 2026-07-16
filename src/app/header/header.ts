import { Component,ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router: Router, private userService: UserService,
     private cdr: ChangeDetectorRef,
  ) {}


ngOnInit(): void {
  this.userService.isLoggedIn.subscribe((status) => {
    console.log('isLoggedIn status:', status);
    this.isLoggedIn = status;
  });
}

logout(): void {
  Swal.fire({
    title: "Are you sure?",
    text: "You will log out!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {

    if (result.isConfirmed) {

      localStorage.removeItem('token');
      this.userService.setStatus();
      this.userService.isLoggedIn.next(false);
      this.cdr.detectChanges();

      Swal.fire({
        title: "Logged out!",
        text: "You have been logged out.",
        icon: "success"
      }).then(() => {
        this.router.navigate(['/login']);
      });
    }

  });
}
}
