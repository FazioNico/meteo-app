import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeteoRoutingModule } from './meteo-routing.module';
import { MeteoPageComponent } from './components/meteo-page/meteo-page.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MeteoPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MeteoRoutingModule
  ]
})
export class MeteoModule { }
