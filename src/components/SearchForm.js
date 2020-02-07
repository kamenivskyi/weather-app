import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    location: 'lviv'
  };

  // handleChange = ({ target }) => {
  //   this.setState({ location: target.value });
  // };
  // onSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.location);
  // };

  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <>
        <form className='mb-3' onSubmit={onSubmit}>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              onChange={onChange}
              placeholder='type something..'
            />
            <div className='input-group-append'>
              <button className='btn btn-primary' type='submit'>
                Search
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SearchForm;
