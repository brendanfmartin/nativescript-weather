import { Injectable } from "@angular/core";
import { LatLong } from '../types/Location';


@Injectable()
export class LocationService {
  private currentLocation: LatLong = {
    Latitude: 40,
    Longitude: 70
  };

  getCurrentLocation(): Promise<LatLong> {
    return Promise.resolve(this.currentLocation);
  }

}
