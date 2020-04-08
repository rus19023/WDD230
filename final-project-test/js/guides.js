const requestURL = 'guides.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const guides = jsonObject['guides'];
    console.log(guides)
    guides.forEach(guide => {
        
        let card = document.createElement('section'); 
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let h2 = document.createElement('h2');
        let h6 = document.createElement('h6');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');
        let guide_name = `${guide.name}`;
        let imgURL = `images/${guide.photo}`;
        let cert = `Certification level: ${guide.cert}` ;
        let exp = `Experience: ${guide.exp} years`;
        let email = `Email: ${guide.email}`;
        let bio = `Bio: ${guide.bio}`;

        h2.textContent = guide_name;
        image.setAttribute('class', 'rounded guide-image realign');
        image.setAttribute('src', imgURL); 
        //image.setAttribute('src', 'images/placeholder.jpg'); 
        image.setAttribute('alt', guide_name);
        h6.textContent = cert;
        p1.textContent = exp;
        p2.textContent =email;
        p3.textContent =bio;
        
        //  build the html code for the cards
        //h2.appendChild(guide_a);  //  add the guide name heading to the text div
        div1.appendChild(h2);
        div1.appendChild(h6);  //  add the motto heading to the text div
        div1.appendChild(p1);  //  add the founding year to the text div
        div1.appendChild(p2);  //  add the population to the text div
        div1.appendChild(p3);  //  add the rainfall to the text div
        div2.appendChild(image);  //  add the photo to the image div
        card.appendChild(div1);  // add the text div to the card div
        card.appendChild(div2);  //  add the image div to the card div

        // set up cards for each guide in order of menu

        if (guide.name == "Hans Mansson") {
        document.querySelector('#hans').appendChild(card);  //  set the card div into the html page

        } else if (guide_name == "Gina George") {
        document.querySelector('#gina').appendChild(card);  //  set the card div into the html page

        } else if (guide_name == "Marc Parcher") {
        document.querySelector('#marc').appendChild(card);  //  set the card div into the html page
        }
      
    });
  });
