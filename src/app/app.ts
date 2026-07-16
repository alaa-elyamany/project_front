// import { Component, signal } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
// import { Home } from './home/home';
// import { Products } from './products/products';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import{ChangeDetectorRef} from '@angular/core';



// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,Header,Footer,RouterLink,Sidebar],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('project_front');

// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private cdr: ChangeDetectorRef,private userService: UserService) {}

  isAdmin = false;

  ngOnInit() {
    this.userService.isAdmin.subscribe((status)=>{
      this.isAdmin=status;
    });
    this.userService.setStatus();
    this.cdr.detectChanges();
  }

}
