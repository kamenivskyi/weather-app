import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class SearchForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    location: ''
  };

  handleChange = ({ target }) => {
    this.setState({ location: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.location);
    this.setState({ location: '' });
  };

  render() {
    const { location } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup>
          <Form.Control
            type='search'
            onChange={this.handleChange}
            value={location}
            placeholder='get forecast..'
          />
          <InputGroup.Append>
            <Button variant='danger' type='submit'>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

export default SearchForm;
