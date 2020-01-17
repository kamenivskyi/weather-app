import React, { Component } from 'react';
import WeatherService from '../services/weather-service';

class SearchForm extends Component {
  _apiBase = 'https://api.openweathermap.org/data/2.5';
  _apiKey = 'e6bc569497f75fdbd9c1b2e6a2537e83';
  service = new WeatherService();

  state = {
    location: 'lviv',
    current: {},
    items: [],
    icon: null,
    temperature: null,
    description: null
  };

  componentDidMount() {
    const { getForecast, getCurrent, getCurrentTest } = this.service;

    getForecast('London,us').then(data => {
      this.setState({ items: data.list });
      console.log(data);
    });

    getCurrent('lviv,ua').then(current => {
      this.setState({ current });
      console.log(current);
    });
  }

  handleError = err => {
    console.log('Error', err);
  };

  handleChange = ({ target }) => {
    this.setState({ location: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.service
      .getForecast(this.state.location)
      .then(data => this.setState({ items: data.list }));
    this.service
      .getCurrent(this.state.location)
      .then(current => this.setState({ current }));
  };

  render() {
    const {
      name,
      country,
      descr,
      timezone,
      iconUrl,
      pressure,
      humidity,
      sunrise,
      sunset,
      temp,
      coord
    } = this.state.current;

    return (
      <>
        <form className='mb-3' onSubmit={this.onSubmit}>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              onChange={this.handleChange}
              placeholder='type something..'
            />
            <div className='input-group-append'>
              <button className='btn btn-primary' type='submit'>
                Search
              </button>
            </div>
          </div>
        </form>

        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div>
                <img src={iconUrl} alt='' />
                <h5> {name} </h5>
                <p>{descr}</p>
                <p>{temp}</p>
                <p>Country: {country}</p>
                <div>Timezone: {timezone}</div>
                <p>Pressure: {pressure} hpa</p>
                <p>Humidity: {humidity} %</p>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              {this.state.items.map(item => {
                const { description, icon } = item.weather[0];
                return (
                  <div className='col-md-4 pb-3' key={Math.random()}>
                    <div className='card'>
                      <div className='card-img-top'>
                        <img
                          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                          alt='...'
                        />
                      </div>

                      <div className='card-body'>
                        <h5 className='card-title'>{item.dt_txt}</h5>
                        <p className='card-text'>{description}</p>
                        <p className='card-text'>
                          {Math.round(item.main.temp)} °C
                        </p>
                        <a href='#' className='btn btn-primary'>
                          More details
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchForm;
