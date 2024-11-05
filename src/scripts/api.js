async function getWeatherData(city) {

  let apiKey = 'JKDS7FWSASJL9PLZSBU39ZSDE';
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
  let response = await fetch(url);
  let weatherData = response.json();

  if(response.ok) {
    console.log(city);
    console.log(await weatherData);
    return weatherData;
  }
  else {
    alert('The location is wrong or do not exist!');
  }
}

export { getWeatherData };
