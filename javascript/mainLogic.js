import * as COMPONENTS from './elements.js'; 

COMPONENTS.SEARCH_BUTTON.addEventListener('click', searchWeather);


function searchWeather(){
    const CITY_NAME = COMPONENTS.SEARCHED_CITY.value.trim();
    if(CITY_NAME.length === 0){
        return alert('Please enter a city name!')
    }
    console.log(`Click! You entered ${CITY_NAME}`);
}
