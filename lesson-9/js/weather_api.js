const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns'];
    towns.forEach(town => {
      if (town.name==="Fish Haven"||town.name==="Preston"||town.name==="Soda Springs") {
        let card = document.createElement('section');        
          // container.setAttribute('class', 'classname');
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');
        let town_name = `${town.name}`;
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