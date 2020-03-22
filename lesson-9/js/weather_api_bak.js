const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        towns.forEach(town => {
            

                let townCard = document.createElement('section');
                let h2 = document.createElement('h2');
                let h4 = document.createElement('h4');
                let h5 = document.createElement('h5');
                let h52 = document.createElement('h5');
                let h53 = document.createElement('h5');
                let photo = document.createElement('img');
                let townname = `${town.name}`;
                let photoURL = `images/${town.photo}`;
                let motto = `${town.motto}`; 
                let rainfall = `Annual Rainfall: ${town.averageRainfall}`;
                let year = `Year founded: ${town.yearFounded}`;
                let population = `Population: ${town.currentPopulation}`;
    
                h2.textContent = townname;
                photo.setAttribute('src', photoURL);
                photo.setAttribute('alt', townname);
                h4.textContent = motto;
                h5.textContent = year;
                h52.textContent =population;
                h53.textContent =rainfall;
    
                townCard.appendChild(h2);
                townCard.appendChild(h4);
                townCard.appendChild(h5);
                townCard.appendChild(h52);
                townCard.appendChild(h53);
                townCard.appendChild(photo);
                document.querySelector('.towns').appendChild(townCard);
            

        };
      
    });
  