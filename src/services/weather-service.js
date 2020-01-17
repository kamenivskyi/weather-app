import axios from 'axios';

class WeatherService {
  _apiBase = 'https://api.openweathermap.org/data/2.5';
  _apiKey = 'e6bc569497f75fdbd9c1b2e6a2537e83';
  _iconBase = 'http://openweathermap.org/img/wn';

  getResource = async url => {
    const res = await axios
      .get(
        `${this._apiBase}${url}&mode=json&units=metric&appid=${this._apiKey}`
      )
      .catch(err => console.log('Error: ', err));
    return res.data;
  };

  getForecast = async name => {
    const res = await this.getResource(`/forecast?q=${name}`);
    return res;
  };
  getCurrent = async name => {
    const res = await this.getResource(`/weather?q=${name}`);
    return this._simplifyObjCurrent(res);
  };
  getCurrentTest = async name => {
    const res = await this.getResource(`/weather?q=${name}`);
    return res;
  };
  getById = id => {
    return this.getResource(`/forecast?id=${id}`);
  };

  _simplifyObjCurrent = obj => {
    return {
      id: obj.id,
      coord: obj.coord,
      humidity: obj.main.humidity,
      pressure: obj.main.pressure,
      name: obj.name,
      clouds: obj.clouds.all,
      country: obj.sys.country,
      descr: obj.weather[0].description,
      visibility: obj.visibility,
      windSpeed: obj.wind.speed,
      windDeg: obj.wind.deg,
      timezone: obj.timezone,
      sunrise: this._convertToTime(obj.sys.sunrise),
      sunset: this._convertToTime(obj.sys.sunset),
      temp: Math.round(obj.main.temp),
      tempMin: Math.round(obj.main.temp_min),
      tempMax: Math.round(obj.main.temp_max),
      iconUrl: this._getIconUrl(obj.weather[0].icon)
    };
  };
  _simplifyObjForecast = obj => {
    return {};
  };

  _convertToTime = value => {
    const date = new Date(value * 1000);
    const hours = this._addZero(date.getHours());
    const minutes = this._addZero(date.getMinutes());
    const time = `${hours}:${minutes}`;

    return time;
  };

  _addZero = value => {
    if (value.toString().length < 2) {
      value = '0' + value;
    }
    return value;
  };

  _getIconUrl = iconCode => {
    return `${this._iconBase}/${iconCode}@2x.png`;
  };
}
export default WeatherService;
