const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(eventsURL)
  .then(function (response) { return response.json(); })
  .then(function (jsonObject) {  
    const towns = jsonObject['towns'];    
    towns.forEach(town => {
      if (town.name=="Preston"||town.name=="Soda Springs"||town.name=="Fish Haven") {  
        var div1 = document.createElement('div');
        eventNo = town.events.length;
        for (var i = 0; i<eventNo; i++) { 
          let h5 = document.createElement('h5');
          h5.textContent = `${town.events[i]}`;          
          //  build the html code for the cards
          div1.appendChild(h5);
          div1.setAttribute('class','grey rounded');
        }  
        // set up cards for each town in order of menu
        if (town.name == "Preston") {
          document.querySelector('#preston-events').appendChild(div1);  //  set the Preston div into the html page
        } else if (town.name == "Soda Springs") {
        document.querySelector('#sodasprings-events').appendChild(div1);  //  set the card div into the html page
        }else if (town.name == "Fish Haven") {
        document.querySelector('#fishhaven-events').appendChild(div1);  //  set the card div into the html page
        }
      }        
    })
  });
  