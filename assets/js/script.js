const APIKey = "1db52fc43b3ee0bc9c7aac3ffc5ee6a6";
cityLat = "";
cityLon = "";

function dataSearch() {
    const searchedCity = document.getElementById("search");
    const currentCity = document.getElementById("currentcityname");
    currentCity.innerHTML = searchedCity.value
}

/* API call to retrieve Long & Lat coordinates for main API call */
fetch('http://api.openweathermap.org/geo/1.0/direct?q=miami&limit=5&appid=' + APIKey + '') 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       //console.log(data);
        let cityLat = data[0].lat;
        let cityLon = data[0].lon;
        //console.log(cityLat);
        //console.log(cityLon);
    })

