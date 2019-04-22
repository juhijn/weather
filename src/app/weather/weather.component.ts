import { Component, OnInit } from '@angular/core';

export class Clouds {

  public arrayclouds: Object[];
 };
 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
