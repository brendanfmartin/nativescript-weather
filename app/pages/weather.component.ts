import { Component, OnInit } from "@angular/core";
import { CurrentConditions } from '../types/Weather';

@Component({
  selector: "weather",
  moduleId: module.id,
  templateUrl: "./weather.component.html",
})
export class WeatherComponent implements OnInit {

  currentConditions: CurrentConditions[];

  constructor() { }

  ngOnInit(): void {
    this.currentConditions = [
      {
        "LocalObservationDateTime": "2017-09-20T05:45:00+02:00",
        "EpochTime": 1505879100,
        "WeatherText": "Some clouds",
        "WeatherIcon": 36,
        "IsDayTime": false,
        "Temperature": {
          "Metric": {
            "Value": 16.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 62,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "MobileLink": "http://m.accuweather.com/en/al/fushe-verri/1557905/current-weather/1557905?lang=en-us",
        "Link": "http://www.accuweather.com/en/al/fushe-verri/1557905/current-weather/1557905?lang=en-us"
      }
    ]
  }
}