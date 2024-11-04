let infoSections = document.querySelector('.info-sections');

function displayWeatherInfo() {
  infoSections.innerHTML = '';

  infoSections.insertAdjacentHTML('beforeend', 
    `<section class="weather-info">
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
    </section>
    `
  );
}

export { displayWeatherInfo };