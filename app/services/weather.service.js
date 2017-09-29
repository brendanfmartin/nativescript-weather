"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.currentConditions = [{
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
    }
    WeatherService.prototype.getCurrentConditions = function (loc) {
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
        console.log('test');
        return this.http.get('https://dataservice.accuweather.com/currentconditions/v1/1557905?apikey=g0hVyCYnRtCllD6exgGJ9W5oyZttrrCE')
            .map(function (res) { return res.json(); })
            .map(function (data) {
            console.log(data);
            return data;
        })
            .catch(this.handleErrors);
        // return Promise.resolve(this.currentConditions);
    };
    WeatherService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    WeatherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
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
