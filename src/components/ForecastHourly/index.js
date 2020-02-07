import React from 'react';
import PropTypes from 'prop-types';

import { eachDay } from '../../helpers';
import ForecastHourlyItem from '../ForecastHourlyItem';

const ForecastHourly = ({ data }) => {
  if (data) {
    return (
      <div style={styles}>
        {eachDay(data).map(day => {
          return <ForecastHourlyItem data={day} key={Math.random} />;
        })}
      </div>
    );
  } else {
    return null;
  }
};

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px'
};

ForecastHourly.propTypes = {
  data: PropTypes.array
};
export default ForecastHourly;
