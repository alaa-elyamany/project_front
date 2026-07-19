import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [Footer,Header,RouterOutlet],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.css',
})
export class UserLayout {}

