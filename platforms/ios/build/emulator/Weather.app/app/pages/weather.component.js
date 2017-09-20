"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WeatherComponent = (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
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
        ];
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: "weather",
            moduleId: module.id,
            templateUrl: "./weather.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
