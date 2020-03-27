// toggles hamburger menu on small view, navbar on large/medium views
function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

// add WebFont Family to website
WebFont.load({
    google: { families: ['Comfortaa', 'Poppins', 'Questrial'] }
  });

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

// gets date for footer
function getDate() {
    var today = new Date();
    var year = today.getFullYear();
        if (year < 1000) {
            year += 1900;
        }
    var day = today.getDay();
    var month = today.getMonth();
    var mday = today.getDate();
    var dow2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var dow = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var myDisplay = document.getElementById("updated");
    // myDisplay.text = "" + dow2[day] + " " + mday + " " + months[month] + " " + year;
    myDisplay.innerText = "Today is " + dow2[day] + ", " + mday + " " + months[month] + " " + year;   
}