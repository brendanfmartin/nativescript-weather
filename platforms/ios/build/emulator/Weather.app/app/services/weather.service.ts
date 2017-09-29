import { Injectable } from "@angular/core";
import { CurrentConditions } from '../types/Weather';
import { LatLong } from '../types/Location';


@Injectable()
export class WeatherService {
  private currentConditions: CurrentConditions[] = [{
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
        "Value": 67,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/al/fushe-verri/1557905/current-weather/1557905?lang=en-us",
    "Link": "http://www.accuweather.com/en/al/fushe-verri/1557905/current-weather/1557905?lang=en-us"
  }];

  getCurrentConditions(loc: LatLong): Promise<CurrentConditions[]> {
    return Promise.resolve(this.currentConditions);
  }

}
