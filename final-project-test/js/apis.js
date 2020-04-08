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
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=45.4221lon=116.3154&appid=5013c3a4f5ead239b175bb0335026653&units=imperial`;

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => 
  
  {
    var imagesrc = 'images/' + jsObject.weather[0].icon + '.png';
    var desc = jsObject.weather[0].description;  
    var windspeed = jsObject.wind.speed.toFixed(0); 
    var windDegree = jsObject.wind.deg;
    var temperature = jsObject.main.temp;  
    var windchill = calcWindChill(temperature, windspeed); 
    windDegree = 'MPH ' + windDirection(windDegree);

    
    let icon1 = document.createElement('img');

    icon1.setAttribute('src', imagesrc);
    icon1.setAttribute('alt', desc);
    icon1.setAttribute('width', '80px');
    icon1.setAttribute('height', '65px');

    //document.querySelector('.icon').appendChild(icon1);  

    document.getElementById('current-temp').textContent = temperature.toFixed(0);

    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);

    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('conditions').textContent = desc;
    document.getElementById('windspeed').textContent = windspeed;
    document.getElementById('wind-direction').textContent = windDegree;
    document.getElementById('windchill').textContent = windchill;

  });

}

getForecast();

function getForecast() {
  const requestURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=5013c3a4f5ead239b175bb0335026653&units=imperial`;

    fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsObject) { 
    const items = jsObject.list['items'];    
    let i = 0;

    let card = document.createElement('div');  
    card.setAttribute('class', 'gridforecast rounded');

    jsObject.list.forEach(item => {
        let datetime = jsObject.list[i].dt_txt;

        if (datetime.includes("18:00:00")) {
        var newdate = new Date(datetime);
        var shortdate = newdate.toLocaleDateString( 'en-US', { weekday: 'short' }); 

        var divdate = document.createElement('h4'); 
        var divtemp = document.createElement('div');  
        divdate.textContent = shortdate
        divdate.setAttribute('class', 'forecast-item');
        divtemp.setAttribute('class', 'forecast-item');
        let temp = `${jsObject.list[i].main.temp.toFixed(0)}°F`;
        divtemp.textContent = temp; 

        let imgURL = `images/${jsObject.list[i].weather[0].icon}.png`;
        let desc = `${jsObject.list[i].weather[0].description}`;  
        let icon1 = document.createElement('img');

        icon1.setAttribute('src', imgURL);
        icon1.setAttribute('alt', desc);
        icon1.setAttribute('height', '65px');
        icon1.setAttribute('width', '80px');
        
        divdate.appendChild(icon1);
        divdate.appendChild(divtemp);
        card.appendChild(divdate);
        document.querySelector('.noshow').appendChild(card);      
        
        i++;        
        } else {
        i++;
        }    
    });
  });
}

getEvents();  

function getEvents() {
    const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(eventsURL)
        .then(function (response) { return response.json(); })
        .then(function (jsonObject) {
            const towns = jsonObject['towns'];
            towns.forEach(town => {
                if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven") {
                    var div1 = document.createElement('div');
                    eventNo = town.events.length;
                    for (var i = 0; i < eventNo; i++) {
                        let h5 = document.createElement('h4');
                        h5.textContent = `${town.events[i]}`;
                        //  build the html code for the cards
                        div1.appendChild(h5);
                        //div1.setAttribute('class', 'rounded');
                    townDivSelect = `#${townDiv}-events`;
                    // set up cards for each town in order of menu
                    if(town.name==townName) {
                      document.querySelector(`${townDivSelect}`).appendChild(div1); //  set the Preston div into the html page
                    }
                }
              }
            });
        });
}
