const APIKey = "1db52fc43b3ee0bc9c7aac3ffc5ee6a6";
let cityLat = "";
let cityLon = "";
let dayTwoInfo = document.getElementById('daytwodiv');
let dayThreeInfo = document.getElementById('daythreediv');
let dayFourInfo = document.getElementById('dayfourdiv');
let dayFiveInfo = document.getElementById('dayfivediv');
let daySixInfo = document.getElementById('daysixdiv');


function dataSearch() {
    const searchedCity = document.getElementById("search");
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
        weatherCall(cityLat, cityLon, geoCity);
})
}

function weatherCall(cityLat, cityLon, geoCity) {
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
        let dayThree = [

            data.daily[1].weather[0].icon,
            data.daily[1].temp.day,
            data.daily[1].wind_deg,
            data.daily[1].humidity,
        ]
        let dayFour = [

            data.daily[2].weather[0].icon,
            data.daily[2].temp.day,
            data.daily[2].wind_deg,
            data.daily[2].humidity,
        ]
        let dayFive = [

            data.daily[3].weather[0].icon,
            data.daily[3].temp.day,
            data.daily[3].wind_deg,
            data.daily[3].humidity,
        ]
        let daySix = [

            data.daily[4].weather[0].icon,
            data.daily[4].temp.day,
            data.daily[4].wind_deg,
            data.daily[4].humidity,
        ]
        dataInput(currentData,dayTwo,dayThree,dayFour,dayFive,daySix,geoCity);
    })
}

function dataInput(currentData,dayTwo,dayThree,dayFour,dayFive,daySix,geoCity) {
    
    let cityCap =geoCity.charAt(0).toUpperCase() + geoCity.slice(1);
    const currentCity = document.getElementById("currentcityname");
    currentCity.innerHTML = cityCap + "<img src=\'http://openweathermap.org/img/wn/" + currentData[0] +'.png>';

    const currentCityTemp = document.getElementById("currentcitytemp");
    currentCityTemp.innerHTML = "Temp: " + currentData[1]+  " &#8457;";

    const currentCityWind = document.getElementById("currentcitywind");
    currentCityWind.innerHTML = "Wind: " +currentData[2]+ " MPH";

    const currentCityHum = document.getElementById("currentcityhum");
    currentCityHum.innerHTML = "Humidity: " +currentData[3]+ " %";

    const currentCityUv = document.getElementById("currentcityuv");
    currentCityUv.innerHTML = " UV Index: " +currentData[2];

    dayTwo.forEach(dayData => {
    dayTwoInfo.innerHTML = 
     `
    <p class="card-text-date" id="day2date">Date</p>
    <p class="card-text-icon" id="day2icon">Icon</p>
    <p class="card-text-temp" id="day2temp">Temp: ${dayTwo[1]}</p>
    <p class="card-text-wind" id="day2wind">Wind: ${dayTwo[2]} MPH</p>
    <p class="card-text-humidity" id="day2hum">Humidity: ${dayTwo[3]} %</p>
     `      
    
     
    });

    dayThree.forEach(dayData => {
        dayThreeInfo.innerHTML = 
        `
        <p class="card-text-date" id="day2date">Date</p>
        <p class="card-text-icon" id="day2icon">Icon</p>
        <p class="card-text-temp" id="day2temp">Temp: ${dayThree[1]}</p>
        <p class="card-text-wind" id="day2wind">Wind: ${dayThree[2]} MPH</p>
        <p class="card-text-humidity" id="day2hum">Humidity: ${dayThree[3]} %</p>
        `      
        
        
    });

    dayFour.forEach(dayData => {
        dayFourInfo.innerHTML = 
        `
        <p class="card-text-date" id="day2date">Date</p>
        <p class="card-text-icon" id="day2icon">Icon</p>
        <p class="card-text-temp" id="day2temp">Temp: ${dayFour[1]}</p>
        <p class="card-text-wind" id="day2wind">Wind: ${dayFour[2]} MPH</p>
        <p class="card-text-humidity" id="day2hum">Humidity: ${dayFour[3]} %</p>
        `      
        
        
    });

    dayFive.forEach(dayData => {
        dayFiveInfo.innerHTML = 
        `
        <p class="card-text-date" id="day2date">Date</p>
        <p class="card-text-icon" id="day2icon">Icon</p>
        <p class="card-text-temp" id="day2temp">Temp: ${dayFive[1]}</p>
        <p class="card-text-wind" id="day2wind">Wind: ${dayFive[2]} MPH</p>
        <p class="card-text-humidity" id="day2hum">Humidity: ${dayFive[3]} %</p>
        `      
        
        
    });

    daySix.forEach(dayData => {
        daySixInfo.innerHTML = 
        `
        <p class="card-text-date" id="day2date">Date</p>
        <p class="card-text-icon" id="day2icon">Icon</p>
        <p class="card-text-temp" id="day2temp">Temp: ${daySix[1]}</p>
        <p class="card-text-wind" id="day2wind">Wind: ${daySix[2]} MPH</p>
        <p class="card-text-humidity" id="day2hum">Humidity: ${daySix[3]} %</p>
        `      
        
        
    });
}