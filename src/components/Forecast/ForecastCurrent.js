import React from 'react';

const ForecastCurrent = ({ data }) => {
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
  console.log(coord);

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <ul className='list-group list-group-horizontal'>
      <li className='list-group-item'>
        <img src={iconUrl} className='card-img' alt={descr} />
      </li>
      <li className='list-group-item'>{name}</li>
      <li className='list-group-item'>{temp} &#8451;</li>
      <li className='list-group-item'>{descr}</li>
      <li className='list-group-item'>Country: {country}</li>
      <li className='list-group-item'>Timezone: {timezone}</li>
      <li className='list-group-item'>Pressure: {pressure} hpa</li>
      <li className='list-group-item'>Humidity: {humidity} %</li>
      <li className='list-group-item'>Sunrise: {sunrise}</li>
      <li className='list-group-item'>Sunset: {sunset}</li>
      {coord && (
        <li className='list-group-item'>
          Geo coord: [{coord.lat},{coord.lat}]
        </li>
      )}
    </ul>
  );
};

export default ForecastCurrent;
