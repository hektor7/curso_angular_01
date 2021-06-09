import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface WeatherInfo{
  city: string;
  temperature: string;
  status: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() city: string = '';
  @Input() temperature: string = '';
  @Input() status: string = '';

  @Output() temperatureChange = new EventEmitter<WeatherInfo>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement(): void{
    this.temperature = (parseInt(this.temperature, 10)+1).toString();
    this.temperatureChange.emit({
      city: this.city,
      temperature: this.temperature,
      status: this.status
    });//Cuando se cambia la temperatura se emite un evento con los datos del cambio de temperatura.
  }

  onDecrement(): void{
    this.temperature = (parseInt(this.temperature, 10)-1).toString();
    this.temperatureChange.emit({
      city: this.city,
      temperature: this.temperature,
      status: this.status
    });
  }


}
