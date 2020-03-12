import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./services/weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-weather-app";

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.getWeather("london", "uk").subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
