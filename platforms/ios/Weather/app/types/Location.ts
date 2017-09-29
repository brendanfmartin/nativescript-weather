import { Unit } from './Unit';

export class Elevation {
  Metric: Unit;
  Imperial: Unit;
}

export class GeoPosition {
  Latitude: number;
  Longitude: number;
  Elevation: Elevation;
}

export class Location {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: any;
  Country: any;
  AdministrativeArea: any;
  TimeZone: any;
  GeoPosition: GeoPosition;
  IsAlias: boolean;
  SupplementalAdminAreas: any;
  DataSets: any[];
}

export class LatLong {
  Latitude: number;
  Longitude: number;
}