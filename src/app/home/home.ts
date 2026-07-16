import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Reviews } from './reviews/reviews';

@Component({
  selector: 'app-home',
  imports: [Hero,Reviews],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
