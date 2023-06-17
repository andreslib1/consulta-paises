import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountriesRoutingModule } from './countries.routing.module';
import { SheredModule } from '../shered/shered.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SheredModule,
    
  ]
})
export class CountriesModule { }
