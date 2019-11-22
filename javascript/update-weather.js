import * as COMPONENTS from './elements.js'; 

export function updateWeather(weatherInfo){
    COMPONENTS.DISPLAY_ERROR.style.display = 'none';
    COMPONENTS.WEATHER_CITY.textContent = weatherInfo.cityName;
    COMPONENTS.WEATHER_DESCRIPTION.textContent = weatherInfo.description;
    COMPONENTS.WEATHER_TEMPERATURE.textContent = weatherInfo.temperature;
    COMPONENTS.WEATHER_BOX.style.display = 'flex';
    COMPONENTS.LOADING_TEXT_ELEMENT.style.display = 'none';   
}