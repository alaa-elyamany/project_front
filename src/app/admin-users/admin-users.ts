
import { ChangeDetectorRef, Component } from '@angular/core';

import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { UserService } from '../services/user-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-users',
  imports: [CommonModule],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsers implements OnInit {
  usersArr: any[]=[];
  constructor(
    private userService: UserService,private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
      this.getUsers();
    
    }
    getUsers(){
      this.userService.getUsers().subscribe({
        next: (res: any) => {
          this.usersArr = res.data.user;
          console.log(this.usersArr);
          this.cdr.detectChanges();
        },
        error: (err: any) => {
          console.error(err);
        },
        complete: () => {
          console.log('finish');
        },
      });

    }

    deleteUser(id: string) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You will delete this user!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#cb7eff',
        cancelButtonColor: 'rgb(241, 180, 214)',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.userService.deleteUsers(id).subscribe({
            next: (res: any) => {
              console.log(res);
              this.getUsers();
              Swal.fire({
                title: 'Deleted!',
                text: 'User has been deleted successfully.',
                icon: 'success'
              });
             this.cdr.detectChanges();
            },
    
            error: (err: any) => {
              console.error(err);
              Swal.fire({
                title: 'Error!',
                text: 'Failed to delete the user.',
                icon: 'error'
              });
            }
          });
    
        }
    
        });
      }
}





