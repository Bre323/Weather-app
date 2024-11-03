export default async function getWeatherData() {
  let response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/florianopolis?unitGroup=metric&key=JKDS7FWSASJL9PLZSBU39ZSDE&contentType=json');
  let weatherData = response.json();

  return weatherData;
}

let data = await getWeatherData();
console.log(data.resolvedAddress);
