function calcWindChill(temperature, windspeed) {
  if (temperature <= 50 && windspeed >= 3) {
    windchill = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windspeed, 0.16))) + (0.4275 * temperature * (Math.pow(windspeed, 0.16)));
    windchill = windchill.toFixed(0) + ' \u00B0F';
    return windchill;
  } else {
    return "N/A";
  }
}
  
function windDirection(data) {

  var deg = Math.floor(data);
  switch (true) {
    case deg >= 360 && deg <= 21:
    deg = "N";
    break;
    case deg >= 22 && deg <= 44:
    deg = "NNE";
    break;
    case deg >= 45 && deg <= 66:
    deg = "NE";
    break;
    case deg >= 67 && deg <= 89:
    deg = "ENE";
    break;
    case deg >= 90 && deg <= 111:
    deg = "E";
    break;
    case deg >= 112 && deg <= 134:
    deg = "ESE";
    break;
    case deg >= 135 && deg <= 156:
    deg = "SE";
    break;
    case deg >= 157 && deg <= 179:
    deg = "SSE";
    break;
    case deg >= 180 && deg <= 201:
    deg = "S";
    break;
    case deg >= 202 && deg <= 224:
    deg = "SSW";
    break;
    case deg >= 225 && deg <= 246:
    deg = "SW";
    break;
    case deg >= 247 && deg <= 269:
    var deg = "WSW";
    break;
    case deg >= 270 && deg <= 291:
    deg = "W";
    break;
    case deg >= 292 && deg <= 314:
    deg = "WNW";
    break;
    case deg >= 315 && deg <= 336:
    deg = "NW";
    break;
    case deg >= 337 && deg <= 359:
    deg = "NNW";
    break;
    default:
    deg = "no data";
  }
  return deg;
}

getCurrentWeather();

function getCurrentWeather() {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=83549,US&appid=5013c3a4f5ead239b175bb0335026653&units=imperial`;

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => 
  
  {
    var desc = jsObject.weather[0].description;  
    var windspeed = jsObject.wind.speed.toFixed(0); 
    var windDegree = jsObject.wind.deg;
    var temperature = jsObject.main.temp;  
    var windchill = calcWindChill(temperature, windspeed); 
    windDegree = 'MPH ' + windDirection(windDegree);

    document.getElementById('current-temp').textContent = temperature.toFixed(0);
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('conditions').textContent = desc;
    document.getElementById('windspeed').textContent = windspeed;
    document.getElementById('wind-direction').textContent = windDegree;
    document.getElementById('windchill').textContent = windchill;

  });
}