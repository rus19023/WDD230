const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function sortByValue(jsObj){
  var sortedArray = [];
  for(var i in jsObj)
  {
      // Push each JSON Object entry in array by [value, key]
      sortedArray.push([jsObj[i], i]);
  }
  return sortedArray.sort();
};

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns'];


var sortedbyValueJSONArray = sortByValue(towns);
console.table(sortedbyValueJSONArray);
    towns.forEach(town => {
      if (town.name=="Preston"||town.name=="Soda Springs"||town.name=="Fish Haven") {
        let card = document.createElement('section'); 
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let h2 = document.createElement('h2');
        let h6 = document.createElement('h6');
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
        h6.textContent = motto;
        p1.textContent = year;
        p2.textContent =population;
        p3.textContent =rainfall;
        
        //  build the html code for the cards
        div1.appendChild(h2);  //  add the town name heading to the text div
        div1.appendChild(h6);  //  add the motto heading to the text div
        div1.appendChild(p1);  //  add the founding year to the text div
        div1.appendChild(p2);  //  add the population to the text div
        div1.appendChild(p3);  //  add the rainfall to the text div
        div2.appendChild(image);  //  add the photo to the image div
        card.appendChild(div1);  // add the text div to the card div
        card.appendChild(div2);  //  add the image div to the card div

        
        document.querySelector('.towns').appendChild(card);  //  set the card div into the html page
    }
    });
  });