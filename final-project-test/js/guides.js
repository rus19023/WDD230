const requestURL = 'js/guides.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const guides = jsonObject['guides'];
    guides.forEach(guide => {
        
        let div1 = document.createElement('div');
        let p5 = document.createElement('h1');
        let p6 = document.createElement('p');
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

        p5.textContent = guide_name;
        image.setAttribute('src', imgURL);
        image.setAttribute('data-src', "images/placeholder.jpg");
        
        image.setAttribute('alt', guide_name);
        image.setAttribute('width', '100%');
        image.setAttribute('height', '260px');
        p6.textContent = cert;
        p1.textContent = exp;
        p2.textContent =email;
        p3.textContent =bio; 
        div1.setAttribute('class', 'post');

        
        //  build the html code for the cards
        div1.appendChild(image);  //  add the photo to the div
        div1.appendChild(p5);  //  add the guide's name to the div
        div1.appendChild(p6);  //  add the cert level to the div
        div1.appendChild(p1);  //  add the experience to the div
        div1.appendChild(p2);  //  add the email to the div
        div1.appendChild(p3);  //  add the bio to the div

        // set up cards for each guide in order of menu

        if (guide.name == "Hans Mansson") {
        document.querySelector('#hans').appendChild(div1);  //  set the div1 into the html page

        } else if (guide_name == "Gina George") {
        document.querySelector('#gina').appendChild(div1);  //  set the div1 into the html page

        } else if (guide_name == "Marc Parcher") {
        document.querySelector('#marc').appendChild(div1);  //  set the div1 into the html page
        }
      
    });
  });
