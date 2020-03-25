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

    var day1 = document.getElementById("day1");
    var day2 = document.getElementById("day2");
    var day3 = document.getElementById("day3");
    var day4 = document.getElementById("day4");
    var day5 = document.getElementById("day5");
    var tomorrow = today.getDate() + 1;
    var next3 = today.getDate() + 2;
    var next4 = today.getDate() + 3;
    var next5 = today.getDate() + 4;
    alert(day.toLocaleDateString(weekday: "short"));
    day1.innerText = today.toLocaleDateString("en", weekday: "short");
    day2.innerText = tomorrow.toLocaleDateString("en", weekday: "short");
    day3.innerText = next3.toLocaleDateString("en", weekday: "short");
    day4.innerText = next4.toLocaleDateString("en", weekday: "short");
    day5.innerText = next5.toLocaleDateString("en", weekday: "short");
    setTimeout("getDate()", 1000000);

}