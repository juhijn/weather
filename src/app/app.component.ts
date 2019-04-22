import { Component } from '@angular/core';
import { DataService } from './data.service';
import {WeatherComponent} from './weather/weather.component';
import { Clouds } from './weather/weather.component';
import { getLocaleDayNames } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';
  name: string;
   marks: any[];
   date1:number;
   cloudData: Object;

   
  constructor(private data: DataService) {
    
  }
  getData(){
    this.data.getFact(this.name).subscribe((d)=>{
         this.cloudData=d;
        
       console.log(this.cloudData);

     },
    (error)=>console.log(error));
  }
 
  
}
