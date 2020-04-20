function sortByValue(jsObj){
    var sortedArray = [];
    for(var i in jsObj)
    {
        // Push each JSON Object entry in array by [value, key]
        sortedArray.push([jsObj[i], i]);
    }
    return sortedArray.sort();
}
var jsObj = {};
jsObj.e = "elephant";
jsObj.b = "ball";
jsObj.d = "dog";

var sortedbyValueJSONArray = sortByValue(jsObj);
console.table(sortedbyValueJSONArray);