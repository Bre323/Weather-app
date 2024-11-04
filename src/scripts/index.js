import '../style.css';
import { getWeatherData } from './api';
import { displayWeatherInfo, displayWeekForecast } from './dom';
let cityInput = document.querySelector('.search-input');
let cityButton = document.querySelector('.search-submit');

cityButton.addEventListener('click', () => {
  getWeatherData(cityInput.value);
  displayWeatherInfo();
  displayWeekForecast();
});
