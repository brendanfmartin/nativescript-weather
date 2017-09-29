"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WeatherService = (function () {
    function WeatherService() {
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
        return Promise.resolve(this.currentConditions);
    };
    WeatherService = __decorate([
        core_1.Injectable()
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDO0lBREE7UUFFVSxzQkFBaUIsR0FBd0IsQ0FBQztnQkFDaEQsMEJBQTBCLEVBQUUsMkJBQTJCO2dCQUN2RCxXQUFXLEVBQUUsVUFBVTtnQkFDdkIsYUFBYSxFQUFFLGFBQWE7Z0JBQzVCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixXQUFXLEVBQUUsS0FBSztnQkFDbEIsYUFBYSxFQUFFO29CQUNiLFFBQVEsRUFBRTt3QkFDUixPQUFPLEVBQUUsSUFBSTt3QkFDYixNQUFNLEVBQUUsR0FBRzt3QkFDWCxVQUFVLEVBQUUsRUFBRTtxQkFDZjtvQkFDRCxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsTUFBTSxFQUFFLEdBQUc7d0JBQ1gsVUFBVSxFQUFFLEVBQUU7cUJBQ2Y7aUJBQ0Y7Z0JBQ0QsWUFBWSxFQUFFLHVGQUF1RjtnQkFDckcsTUFBTSxFQUFFLHlGQUF5RjthQUNsRyxDQUFDLENBQUM7SUFNTCxDQUFDO0lBSkMsNkNBQW9CLEdBQXBCLFVBQXFCLEdBQVk7UUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQXpCVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBMkIxQjtJQUFELHFCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEN1cnJlbnRDb25kaXRpb25zIH0gZnJvbSAnLi4vdHlwZXMvV2VhdGhlcic7XG5pbXBvcnQgeyBMYXRMb25nIH0gZnJvbSAnLi4vdHlwZXMvTG9jYXRpb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XG4gIHByaXZhdGUgY3VycmVudENvbmRpdGlvbnM6IEN1cnJlbnRDb25kaXRpb25zW10gPSBbe1xuICAgIFwiTG9jYWxPYnNlcnZhdGlvbkRhdGVUaW1lXCI6IFwiMjAxNy0wOS0yMFQwNTo0NTowMCswMjowMFwiLFxuICAgIFwiRXBvY2hUaW1lXCI6IDE1MDU4NzkxMDAsXG4gICAgXCJXZWF0aGVyVGV4dFwiOiBcIlNvbWUgY2xvdWRzXCIsXG4gICAgXCJXZWF0aGVySWNvblwiOiAzNixcbiAgICBcIklzRGF5VGltZVwiOiBmYWxzZSxcbiAgICBcIlRlbXBlcmF0dXJlXCI6IHtcbiAgICAgIFwiTWV0cmljXCI6IHtcbiAgICAgICAgXCJWYWx1ZVwiOiAxNi40LFxuICAgICAgICBcIlVuaXRcIjogXCJDXCIsXG4gICAgICAgIFwiVW5pdFR5cGVcIjogMTdcbiAgICAgIH0sXG4gICAgICBcIkltcGVyaWFsXCI6IHtcbiAgICAgICAgXCJWYWx1ZVwiOiA2NyxcbiAgICAgICAgXCJVbml0XCI6IFwiRlwiLFxuICAgICAgICBcIlVuaXRUeXBlXCI6IDE4XG4gICAgICB9XG4gICAgfSxcbiAgICBcIk1vYmlsZUxpbmtcIjogXCJodHRwOi8vbS5hY2N1d2VhdGhlci5jb20vZW4vYWwvZnVzaGUtdmVycmkvMTU1NzkwNS9jdXJyZW50LXdlYXRoZXIvMTU1NzkwNT9sYW5nPWVuLXVzXCIsXG4gICAgXCJMaW5rXCI6IFwiaHR0cDovL3d3dy5hY2N1d2VhdGhlci5jb20vZW4vYWwvZnVzaGUtdmVycmkvMTU1NzkwNS9jdXJyZW50LXdlYXRoZXIvMTU1NzkwNT9sYW5nPWVuLXVzXCJcbiAgfV07XG5cbiAgZ2V0Q3VycmVudENvbmRpdGlvbnMobG9jOiBMYXRMb25nKTogUHJvbWlzZTxDdXJyZW50Q29uZGl0aW9uc1tdPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmN1cnJlbnRDb25kaXRpb25zKTtcbiAgfVxuXG59XG4iXX0=