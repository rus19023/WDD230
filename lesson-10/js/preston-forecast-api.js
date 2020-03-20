const requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5013c3a4f5ead239b175bb0335026653&units=imperial"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) { 
    const items = jsObject.list['items'];    
    let i = 0;

      let card = document.createElement('div');  
      card.setAttribute('class', 'gridforecast');

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
        let temp = `${jsObject.list[i].main.temp.toFixed(0)}`;
        divtemp.textContent = temp + " °F"; 
        

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
  