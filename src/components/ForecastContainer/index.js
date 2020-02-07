import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const ForecastContainer = ({ current, hourly }) => {
  return (
    <Container fluid>
      <div className='mt-3'>
        <h4>Current:</h4>
        {current}
      </div>
      <div className='mt-3'>
        <h4>Forecast:</h4>
        {hourly}
      </div>
    </Container>
  );
};

ForecastContainer.propTypes = {
  current: PropTypes.node.isRequired,
  hourly: PropTypes.node.isRequired
};
export default ForecastContainer;
