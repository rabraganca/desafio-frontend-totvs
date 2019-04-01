import { Component, Input } from '@angular/core';

import { Hotel } from '../../model/hotel';
import { HotelRepository } from "../../model/hotel.repository";

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent {

  @Input()
  item: Hotel;
  collapseHeaderIcon: string = 'fa fa-angle-down';
  collapseHeaderText: string = 'Ver ';

  constructor(private repository: HotelRepository) { }

  get listaHoteis(): Hotel[] {
    return this.repository.getListaHoteis();
  }

  onToggleCard(): void {
    if (this.collapseHeaderText === 'Ver ') {
      this.collapseHeaderIcon = 'fa fa-angle-up';
      this.collapseHeaderText = 'Ocultar ';
    } else {
      this.collapseHeaderIcon = 'fa fa-angle-down';
      this.collapseHeaderText = 'Ver ';
    }
  }
}
