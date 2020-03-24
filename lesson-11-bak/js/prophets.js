const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h5 = document.createElement('h5');
      let h52 = document.createElement('h5');
      let image = document.createElement('img');
      let fullname = `${prophet.name} ${prophet.lastname}`;
      let fullname2 = `${prophet.name} ${prophet.lastname} - ${prophet.order}`;
      let imgURL = `${prophet.imageurl}`;
      let data = `Date of birth: ${prophet.birthdate}` 
      let data2 = `Place of birth: ${prophet.birthplace}`;

      h2.textContent = fullname;
      image.setAttribute('src', imgURL);
      image.setAttribute('alt', fullname2);
      h5.textContent = data;
      h52.textContent =data2;

      card.appendChild(h2);
      card.appendChild(h5);
      card.appendChild(h52);
      card.appendChild(image);

      document.querySelector('.cards').appendChild(card);
    });
  });

     
    
    
    

    
  