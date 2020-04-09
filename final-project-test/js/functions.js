// toggles hamburger menu on small view, navbar on large/medium views
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    document.getElementById("logo").classList.toggle("open-menu");
}


    window.onscroll = function() {myFunction()};

        // Get the navbar
        var navbar = document.getElementById("navbar");

        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }


// add WebFont Family to website
WebFont.load({
    google: { families: ['Calligraffiti', 'Sriracha'] }
  });

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
