import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Reviews } from './reviews/reviews';
import { CategorysCards } from './categorys-cards/categorys-cards';

@Component({
  selector: 'app-home',
  imports: [Hero,Reviews,CategorysCards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
