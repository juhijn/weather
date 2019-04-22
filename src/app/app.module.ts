import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { WeatherComponent } from './weather/weather.component';
import { TextboxComponent } from './textbox/textbox.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    WeatherComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
