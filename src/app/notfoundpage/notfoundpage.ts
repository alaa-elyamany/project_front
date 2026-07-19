import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfoundpage',
  imports: [RouterLink],
  templateUrl: './notfoundpage.html',
  styleUrl: './notfoundpage.css',
})
export class Notfoundpage {
  constructor(private location:Location){}
  goback(){
    this.location.back();
  }
}
