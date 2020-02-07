import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { getHours, formatDate } from '../../helpers';
import Icon from '../Icon';

const ForecastHourlyItem = ({ data }) => {
  if (data) {
    const date = formatDate(data[0].dt_txt);

    return (
      <ListGroup style={cardStyles}>
        <Card.Header className='bg-danger text-light'>{date}</Card.Header>

        {data.map(({ dt_txt, main, weather, wind, clouds }) => {
          const hours = getHours(dt_txt);

          const badgeVariant = classNames({
            success: main.temp >= 1,
            dark: main.temp < 1
          });

          return (
            <ListGroup.Item key={Math.random() * 123}>
              {hours}
              <Icon type={weather[0].icon} />
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Badge variant={badgeVariant}>{main.temp}&deg;С</Badge>
                </ListGroup.Item>
                <ListGroup.Item>{weather[0].description}</ListGroup.Item>
                <ListGroup.Item>wind: {wind.speed}m/s</ListGroup.Item>
                <ListGroup.Item>clouds: {clouds.all}%</ListGroup.Item>
                <ListGroup.Item>Pressure: {main.pressure} hpa</ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  } else {
    return null;
  }
};

const cardStyles = {
  width: '18%',
  listStyle: 'none',
  flexWrap: 'wrap'
};

ForecastHourlyItem.propTypes = {
  data: PropTypes.array
};

export default ForecastHourlyItem;
