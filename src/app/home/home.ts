import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Reviews } from './reviews/reviews';
import { CategorysCards } from './categorys-cards/categorys-cards';
import { Whatsnew } from './whatsnew/whatsnew';

@Component({
  selector: 'app-home',
  imports: [Hero,Reviews,CategorysCards,Whatsnew],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
