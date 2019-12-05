import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

import { StoreModule } from '@ngrx/store';
import {reducer} from './reducer/app.reducer';
const NGRX_MODULE = [
  StoreModule.forRoot({counterState: reducer})
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NGRX_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
