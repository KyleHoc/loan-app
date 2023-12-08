//Author: Kyle Hochdoerfer
//Title: app-routing.module.ts
//Date: 12/04/23
//Description: Routing for loan app

//Import ngmodule, routes, and all app components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//Declare routes for the application
const routes: Routes = [
  {
    //Set home as the default route
    path: '',
    component: HomeComponent
  },
  {
    //Create the non-default home component route
    path: 'home',
    component: HomeComponent
  },
  {
    //Create the contact component route
    path: "contact",
    component: ContactComponent
  },
  {
    //Create the about component route
    path: "about",
    component: AboutComponent
  }
];

//Declare and export app routing module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
