import { Component } from '@angular/core';

import { Hotel } from '../../model/hotel';
import { HotelRepository } from "../../model/hotel.repository";

@Component({
  selector: 'app-result-search',
  templateUrl: './app-result-search.component.html',
  styleUrls: ['./app-result-search.component.css']
})
export class AppResultSearchComponent {

  constructor(private repository: HotelRepository) { }

  get listaHoteis(): Hotel[] {
    return this.repository.getListaHoteis();
  }
}