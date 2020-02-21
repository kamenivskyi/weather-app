import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import { ReactComponent as Spinner } from '../spinner.svg';

const ForecastCurrent = ({ data, loading }) => {
  if (loading) {
    return <Spinner />;
  } else if (!data && !loading) return null;

  const {
    name,
    country,
    descr,
    timezone,
    iconUrl,
    pressure,
    humidity,
    sunrise,
    sunset,
    temp,
    coord
  } = data;

  return (
    <ListGroup horizontal style={{ overflow: 'auto' }}>
      <ListGroup.Item>
        <Card.Img
          src={iconUrl}
          style={{ minHeight: '99px', minWidth: '99px' }}
        />
      </ListGroup.Item>

      <ListGroup.Item className='font-weight-bold'>
        {name}, {country}
      </ListGroup.Item>

      <ListGroup.Item>{temp} &#8451;</ListGroup.Item>
      <ListGroup.Item>{descr}</ListGroup.Item>
      <ListGroup.Item>Pressure: {pressure} hpa</ListGroup.Item>
      <ListGroup.Item>Humidity: {humidity}&#37;</ListGroup.Item>
      <ListGroup.Item>Sunrise: {sunrise}</ListGroup.Item>
      <ListGroup.Item>Sunset: {sunset}</ListGroup.Item>
      <ListGroup.Item>Timezone: {timezone}</ListGroup.Item>

      {coord && (
        <ListGroup.Item>
          Geo coord: [{coord.lat},{coord.lat}]
        </ListGroup.Item>
      )}
    </ListGroup>
  );
};

ForecastCurrent.propTypes = {
  data: PropTypes.object
};

export default ForecastCurrent;
