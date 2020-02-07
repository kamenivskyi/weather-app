import React from 'react';

const ForecastContainer = ({ current, hourly }) => {
  return (
    <div>
      <div>
        <h4>Current:</h4>
        {current}
      </div>
      <div>
        <h4>Forecast:</h4>
        {hourly}
      </div>
    </div>
  );
};
export default ForecastContainer;
