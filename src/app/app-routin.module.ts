
import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomePagesComponent } from "./shered/pages/home-pages/home-pages.component";
import { AboutPageComponent } from "./shered/pages/about-page/about-page.component";
import { ContactPageComponent } from "./shered/pages/contact/contact.component";

const routes: Routes = [
//{
  //  path: 'home',
    //component: HomePagesComponent
//},
{
    path: 'about',
    component: AboutPageComponent
},
{
    path: 'contact',
    component: ContactPageComponent
},
{
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
},
{
    path: '**',
    redirectTo: 'countries/by-capital'
}
];
@NgModule({
    imports: [
        RouterModule.forRoot( routes ), 

    ],
    exports:[
       RouterModule, 
    ]
})

export class AppRoutingModule{}