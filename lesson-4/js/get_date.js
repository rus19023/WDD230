function getDate() {
    var today = new Date();
    var year = today.getFullYear();
        if (year < 1000) {
            year += 1900;
        }
    var day = today.getDay();
    var month = today.getMonth();
    var mday = today.getDate();
    var dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    

    var myDisplay = document.getElementById("updated");
    myDisplay.text = "" + dow[day] + " " + mday + " " + months[month] + " " + year;
    myDisplay.innerText = "" + dow[day] + ", " + mday + " " + months[month] + " " + year;
    setTimeout("getDate()", 1000000);

}