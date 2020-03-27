const zone=`IDZ061`;

getAlerts();

function getAlerts() {
    const alertsURL = `https://api.weather.gov/alerts/active/zone/${zone}`;
    fetch(alertsURL)
        .then(function (response) { return response.json(); })
        .then(function (jsonObject) {
            const features = jsonObject['features'];
            //console.log(jsonObject);
            let alertSpan = document.createElement('span');
            //var features = `${jsonObject['features']}`;
            
            
            //console.log(`features: ${features.features}`);      
            if (jsonObject['features'].length == 0) { 
                //console.log('features is empty');     
                alertSpan.setAttribute('class', 'marquee2');          
                alertSpan.textContent = "No alerts for the Bear Lake Valley area at this time"; 
                document.querySelector('#alerts').appendChild(alertSpan);
            } else {
                alertSpan.textContent = `Weather alert: ${jsonObject.features[0].properties.headline} ${jsonObject.features[0].properties.description}`; // ${jsonObject.features[0].properties.instructions}`;
                alertSpan.setAttribute('class', 'marquee'); 
                document.querySelector('#alerts').appendChild(alertSpan);
            }     
    });
}