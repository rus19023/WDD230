const requestURL = https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5013c3a4f5ead239b175bb0335026653

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const preston = jsonObject['preston'];
    .forEach(item => {
      if (preston.sys.name==="Preston") {
        let card = document.createElement('section');        
                                                            // container.setAttribute('class', 'classname');
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'gridforecast');

        let span1 = document.createElement('span')
        span1.setAttribute('class', 'day');

        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        let town_name = `${weather.sys.name}`;
        let imgURL = `images/${town.photo}`;
        let motto = `${town.motto}` 
        let year = `Year founded: ${town.yearFounded}`;
        let population = `Population: ${town.currentPopulation}`;
        let rainfall = `Annual Rainfall: ${town.averageRainfall}`;

        h2.textContent = town_name;
        image.setAttribute('src', imgURL);
        image.setAttribute('alt', town_name);
        h4.textContent = motto;
        p1.textContent = year;
        p2.textContent =population;
        p3.textContent =rainfall;
        
        
        div1.appendChild(h2);
        div1.appendChild(h4);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        div2.appendChild(image);
        card.appendChild(div1);
        card.appendChild(div2);

        
        document.querySelector('.towns').appendChild(card);
    }
    });
  });