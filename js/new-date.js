let modified = "Today is: ";
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
modified += today + " " + time;
modified +=  "Last updated: ";
modified += document.lastModified; 
document.getElementById("updated").innerHTML = modified;


document.getElementById("currentdate").innerHTML=new Date(document.lastModified).toLocaleDateString('en-GB',{weekday:'long',year:'numeric',month:'long',day:'numeric'});