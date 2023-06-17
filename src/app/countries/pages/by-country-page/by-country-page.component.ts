import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',

})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  
  constructor(private countriesService: ContriesService){} 


  searchByCountry( term: string): void {
    this.countriesService.searchCountry(term).subscribe( countries =>{
        this.countries = countries
    } )
  }

}
