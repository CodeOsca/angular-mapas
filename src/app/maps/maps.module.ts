import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MinMapComponent } from './component/min-map/min-map.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkerComponent } from './pages/marker/marker.component';
import { ZoonRangeComponent } from './pages/zoon-range/zoon-range.component';
import { PropertiesComponent } from './pages/properties/properties.component';


@NgModule({
  declarations: [
    MinMapComponent,
    FullScreenComponent,
    MarkerComponent,
    ZoonRangeComponent,
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
