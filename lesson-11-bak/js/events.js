const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns'];
    const events = towns[0].events;
    events.forEach(event => {
      if (town.name=="Preston"||town.name=="Soda Springs"||town.name=="Fish Haven") {
        
            let div1 = document.createElement('div');
            let h4 = document.createElement('h4');
            let town_name = `${town.name}`;

            h4.textContent = event;
            image.setAttribute('src', imgURL);  
            image.setAttribute('alt', town_name);
            image.setAttribute('class', 'rounded');
            
            //  build the html code for the cards
            div1.appendChild(h4);

        // set up cards for each town in order of menu

        if (town.name == "Preston") {

          document.querySelector('#preston-events').appendChild(div1);  //  set the Preston div into the html page

        } else if (town_name == "Soda Springs") {
        document.querySelector('#sodasprings-events').appendChild(div1);  //  set the card div into the html page
        }else if (town_name == "Fish Haven") {
        document.querySelector('#fishhaven-events').appendChild(div1);  //  set the card div into the html page
        }
    }
    });
  });