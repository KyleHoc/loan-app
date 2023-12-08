//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 12/04/23
//Description: App component for loan-app

//Import Component from Angular
import { Component } from '@angular/core';

//Create and export the app component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Create a string variable to hold the assignment title
  title: string;

  //Declare a constructor that initializes the title to a string welcoming the user
  constructor(){
    this.title = "Welcome to the Loan Application"
  }
}
