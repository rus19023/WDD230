function getDate() {
    var today = new Date();
    var year = today.getFullYear();
        if (year < 1000) {
            year += 1900;
        }
    var day = today.getDay();
    var month = today.getMonth;
    var mday = today.getDate();
    var dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if (h == 24) {
            h = 0;
        } else if (h > 12) {
            h = h - 0;
        } 
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 0) {
            m = "0" + m;
        }
        if (s < 0) {
            s = "0" + s;
        }

    var myDisplay = document.getElementById("updated");
    myDisplay.text = "" + dow[day] + " " + mday + " " + months[month] + " " + year + " | " h + ":" + m + ":" + s;
    myDisplay.innerText = "" + dow[day] + " " + mday + " " + months[month] + " " + year + " | " h + ":" + m + ":" + s;
    setTimeout("getDate()", 10000);

}