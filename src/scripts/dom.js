let weatherInfoSection = document.querySelector('.weather-info');
let weekForecastSection = document.querySelector('.week-forecast');

function displayWeatherInfo(weather) {
  let cityResolvedAddress = weather.resolvedAddress;
  let temperature = `${weather.currentConditions.temp}°C`;
  let humidity = `${weather.currentConditions.humidity}%`;
  let windSpeed = `${weather.currentConditions.windspeed}km/h`;
  let chanceOfRain = `${weather.currentConditions.precipprob}%`;
  let sunrise = weather.currentConditions.sunrise;
  let moonphase = weather.currentConditions.moonphase;
  let sunset = weather.currentConditions.sunset;

  weatherInfoSection.innerHTML = '';
  weatherInfoSection.insertAdjacentHTML('beforeend', 
    `
      <div class="city">
        <h2>${cityResolvedAddress}</h2>
        <p class="temperature">${temperature}</p>
      </div>

      <div class="info-grid">
        <div class="info">
          <p>Humidity</p>
          <p>${humidity}</p>
        </div>

        <div class="info">
          <p>Wind</p>
          <p>${windSpeed}</p>
        </div>

        <div class="info">
          <p>Chance of rain</p>
          <p>${chanceOfRain}</p>
        </div>

        <div class="info">
          <p>Sunrise</p>
          <p>${sunrise}</p>
        </div>

        <div class="info">
          <p>Moon</p>
          <p>${moonphase}</p>
        </div>

        <div class="info">
          <p>Sunset</p>
          <p>${sunset}</p>
        </div>
      </div>
    `
  );
}

function displayWeekForecast(weather) {
  weekForecastSection.innerHTML = '';
  weekForecastSection.insertAdjacentHTML('beforeend', `

    <h2>Week Forecast</h2>
      
    <div class="week">
      <ul>
        <li class="forecast">
          <p>${weather.days[0].datetime}</p>

          <div class="forecast-info">
            <p>${weather.days[0].temp}°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>${weather.days[1].datetime}</p>

          <div class="forecast-info">
            <p>${weather.days[1].temp}°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>${weather.days[2].datetime}</p>

          <div class="forecast-info">
            <p>${weather.days[2].temp}°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>${weather.days[3].datetime}</p>

          <div class="forecast-info">
            <p>${weather.days[3].temp}°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>${weather.days[4].datetime}</p>

          <div class="forecast-info">
            <p>${weather.days[4].temp}°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>${weather.days[5].datetime}</p>

          <div class="forecast-info">
            <p>${weather.days[5].temp}°C</p>
          </div>
        </li>

        <li class="forecast">
          <p>${weather.days[6].datetime}</p>

          <div class="forecast-info">
            <p>${weather.days[6].temp}°C</p>
          </div>
        </li>
      </ul>
    </div>
    `
  );
}

export { displayWeatherInfo, displayWeekForecast };
