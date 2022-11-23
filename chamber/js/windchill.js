const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentTemp = document.querySelector('#current-temp');
const wSpeed = document.querySelector('#wSpeed');
const wChill = document.querySelector('#wChill');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=81887b7776f7c49434d1ab8d31032037';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        array = displayResults(data);
        elements(array)

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();


function  displayResults(weatherData) {
    const temperature = weatherData.main.temp;
    const windSpeed = weatherData.wind.speed; 
    const windChill = windChillCalculate(temperature, windSpeed)
    const description = weatherData.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    return [temperature, windSpeed, windChill, description, iconsrc]
}

function elements(array) {
    currentTemp.textContent = array[0]
    wSpeed.textContent = array[1]
    wChill.textContent = array[2]
    captionDesc.textContent = array[3]
    weatherIcon.setAttribute('src', array[4])
    weatherIcon.setAttribute('alt', array[3])
}



function windChillCalculate(t, s){
    if (t<=50){
        if (s > 3.0){
            const wc = Math.round(35.74 + (0.6215 * t) - (35.75 * s) **0.16 + (0.4275 * t * s) **0.16)
            return wc
        } else {
            const wc = 'N/A'
            return wc
        }
    } else {
        const wc = 'N/A'
        return wc
    }
}