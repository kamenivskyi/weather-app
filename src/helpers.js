import { isSameDay, addDays } from 'date-fns';
import { format } from 'date-fns';

export const eachDay = data => {
  let allDays = [];
  let currentDay = new Date(data[0].dt_txt.split(' ')[0]);

  for (let i = 0; i < 5; i++) {
    let singleDay = data.filter(item =>
      isSameDay(new Date(item.dt_txt.split(' ')[0]), currentDay)
    );

    allDays.push(singleDay);
    currentDay = addDays(new Date(currentDay), 1);
  }
  return allDays;
};

export const convertToTime = value => {
  const date = new Date(value * 1000);
  const hours = _addZero(date.getHours());
  const minutes = _addZero(date.getMinutes());
  const time = `${hours}:${minutes}`;

  return time;
};

const _addZero = value => {
  if (value.toString().length < 2) {
    value = '0' + value;
  }
  return value;
};

export const formatDate = date => format(new Date(date), 'PPP');

export const getHours = date => {
  let hours = new Date(date).getHours().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }
  return hours + ':00';
};

export const imagePrefix = 'http://openweathermap.org/img/wn/';
