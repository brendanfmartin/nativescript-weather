"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weather_service_1 = require("../services/weather.service");
var location_service_1 = require("../services/location.service");
var WeatherComponent = (function () {
    function WeatherComponent(weatherService, locationService) {
        this.weatherService = weatherService;
        this.locationService = locationService;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.init();
    };
    WeatherComponent.prototype.init = function () {
        var _this = this;
        this.locationService.getCurrentLocation()
            .then(function (loc) {
            _this.weatherService.getCurrentConditions(loc)
                .then(function (conditions) {
                console.log(conditions);
                _this.currentConditions = conditions;
            });
        });
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: "weather",
            moduleId: module.id,
            templateUrl: "./weather.component.html",
        }),
        __metadata("design:paramtypes", [weather_service_1.WeatherService,
            location_service_1.LocationService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWF0aGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrREFBNkQ7QUFDN0QsaUVBQStEO0FBUS9EO0lBSUUsMEJBQW9CLGNBQThCLEVBQzlCLGVBQWdDO1FBRGhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRXpELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU8sK0JBQUksR0FBWjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRTthQUN0QyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7aUJBQzFDLElBQUksQ0FBQyxVQUFDLFVBQStCO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBcEJVLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQzt5Q0FLb0MsZ0NBQWM7WUFDYixrQ0FBZTtPQUx6QyxnQkFBZ0IsQ0FxQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDdXJyZW50Q29uZGl0aW9ucyB9IGZyb20gJy4uL3R5cGVzL1dlYXRoZXInO1xuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy93ZWF0aGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXRMb25nIH0gZnJvbSAnLi4vdHlwZXMvTG9jYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwid2VhdGhlclwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3dlYXRoZXIuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY3VycmVudENvbmRpdGlvbnM6IEN1cnJlbnRDb25kaXRpb25zW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlOiBMb2NhdGlvblNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldEN1cnJlbnRMb2NhdGlvbigpXG4gICAgICAudGhlbigobG9jKSA9PiB7XG4gICAgICAgIHRoaXMud2VhdGhlclNlcnZpY2UuZ2V0Q3VycmVudENvbmRpdGlvbnMobG9jKVxuICAgICAgICAgIC50aGVuKChjb25kaXRpb25zOiBDdXJyZW50Q29uZGl0aW9uc1tdKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coY29uZGl0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb25kaXRpb25zID0gY29uZGl0aW9ucztcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gIH1cbn1cbiJdfQ==