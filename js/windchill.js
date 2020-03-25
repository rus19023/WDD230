var temperature = parseInt(document.getElementById("temperature").innerHTML);
var windspeed = parseInt(document.getElementById("windspeed").innerHTML);


function calcWindChill(temperature, windspeed) {
    if (temperature <= 50 && windspeed >= 3) {
        windchill = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windspeed, 0.16))) + (0.4275 * temperature * (Math.pow(windspeed, 0.16)));
    return windchill.toFixed(0);
    }

    else {
        return "N/A";
    }
}
     
calcWindChill(temperature, windspeed);

document.getElementById("windchill").innerHTML = calcWindChill(temperature, windspeed); 