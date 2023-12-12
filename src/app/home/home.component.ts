//Author: Kyle Hochdoerfer
//Title: home.component.ts
//Date: 12/04/23
//Description: Home component for loan-app

//Import Component, oninit, and form building components from Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Create and export the home component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Create a form group variable for the loan form
  loanForm: FormGroup;

  //Declare variables for the three input values from the loan form
  loanAmount: number;
  interestRate: number;
  years: number;

  //Declare variables to hold the loan calculation results
  payment: number;
  interest: number;

  //Create a constructor with a form builder as a parameter
  constructor(private fb: FormBuilder) {

   }

  //Oninit, initialize the loan form with default values in each field, with each input being required
  ngOnInit(): void {
    this.loanForm = this.fb.group({ loanAmount: ['', Validators.required ], interestRate: ['', Validators.required], years: ['', Validators.required]});
  }

  //Call get and return the form controls
  get form(){return this.loanForm.controls}

  //Create a function to calculate the monthly loan payment and total interest
  calculateLoan(loanAmount: number, interestRate: number, years: number){
    //Calculate the interest value and number of payments for the loan
    let interest = interestRate / 100 / 12;
    let payments = years * 12;

    //Calculate the monthly unrounded payment
    let x = Math.pow(1 + interest, payments);
    let unroundedPayment = (loanAmount*x*interest)/(x-1);

    //Display the monthly payment value to two decimal places
    this.payment = parseFloat(unroundedPayment.toFixed(2))

    //Calculate the total loan payment amount, with interest
    let total = this.payment * payments;

    //Calculate and display the amount of interest for the loan rounded to two decimal places
    this.interest = parseFloat((total - loanAmount).toFixed(2));
  }
}
