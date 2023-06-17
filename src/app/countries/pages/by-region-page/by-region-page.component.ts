import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ContriesService } from '../../services/countries.service';

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',

})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  
  constructor(private countriesService: ContriesService){} 


  searchByRegion( term: string): void {
    this.countriesService.searchRegion(term).subscribe( countries =>{
        this.countries = countries
    } )
  }


}
