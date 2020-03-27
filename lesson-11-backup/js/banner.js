// shows banner for pancakes in the park on Saturdays, shown on Fridays only
var newDate = new Date();
var today = newDate.getDay();
var banner = document.getElementById("banner");
if (today == 4) {
    banner.style.display = 'block';
}