import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { WeatherComponent } from './pages/weather.component';
import { WeatherService } from './services/weather.service';
import { LocationService } from './services/location.service';
import { Http } from '@angular/http';
import { NativeScriptHttpModule } from 'nativescript-angular';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    WeatherComponent
  ],
  providers: [
    ItemService,
    WeatherService,
    LocationService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class AppModule { }
