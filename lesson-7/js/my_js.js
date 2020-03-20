// shows banner for pancakes in the park on Saturdays, shown on Fridays only
var newDate = new Date();
var today = newDate.getDay();
if (today == 1) {
    $('#banner').show();
}

// toggles hamburger menu on small view, navbar on large/medium views
function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
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
    var dow = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var myDisplay = document.getElementById("updated");
    myDisplay.text = "" + dow2[day] + " " + mday + " " + months[month] + " " + year;
    myDisplay.innerText = "Today is " + dow2[day] + ", " + mday + " " + months[month] + " " + year;
    
    
    // work in progress, for 5 day forecast days
    var day1 = document.getElementById("day1");
    var day2 = document.getElementById("day2");
    var day3 = document.getElementById("day3");
    var day4 = document.getElementById("day4");
    var day5 = document.getElementById("day5");
    day1.innerText = dow[day];
    day2.innerText = dow[day + 1];
    day3.innerText = dow[day + 2];
    day4.innerText = dow[day + 3];
    day5.innerText = dow[day + 4];
    setTimeout("getDate()", 1000000);

}

// add WebFont Family to website
WebFont.load({
    google: {
      families: [
         'Comfortaa',
         'Poppins',
         'Questrial'
      ]
    }
  });