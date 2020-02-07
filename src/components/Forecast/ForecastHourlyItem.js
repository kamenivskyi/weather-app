import React from 'react';
import { getHours, formatDate, imagePrefix } from '../../helpers';

const ForecastHourlyItem = ({ data }) => {
  // console.log(data);
  return (
    <li className='card' style={{ width: '18%', listStyle: 'none' }}>
      <div className='card-header bg-danger text-light'>
        {formatDate(data[0].dt_txt)}
      </div>

      {data.map(item => {
        const { dt_txt, main, weather, wind, clouds } = item;

        return (
          <div key={Math.random()} className='list-group-item'>
            <div>
              {getHours(dt_txt)}
              <img src={`${imagePrefix}${weather[0].icon}@2x.png`} alt='' />
            </div>
            <div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <span
                    className={`badge badge-${
                      main.temp >= 1 ? 'success' : 'dark'
                    }`}
                  >
                    {main.temp}&deg;С
                  </span>
                </li>
                <li className='list-group-item'>{weather[0].description}</li>
                <li className='list-group-item'>wind: {wind.speed}m/s</li>
                <li className='list-group-item'>clouds: {clouds.all}%</li>
                <li className='list-group-item'>
                  Pressure: {main.pressure} hpa
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </li>
  );
};

export default ForecastHourlyItem;
