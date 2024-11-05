import { format, parseISO } from 'date-fns';

function handleDate(date) {
  console.log(date);
  let formattedDate = format(parseISO(date), 'dd / MMM');
  return formattedDate;
}

function handleTemperature(temp) {
  return `${temp} °C`;
}

function handleTime(date, time) {
  let formattedTime = format(`${date} ${time}`, 'H:mm');
  return formattedTime;
}

export { handleDate, handleTemperature, handleTime };
