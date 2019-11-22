import React, { Component } from 'react';
const axios = require('axios');

class SearchForm extends Component {
  _apiBase = 'https://api.openweathermap.org';
  _apiKey = 'e6bc569497f75fdbd9c1b2e6a2537e83';

  state = {
    data: 'lviv'
  };

  componentDidMount() {
    this.fetchData(this.state.data);
  }

  handleError = err => {
    console.log('Error', err);
  };

  fetchData = query => {
    axios
      .get(`${this._apiBase}/data/2.5/weather?q=${query}&appid=${this._apiKey}`)
      .then(res => console.log(res.data))
      .catch(this.handleError);
  };

  handleChange = ({ target }) => {
    this.setState({ data: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.fetchData()
    this.fetchData(this.state.data);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            placeholder='type something..'
          />
        </form>
        <button type='submit'>Search</button>
      </>
    );
  }
}

export default SearchForm;
