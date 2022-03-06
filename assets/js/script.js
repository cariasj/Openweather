const APIKey = "1db52fc43b3ee0bc9c7aac3ffc5ee6a6";
let cityLat = "";
let cityLon = "";
//let geoCity = "";


function dataSearch() {
    const searchedCity = document.getElementById("search");
    const currentCity = document.getElementById("currentcityname");
    currentCity.innerHTML = searchedCity.value
    let geoCity = searchedCity.value
    geoCoordinates(geoCity);
}

function geoCoordinates(geoCity) {
    /* API call to retrieve Lon & Lat coordinates for weatherCall API call */
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + geoCity + '&limit=5&appid=' + APIKey + '') 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let cityLat = data[0].lat;
        let cityLon = data[0].lon;
        //console.log(cityLat);
        //console.log(cityLon);
        weatherCall(cityLat, cityLon);
})
}

/*
function weatherCall(cityLat, cityLon) {
    fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon + '&appid=' + APIKey + '&units=imperial')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.list[0].main.temp);
        console.log(data.list[0].wind.speed);
        console.log(data.list[0].main.humidity);


    })
} */

function weatherCall(cityLat, cityLon) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLat + '&lon=' + cityLon + '&exclude=hourly,minutely,alerts&appid=' + APIKey + '&units=imperial')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let currentData = [
            data.current.weather[0].icon,
            data.current.temp,
            data.current.wind_deg,
            data.current.humidity,
            data.current.uvi
            
        ]
        let dayTwo = [
            data.daily[0].weather[0].icon,
            data.daily[0].temp.day,
            data.daily[0].wind_deg,
            data.daily[0].humidity,

        ]
        console.log(dayTwo);
        // console.log(data.current.temp);
        // console.log(data.current.wind_deg);
        // console.log(data.current.humidity);
        // console.log(data.current.uvi);
        // console.log(data.current.weather[0].icon);
    })
}