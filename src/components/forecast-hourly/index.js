import React from 'react';
import PropTypes from 'prop-types';

import ForecastHourlyItem from '../forecast-hourly-item';
import { eachDay } from '../../helpers';

import { ReactComponent as Spinner } from '../spinner.svg';

const ForecastHourly = ({ data, loading }) => {
  if (loading) {
    return <Spinner />;
  } else if (!data && !loading) return null;

  return (
    <div style={styles}>
      {eachDay(data).map(day => (
        <ForecastHourlyItem data={day} key={Math.random() * 52 + 2} />
      ))}
    </div>
  );
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
