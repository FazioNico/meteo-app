import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private _appId = 'e69064d639a2a2cd2f257cb59c476c6c';

  constructor(
    private _http: HttpClient
  ) { }

  get({latitude, longitude}: {latitude: number, longitude: number}) {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this._appId}&units=metric`);
  }
}
