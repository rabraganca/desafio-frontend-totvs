import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";

import { Hotel } from './hotel';
import { HOTEIS } from './moke-hotel'

@Injectable()
export class StaticDataSource {
  private hoteis: Hotel[] = HOTEIS;

  getHoteis(): Observable<Hotel[]> {
    return from([this.hoteis]);
  }
}