const WEATHER_API_KEY = "2f941b77d49f414abfb133019221905";
const FORECAST_ENDPOINT = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=74854`;

window.onload = () => {
  attachGetWeatherDataButtonListener();
};

function attachGetWeatherDataButtonListener() {
  const getWeatherDataButton = document.getElementById("get-weather-data");
  if (getWeatherDataButton) {
    getWeatherDataButton.addEventListener("click", getWeatherData);
  }
}

function addDataToPreTag(data) {
  const resultsPreTag = document.getElementById("data-results");
  const resultsPreTag2 = document.getElementById("temp");
  const resultsPreTag3 = document.getElementById("condition")
  resultsPreTag.innerText = data.location.name;
  resultsPreTag2.innerText = data.current.temp_f;
  // resultsPreTag3.innerText = data.condition.icon;
}

async function getWeatherData() {
  try {
    const res = await fetch(FORECAST_ENDPOINT);
    const data = await res.json();
    addDataToPreTag(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}