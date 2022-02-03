import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { style } from '@angular/animations';
import { tap } from 'rxjs';
import { Weather } from 'src/app/weather';

@Component({
  selector: 'weatherComponent',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {
  
  isSun: boolean = false;

  cityName: string = '';
  cityWeather: string = '';
  cityTemp: string = '';

  url_icon = ''
  url_img = '../../../assets/img/bg/Clouds.jpg'

  CloudsImg: string = "../../../assets/img/bg/Clouds.jpg"
  SnowImg: string = "../../../assets/img/bg/Snow.png"
  RainImg: string = "../../../assets/img/bg/rain.jpg"
  ClearImg: string = "../../../assets/img/bg/Clear.jpg"
  FogImg: string = "../../../assets/img/bg/fog.jpg"
  MistImg: string = "../../../assets/img/bg/mist.jpg"
  DrizzleImg: string = "../../../assets/img/bg/Drizzle.jpg"

  CloudsIcon: string = "../../../assets/img/weather-icons/wi-cloud.svg"
  SnowIcon: string = "../../../assets/img/weather-icons/wi-snow.svg"
  RainIcon: string = "../../../assets/img/weather-icons/wi-rain.svg"
  ClearIcon: string = "../../../assets/img/weather-icons/wi-day-sunny.svg"
  FogIcon: string = "../../../assets/img/weather-icons/wi-fog.svg"
  MistIcon: string = "../../../assets/img/weather-icons/wi-fog.svg"
  DrizzleIcon: string = "../../../assets/img/weather-icons/wi-showers.svg"

  currentWeather?: Weather;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.httpClient
        .get<Weather>(
          `http://localhost:3000/test?lat=${lat}&lon=${long}&units=metric&appid=d916bb262d7dc0b62e3bd99b9bc40bd0`
        )
        .pipe(tap(console.log))
        .subscribe((data:Weather) => {
          this.currentWeather = data
          this.getUrl(data.weatherName) 
        });
    });
  }


  convertTimeStamp(timeStamp:number) : Date{
    return new Date (timeStamp*1000);
  }

  roundTemp(temp:number){
    return Math.round(temp);
  }

  getUrl(condition: string){
    switch (condition) {

      case 'Clear': this.url_img = this.ClearImg
      this.url_icon = this.ClearIcon
      this.isSun = true
      break;
    
      case 'Snow': this.url_img = this.SnowImg
      this.url_icon = this.SnowIcon
      this.isSun = false
      break;

      case 'Rain': this.url_img = this.RainImg
      this.url_icon = this.RainIcon
      this.isSun = false
      break;

      case 'Fog': this.url_img = this.FogImg
      this.url_icon = this.FogIcon
      this.isSun = false
      break;

      case 'Drizzle': this.url_img = this.DrizzleImg
      this.url_icon = this.DrizzleIcon
      this.isSun = false
      break;

      case 'Clouds': this.url_img = this.CloudsImg
      this.url_icon = this.CloudsIcon
      this.isSun = false
      break;

      case 'Mist': this.url_img = this.MistImg
      this.url_icon = this.MistIcon
      this.isSun = false
      break;

      default: this.url_img = this.ClearImg
      this.url_icon = this.ClearIcon
      this.isSun = true
      break;
    }
  }

  loadParisName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=paris')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
      });
  }

  loadBordeauxName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=bordeaux')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
      });
  }

  loadStrasbourgName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=strasbourg')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
      });
  }

  loadToulouseName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=toulouse')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
      });
  }

  loadLilleName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=lille')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
      });
  }

  loadBrestName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=brest')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
        console.log(data.weatherName);
      });
  }

  loadMontpellierName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=montpellier')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
      });
  }

  loadDijonName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=dijon')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
      });
  }

  loadAnnecyName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=annecy')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
      });
  }

  loadAngersName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=angers')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
      });
  }

  loadQuimperName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=quimper')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
      });
  }

  loadChateaurouxName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=chateauroux')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
      });
  }

  loadMaPositionsName(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.httpClient
        .get<Weather>(
          `http://localhost:3000/test?lat=${lat}&lon=${long}&units=metric&appid=d916bb262d7dc0b62e3bd99b9bc40bd0`
        )
        .subscribe((data) => {
          this.currentWeather = data
          this.getUrl(data.weatherName)
        });
    });


  }
}
