const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns'];
    console.log(towns);
    towns.forEach(town => {
        if (town.name=="Preston"||town.name=="Soda Springs"||town.name=="Fish Haven") {
            
            let div1 = document.createElement('div');

            for (let i=0, i<towns.events.length(), i++) {
                let h4 = document.createElement('h4');
                let event = `${town.events[i]}`;

                h4.textContent = event;
                
                //  build the html code for the cards
                div1.appendChild(h4);
            }
               

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