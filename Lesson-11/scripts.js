//------------------ GET DAYS --------------------//
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date();
const day = date.getDay();
let day1 = '';
let day2 = '';
let day3 = '';

//---DAY 1 ---//
function getDay1(){
    if (days[day] != 6){
        day1 = days[day+1];
    }else{
        day1 = days[day-6]
    }
}
//---DAY 2 ---//
function getDay2(){
    if (days[day] < 5){
        day2 = days[day+2];
    }else{
        day2 = days[day-5];
    }
}
//---DAY 3 ---//
function getDay3(){
    if (days[day] < 4){
        day3 = days[day+3];
    }else{
        day3 = days[day-4];
    }
}
getDay1()
getDay2()
getDay3()


//------------------ CURRENT WEATHER --------------------//

const currentWeather = document.querySelector('.current-weather')
const cwURL = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=b045804ab93431828b3e101e2be26dc1';

async function getCurrentWeather() {
    try {
      const response = await fetch(cwURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        let array = displayResults(data)
        elements(array)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
getCurrentWeather()

function  displayResults(weatherData) {
    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity; 
    const description = weatherData.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    return [temperature, humidity, description, iconsrc]
}

function elements(array) {
    currentWeather.innerHTML = `
    <div class="current-temp">
            <span id="current-temp">${array[0]}&#176;C</span>
        </div>
        <div class="humidity">
            <span id="humidity">${array[1]}%</span>
        </div>
        <figure>
            <img src="${array[3]}" alt="weather-icon" id="weather-icon"/>
            <figcaption>${array[2]}</figcaption>
        </figure>
    </div>
    `
}


// //------------------ CURRENT WEATHER --------------------//

const forecastWeather = document.querySelector('.forecast-weather');
const forecast_URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.1581&lon=-117.3506&exclude=minutely,hourly&units=metric&appid=b045804ab93431828b3e101e2be26dc1'

async function getForecast() {
    try {
      const response = await fetch(forecast_URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        let array = setForecastResult(data)
        setForecastElement(array)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
getForecast()

function setForecastResult(forecastData) {
    const d1Min = forecastData.daily[0].temp.min;
    const d1Max = forecastData.daily[0].temp.max;
    const d2Min = forecastData.daily[1].temp.min;
    const d2Max = forecastData.daily[1].temp.max;
    const d3Min = forecastData.daily[2].temp.min;
    const d3Max = forecastData.daily[2].temp.max;
    return [d1Min, d1Max, d2Min, d2Max, d3Min, d3Max]
}

function setForecastElement(array) {
    forecastWeather.innerHTML = `
        <div class="day-1">
            <h3 class="day-">${day1}</h3>
            <span id="min">${array[0]}&#176;</span>
            <span id="max">${array[1]}&#176;</span>
        </div>
        <div class="day-2">
            <h3 class="day-">${day2}</h3>
            <span id="min">${array[2]}&#176;</span>
            <span id="max">${array[3]}&#176;</span>
        </div>
        <div class="day-3">
            <h3 class="day-">${day3}</h3>
            <span id="min">${array[4]}&#176;</span>
            <span id="max">${array[5]}&#176;</span>
        </div>`;
}