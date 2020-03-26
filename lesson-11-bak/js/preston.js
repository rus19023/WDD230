setBanner();

function setBanner() {
    // shows banner for pancakes in the park on Saturdays, shown on Fridays only
    var newDate = new Date();
    var today = newDate.getDay();
    var banner = document.getElementById("banner");
    if (today == 5) {
        banner.style.display = 'block';
    }
}

const cityId = "5604473"
const townName = "Preston"