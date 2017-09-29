"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LocationService = (function () {
    function LocationService() {
        this.currentLocation = {
            Latitude: 40,
            Longitude: 70
        };
    }
    LocationService.prototype.getCurrentLocation = function () {
        return Promise.resolve(this.currentLocation);
    };
    LocationService = __decorate([
        core_1.Injectable()
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFEQTtRQUVVLG9CQUFlLEdBQVk7WUFDakMsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFNSixDQUFDO0lBSkMsNENBQWtCLEdBQWxCO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFSVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7T0FDQSxlQUFlLENBVTNCO0lBQUQsc0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGF0TG9uZyB9IGZyb20gJy4uL3R5cGVzL0xvY2F0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjdXJyZW50TG9jYXRpb246IExhdExvbmcgPSB7XG4gICAgTGF0aXR1ZGU6IDQwLFxuICAgIExvbmdpdHVkZTogNzBcbiAgfTtcblxuICBnZXRDdXJyZW50TG9jYXRpb24oKTogUHJvbWlzZTxMYXRMb25nPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmN1cnJlbnRMb2NhdGlvbik7XG4gIH1cblxufVxuIl19