var ZIP_CODE = "74854"
// function addZipCodeListener () {
//   ZIP_CODE = document.getElementById("addZip").value;
//   parseInt(ZIP_CODE);
//   console.log(ZIP_CODE)
// }
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
  const resultsPreTag = document.getElementById("data-results");
  const resultsPreTag2 = document.getElementById("temp");
  const currentCondition = document.getElementById("currentCondition")
  const space = ", ";
  const fahrenheit = "°F";
  const currentlyItIs = "Currently it is: "
  resultsPreTag.innerText = data.location.name + space + data.location.region;
  resultsPreTag2.innerText = data.current.temp_f + fahrenheit;
  currentCondition.innerText = currentlyItIs + data.current.condition.text;

  
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