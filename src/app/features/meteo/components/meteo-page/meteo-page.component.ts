import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../../service/open-weather/open-weather.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GeolocationService } from '../../service/geo/geolocation.service';

@Component({
  selector: 'app-meteo-page',
  templateUrl: './meteo-page.component.html',
  styleUrls: ['./meteo-page.component.scss'],
})
export class MeteoPageComponent implements OnInit {

  public meteoData$: Observable<any>;

  constructor(
    private _geoService: GeolocationService,
    private _meteoService: OpenWeatherService
  ) { }

  async ngOnInit() {
    // get user curent position
    const position = await this._geoService.getCurrentPosition().catch(err => err);
    console.log('position: ', position);
    // get meteo from Service API
    this.meteoData$ = this._meteoService.get(position.coords).pipe(
      tap(res => console.log('meteoData: ', res))
    );
  }

}
