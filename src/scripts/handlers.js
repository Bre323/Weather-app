import { format, parseISO } from 'date-fns';

function handleDate(date) {
  console.log(date);
  let formattedDate = format(parseISO(date), 'dd / MMM');
  return formattedDate;
}

function handleTemperature(temp) {
  return `${temp} °C`;
}

export { handleDate, handleTemperature };
