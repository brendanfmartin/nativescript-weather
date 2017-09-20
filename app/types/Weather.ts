import { Unit } from '../types/Unit';

export class Temperature {
  Metric: Unit;
  Imperial: Unit;
}

export class CurrentConditions {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  IsDayTime: boolean;
  Temperature: Temperature;
  MobileLink: string;
  Link: string;
}