import { Injectable } from "@angular/core";
import { Hotel } from "./hotel";
import { StaticDataSource } from "./static.datasource";
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Injectable()
export class HotelRepository {
  private hoteis: Hotel[] = [];
  private listaHoteis: Hotel[] = [];
  private selectedOption: any;

  constructor(private dataSource: StaticDataSource) {
    dataSource.getHoteis().subscribe(hoteis => this.hoteis = hoteis);
  }

  getHoteis(title: string = null, id: number = null): Hotel[] {
    return this.hoteis.filter(el => title == null || el.title.toLowerCase().indexOf(title.toLowerCase()) > -1)
      .filter(el => id == null || el.id == id);
  }

  searchSelectedOption(event: TypeaheadMatch): void {
    this.listaHoteis = this.getHoteis(null, event.item.id);
  }

  getListaHoteis(): Hotel[] {
    return this.listaHoteis;
  }

  searchHoteis(title: string): void {
    this.listaHoteis = this.getHoteis(title);
  }
}