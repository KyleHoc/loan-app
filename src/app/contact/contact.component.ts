//Author: Kyle Hochdoerfer
//Title: contact.component.ts
//Date: 12/04/23
//Description: Contact component for loan-app

//Import Component and Oninit from Angular
import { Component, OnInit } from '@angular/core';

//Create and export the contact component
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
