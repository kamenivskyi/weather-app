import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Header from './components/header';
import SearchForm from './components/search-form';
import ForecastContainer from './components/forecast-container';
import WeatherService from './services/weather-service';
import ForecastCurrent from './components/forecast-current';
import ForecastHourly from './components/forecast-hourly';

import './App.css';

class App extends Component {
  service = new WeatherService();

  state = {
    location: '',
    current: null,
    items: null,
    currentLoading: false,
    forecastLoading: false,
    error: false
  };

  componentDidMount() {
    const { getForecast, getCurrent } = this.service;

    this.setState({ currentLoading: true, forecastLoading: true });

    getCurrent('Lviv')
      .then(current => this.setState({ current, currentLoading: false }))
      .catch(this.onError);

    getForecast('Lviv')
      .then(data => this.setState({ items: data.list, forecastLoading: false }))
      .catch(this.onError);
  }

  onError = err => this.setState({ error: true, loading: true });

  onSearchLocation = value => {
    const { getForecast, getCurrent } = this.service;

    this.setState({ currentLoading: true, forecastLoading: true });

    getCurrent(value)
      .then(current => this.setState({ current, currentLoading: false }))
      .catch(this.onError);

    getForecast(value)
      .then(({ list }) =>
        this.setState({ items: list, forecastLoading: false })
      )
      .catch(this.onError);
  };

  render() {
    const {
      current,
      items,
      currentLoading,
      forecastLoading,
      error
    } = this.state;

    if (error) {
      return (
        <h4 className='text-primary text-center my-4'>
          Ooops! something went wrong!
        </h4>
      );
    }

    return (
      <div className='App'>
        <Container>
          <Header />
          <SearchForm
            onSubmit={this.onSearchLocation}
            onChange={this.handleChange}
          />
        </Container>

        <ForecastContainer
          current={<ForecastCurrent data={current} loading={currentLoading} />}
          hourly={<ForecastHourly data={items} loading={forecastLoading} />}
        />
      </div>
    );
  }
}

export default App;
