import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FoundingStory } from './founding-story/founding-story';
import { OurPros } from './our-pros/our-pros';

@Component({
  selector: 'app-about-us',
  imports: [FoundingStory,OurPros],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
