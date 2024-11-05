import { format, parseISO } from 'date-fns';

function handleDate(date) {
  let formattedDate = format(parseISO(date), 'dd / MMM');
  return formattedDate;
}

function handleTemperature(temp) {
  return `${temp.toFixed(0)} °C`;
}

function handleTime(date, time) {
  let formattedTime = format(`${date} ${time}`, 'H:mm');
  return formattedTime;
}

export { handleDate, handleTemperature, handleTime };
