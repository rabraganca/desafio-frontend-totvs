import { Component } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

import { Hotel } from '../../model/hotel';
import { HotelRepository } from "../../model/hotel.repository";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  constructor(private repository: HotelRepository) { }

  get hoteis(): Hotel[] {
    return this.repository.getHoteis();
  }

  searchSelectedOption(event: TypeaheadMatch): void {
    this.repository.searchSelectedOption(event);
  }

  searchHoteis(stringSearch: string): void {
    this.repository.searchHoteis(stringSearch);
  }
}
