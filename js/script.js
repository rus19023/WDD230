function show_modified() {
    let modified = new Date(document.lastModified); // get modified date/time;
    document.getElementById("modified").innerHTML = modified;
}