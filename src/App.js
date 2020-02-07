import React, { Component } from 'react';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ForecastContainer from './components/ForecastContainer';
import WeatherService from './services/weather-service';
import ForecastCurrent from './components/ForecastCurrent';
import ForecastHourly from './components/ForecastHourly';
import Container from 'react-bootstrap/Container';

import './App.css';

class App extends Component {
  service = new WeatherService();

  state = {
    location: 'lviv',
    current: null,
    items: null
  };

  componentDidMount() {
    const { getForecast, getCurrent } = this.service;

    getForecast('London,us').then(data => this.setState({ items: data.list }));

    getCurrent('lviv,ua').then(current => this.setState({ current }));
  }

  handleError = err => {
    console.log('Error', err);
  };

  onSearchLocation = value => {
    const { getForecast, getCurrent } = this.service;

    getForecast(value).then(({ list }) => this.setState({ items: list }));
    getCurrent(value).then(current => this.setState({ current }));
  };

  render() {
    const { current, items } = this.state;

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
          current={<ForecastCurrent data={current} />}
          hourly={<ForecastHourly data={items} />}
        />
      </div>
    );
  }
}

export default App;
