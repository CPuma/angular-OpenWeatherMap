import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { fromEventPattern } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  private URI: string;
  private apikey = "a7d5139e01c8945c16cd51cd48fbc3ac";
  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apikey}&q=`;
  }

  getWeather(cityName: string, countryCode: string) {
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`, {});
  }
}
