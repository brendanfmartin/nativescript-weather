import { Injectable } from "@angular/core";
import { CurrentConditions } from '../types/Weather';
import { LatLong } from '../types/Location';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

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

  constructor(private http: Http) {}

  public getCurrentConditions(loc: LatLong): Observable<any> {
    // return fetch('https://dataservice.accuweather.com/currentconditions/v1/1557905?apikey=g0hVyCYnRtCllD6exgGJ9W5oyZttrrCE')
    //   .then((r: Response) => {
    //     if (!r.ok) {
    //       throw new Error('Error fetching');
    //     }
    //     const response = r;
    //     console.log(r);
    //     console.log(r.json());
    //     return r.json();
    //   })
    //   .then((r: CurrentConditions[]) => {
    //     console.dir(r);
    //   })
    //   .catch((e: Error) => {
    //     return e;
    //   });

    console.log('test')

    return this.http.get('https://dataservice.accuweather.com/currentconditions/v1/1557905?apikey=g0hVyCYnRtCllD6exgGJ9W5oyZttrrCE')
      .map(res => res.json())
      .map(data => {
        console.log(data);
        return data;
      })
      .catch(this.handleErrors);

    // return Promise.resolve(this.currentConditions);

  }

  private handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}


// return this.http.get(Config.apiUrl + "Groceries", {
//   headers: headers
// })
//   .map(res => res.json())
//   .map(data => {
//     let groceryList = [];
//     data.Result.forEach((grocery) => {
//       groceryList.push(new Grocery(grocery.Id, grocery.Name));
//     });
//     return groceryList;
//   })
//   .catch(this.handleErrors);
// }
//
// handleErrors(error: Response) {
//   console.log(JSON.stringify(error.json()));
//   return Observable.throw(error);
// }