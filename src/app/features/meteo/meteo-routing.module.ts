import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeteoPageComponent } from './components/meteo-page/meteo-page.component';


const routes: Routes = [
  {
    path: '',
    component: MeteoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
