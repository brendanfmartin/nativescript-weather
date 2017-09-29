"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weather_service_1 = require("../services/weather.service");
var location_service_1 = require("../services/location.service");
var WeatherComponent = (function () {
    function WeatherComponent(weatherService, locationService) {
        this.weatherService = weatherService;
        this.locationService = locationService;
        this.currentConditions = [];
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.init();
    };
    WeatherComponent.prototype.init = function () {
        this.locationService.getCurrentLocation();
        // .then((loc) => {
        //   this.weatherService.getCurrentConditions(loc)
        //     .then((conditions: CurrentConditions[]) => {
        //       this.currentConditions = conditions;
        //     });
        // })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWF0aGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrREFBNkQ7QUFDN0QsaUVBQStEO0FBUS9EO0lBSUUsMEJBQW9CLGNBQThCLEVBQzlCLGVBQWdDO1FBRGhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIcEQsc0JBQWlCLEdBQXdCLEVBQUUsQ0FBQztJQUdZLENBQUM7SUFFekQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTywrQkFBSSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQ3ZDLG1CQUFtQjtRQUNuQixrREFBa0Q7UUFDbEQsbURBQW1EO1FBQ25ELDZDQUE2QztRQUM3QyxVQUFVO1FBQ1YsS0FBSztJQUNULENBQUM7SUFuQlUsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDO3lDQUtvQyxnQ0FBYztZQUNiLGtDQUFlO09BTHpDLGdCQUFnQixDQW9CNUI7SUFBRCx1QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEN1cnJlbnRDb25kaXRpb25zIH0gZnJvbSAnLi4vdHlwZXMvV2VhdGhlcic7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExhdExvbmcgfSBmcm9tICcuLi90eXBlcy9Mb2NhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ3ZWF0aGVyXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vd2VhdGhlci5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjdXJyZW50Q29uZGl0aW9uczogQ3VycmVudENvbmRpdGlvbnNbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uU2VydmljZTogTG9jYXRpb25TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2F0aW9uU2VydmljZS5nZXRDdXJyZW50TG9jYXRpb24oKVxuICAgICAgLy8gLnRoZW4oKGxvYykgPT4ge1xuICAgICAgLy8gICB0aGlzLndlYXRoZXJTZXJ2aWNlLmdldEN1cnJlbnRDb25kaXRpb25zKGxvYylcbiAgICAgIC8vICAgICAudGhlbigoY29uZGl0aW9uczogQ3VycmVudENvbmRpdGlvbnNbXSkgPT4ge1xuICAgICAgLy8gICAgICAgdGhpcy5jdXJyZW50Q29uZGl0aW9ucyA9IGNvbmRpdGlvbnM7XG4gICAgICAvLyAgICAgfSk7XG4gICAgICAvLyB9KVxuICB9XG59XG4iXX0=