
import { ChangeDetectorRef, Component } from '@angular/core';

import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

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
}





