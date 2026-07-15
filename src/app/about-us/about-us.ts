import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FoundingStory } from './founding-story/founding-story';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink,FoundingStory],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
