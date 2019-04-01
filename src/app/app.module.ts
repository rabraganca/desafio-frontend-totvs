import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelRepository } from "./model/hotel.repository";
import { StaticDataSource } from "./model/static.datasource";

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { AppResultSearchComponent } from './layouts/app-result-search/app-result-search.component';
import { AppCardComponent } from './layouts/app-card/app-card.component';
import { AppModalComponent } from './components/app-modal/app-modal.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppResultSearchComponent,
    AppCardComponent,
    AppModalComponent
  ],
  imports: [
    BrowserModule,
    TypeaheadModule.forRoot(),
    FormsModule
  ],
  providers: [HotelRepository, StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
