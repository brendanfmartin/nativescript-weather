import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { WeatherComponent } from './pages/weather.component';

const routes: Routes = [
    { path: "", redirectTo: "/weather", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "weather", component: WeatherComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }