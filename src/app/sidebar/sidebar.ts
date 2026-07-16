import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user-service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  constructor(
    private router: Router,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  logout(){
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
