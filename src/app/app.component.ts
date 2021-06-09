import { Component } from '@angular/core';
import { WeatherInfo } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app0';
  log: string = '';

  onChange(wi: WeatherInfo): void{
    console.log(wi);
    //this.log += wi.city + ' ' + wi.temperature + ' ' + wi.status;
    this.log += `${wi.city} ${wi.temperature}ºC ${wi.status}`;
  }
}
