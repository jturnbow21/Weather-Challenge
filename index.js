var ZIP_CODE = "74854"
// function addZipCodeListener () {
//   ZIP_CODE = document.getElementById("addZip").value;
//   parseInt(ZIP_CODE);
//   console.log(ZIP_CODE)
// }

// I added the above function with  a button in the html file. I could get the console to log the zip code but it wouldn't inject it into the forecast endpoint request. I'm not sure what I was doing wrong.
const WEATHER_API_KEY = "2f941b77d49f414abfb133019221905";


const FORECAST_ENDPOINT = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${ZIP_CODE}&days=5`;


window.onload = () => {
  attachGetWeatherDataButtonListener();
};
function addZipCodeListener () {
  zipCode = document.getElementById("Zip").value;
  console.log(zipCode)
}
function attachGetWeatherDataButtonListener() {
  const getWeatherDataButton = document.getElementById("get-weather-data");
  if (getWeatherDataButton) {
    getWeatherDataButton.addEventListener("click", getWeatherData);
  }
}

function addDataToPreTag(data) {
  const currentLocation = document.getElementById("data-results");
  const currentTemp = document.getElementById("temp");
  const currentCondition = document.getElementById("currentCondition");
  const currentWind = document.getElementById("wind-direction");
  const windMph = document.getElementById("wind-mph");
  const currentPrecipitation = document.getElementById("precipitation");
  
  const space = ", ";
  const fahrenheit = "°F";
  const currentlyItIs = "Currently it is: "
  const windDirectionIs = "The current wind direction is: ";
  const windMphIs = "The wind is blowing at "
  const mph = " miles per hour."
  let currentPrecipitationAmount = "The current precipitation amount is: "
  const inches = " inches."
  
  currentLocation.innerText = data.location.name + space + data.location.region;
  currentTemp.innerText = data.current.temp_f + fahrenheit;
  currentCondition.innerText = currentlyItIs + data.current.condition.text;
  currentWind.innerText = windDirectionIs + data.current.wind_dir;
  windMph.innerText = windMphIs + data.current.wind_mph + mph;
  currentPrecipitation.innerText = currentPrecipitationAmount + data.current.precip_in + inches;
  
}

function addIcon(data) {
  
  document.getElementById('condition').src = data.current.condition.icon;
}
 


async function getWeatherData() {
  try {
    const res = await fetch(FORECAST_ENDPOINT);
    const data = await res.json();
    addDataToPreTag(data);
    addIcon(data);
    // addZipCodeListener
    console.log(data);
    // console.log(zipCode)
  } catch (error) {
    console.log(error);
  }
}