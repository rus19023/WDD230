const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5013c3a4f5ead239b175bb0335026653&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => 
  {
    // console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
        
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    // console.log('imagesrc = ' + imagesrc);
    let span1 = document.createElement('span');
    let h3 = document.createElement('h3');
    h3.textContent = imagesrc; 
    span1.appendChild(h3);
    document.querySelector('#imagesrc').appendChild(span1);
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    
    document.getElementById('icon').setAttribute('alt', desc);
    document.getElementById('icon').setAttribute('width', '80px');
  });
    