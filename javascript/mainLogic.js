import * as COMPONENTS from './elements.js'; 
import {Http} from './requests-http.js';

COMPONENTS.SEARCH_BUTTON.addEventListener('click', searchWeather);

const APP_ID = 'a00eacd4f0c77125bdb3257781166d76';

function searchWeather(){
    const CITY_NAME = COMPONENTS.SEARCHED_CITY.value.trim();
    if(CITY_NAME.length === 0){
        return alert('Please enter a city name!')
    }
    console.log(`Click! You entered ${CITY_NAME}`);

    const URL = `//api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${APP_ID}`;

    Http.fetchData(URL)
        .then(responseData => {
            console.log("success");
        })
        .catch(error => alert(error));
}
