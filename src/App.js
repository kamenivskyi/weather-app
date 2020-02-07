import React, { Component } from 'react';

import { Header } from './components/Header';
import SearchForm from './components/SearchForm';
import ForecastContainer from './components/Forecast/ForecastContainer';
import WeatherService from './services/weather-service';
import ForecastCurrent from './components/Forecast/ForecastCurrent';
import ForecastHourly from './components/Forecast/ForecastHourly';

import './App.css';

class App extends Component {
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

    getForecast('London,us').then(data => this.setState({ items: data.list }));

    getCurrent('lviv,ua').then(current => this.setState({ current }));
  }

  handleError = err => {
    console.log('Error', err);
  };

  onSearchLocation = e => {
    e.preventDefault();
    const { getForecast, getCurrent } = this.service;
    const { location } = this.state;

    getForecast(location).then(({ list }) => this.setState({ items: list }));
    getCurrent(location).then(current => this.setState({ current }));
  };

  handleChange = ({ target }) => {
    this.setState({ location: target.value });
  };

  render() {
    const { current, items } = this.state;
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <SearchForm
            onSubmit={this.onSearchLocation}
            onChange={this.handleChange}
          />
        </div>
        <div className='container-fluid'>
          <ForecastContainer
            current={<ForecastCurrent data={current} />}
            hourly={<ForecastHourly data={items} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
