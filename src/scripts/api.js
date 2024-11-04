async function getWeatherData(city) {

  let apiKey = 'JKDS7FWSASJL9PLZSBU39ZSDE';
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
  let response = await fetch(url);
  let weatherData = response.json();

  console.log(city);
  console.log(await weatherData);
  return weatherData;
}

let data = await getWeatherData();
console.log(data.resolvedAddress);

export { getWeatherData };
