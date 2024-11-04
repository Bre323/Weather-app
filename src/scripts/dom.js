let weatherInfoSection = document.querySelector('.weather-info');
let weekForecastSection = document.querySelector('.week-forecast');

function displayWeatherInfo() {
  weatherInfoSection.innerHTML = '';
  weatherInfoSection.insertAdjacentHTML('beforeend', 
    `
      <div class="city">
        <h2>Florianópolis, Brazil</h2>
        <p class="temperature">27°C</p>
      </div>

      <div class="info-grid">
        <div class="info">
          <p>Humidity</p>
          <p>100%</p>
        </div>

        <div class="info">
          <p>Wind</p>
          <p>100km/h</p>
        </div>

        <div class="info">
          <p>Chance of rain</p>
          <p>100%</p>
        </div>

        <div class="info">
          <p>Sunrise</p>
          <p>20:00</p>
        </div>

        <div class="info">
          <p>Moon</p>
          <p>100%</p>
        </div>

        <div class="info">
          <p>Sunset</p>
          <p>38:00</p>
        </div>
      </div>
    `
  );
}

function displayWeekForecast() {
  weekForecastSection.innerHTML = '';
  weekForecastSection.insertAdjacentHTML('beforeend', 
    `
    <h2>Week Forecast</h2>
      
    <div class="week">
      <ul>
        <li class="forecast">
          <p>Monday</p>

          <div class="forecast-info">
            <p>30°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>Tuesday</p>

          <div class="forecast-info">
            <p>30°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>Wednesday</p>

          <div class="forecast-info">
            <p>30°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>Thursday</p>

          <div class="forecast-info">
            <p>30°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>Friday</p>

          <div class="forecast-info">
            <p>30°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>Saturday</p>

          <div class="forecast-info">
            <p>30°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>Sunday</p>

          <div class="forecast-info">
            <p>30°C</p>
          </div>
        </li>
      </ul>
    </div>
    `
  );
}

export { displayWeatherInfo, displayWeekForecast };
