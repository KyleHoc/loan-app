//Author: Kyle Hochdoerfer
//Title: home.component.ts
//Date: 12/04/23
//Description: Home component for loan-app

//Import Component and oninit from Angular
import { Component, OnInit } from '@angular/core';

//Create and export the home component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
