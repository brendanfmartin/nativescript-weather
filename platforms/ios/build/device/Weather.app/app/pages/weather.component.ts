import { Component, OnInit } from "@angular/core";
import { CurrentConditions } from '../types/Weather';
import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';
import { LatLong } from '../types/Location';

@Component({
  selector: "weather",
  moduleId: module.id,
  templateUrl: "./weather.component.html",
})
export class WeatherComponent implements OnInit {

  currentConditions: CurrentConditions[];

  constructor(private weatherService: WeatherService,
              private locationService: LocationService) { }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.locationService.getCurrentLocation()
      .then((loc) => {
        this.weatherService.getCurrentConditions(loc)
          .then((conditions: CurrentConditions[]) => {
          console.log(conditions);
            this.currentConditions = conditions;
          });
      })
  }
}
