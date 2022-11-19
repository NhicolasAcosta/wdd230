const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=81887b7776f7c49434d1ab8d31032037';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          console.log(`Response not OK ${await response.text()}`);
      }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
  
apiFetch();