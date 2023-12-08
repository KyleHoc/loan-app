//Author: Kyle Hochdoerfer
//Title: about.component.ts
//Date: 12/04/23
//Description: About component for loan-app

//Import Component and Oninit from Angular
import { Component, OnInit } from '@angular/core';

//Create and export the about component
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
