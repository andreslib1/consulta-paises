import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shered-search-box',
  templateUrl: './search-box.component.html',
 
})
export class SearchBoxComponent {

  @Output() searchEvent = new EventEmitter<string>();

  search(value: string) {
    this.searchEvent.emit(value);
  }
  @Input()
  public placeholder: string = ''; 


}
