import React from 'react';
import { eachDay } from '../../helpers';
import ForecastHourlyItem from './ForecastHourlyItem';

const ForecastHourly = ({ data }) => {
  return (
    <div style={styles}>
      {data.length > 0 &&
        eachDay(data).map(day => (
          <ForecastHourlyItem data={day} key={Math.random} />
        ))}
    </div>
  );
};

const styles = {
  display: 'flex',
  justifyContent: 'space-between'
};
export default ForecastHourly;
