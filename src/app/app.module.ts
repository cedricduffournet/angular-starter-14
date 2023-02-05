import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { API_URL } from '@shared/data-access/api-url.token';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: API_URL, useValue: 'https://api.betaseries.com' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
