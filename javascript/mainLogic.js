import * as COMPONENTS from './elements.js'; 
import {Http} from './requests-http.js';
import { WeatherInfo, WEATHER_PROXY_HANDLER } from './weather-info.js';
import {updateWeather} from './update-weather.js';

COMPONENTS.SEARCH_BUTTON.addEventListener('click', searchWeather);

document.addEventListener('keypress', function(event){
    let key = event.which || event.keyCode;

    if(key === 13){
        searchWeather();
    }
});

const APP_ID = 'a00eacd4f0c77125bdb3257781166d76';

function searchWeather(){
    const CITY_NAME = COMPONENTS.SEARCHED_CITY.value.trim();
    if(CITY_NAME.length === 0){
        return alert('Please enter a city name!')
    }
    COMPONENTS.LOADING_TEXT_ELEMENT.style.display = 'block';
    COMPONENTS.WEATHER_BOX.style.display = 'none';
    // console.log(`Click! You entered ${CITY_NAME}`);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${APP_ID}`;

    Http.fetchData(URL)
        .then(responseData => {
            // console.log("success");
            // console.log("The response is" , responseData);
            // console.log(`The temperature is currently ${responseData.main.temp}`);
            // console.log(`The weather is currently ${responseData.weather[0].description.toUpperCase()}`);
            const WEATHER_INFO = new WeatherInfo(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_INFO, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error));
}

