import * as COMPONENTS from './elements.js'; 

export function errorHandler(){
    COMPONENTS.DISPLAY_ERROR.textContent = 'Something went wrong. The city was not found.';
    COMPONENTS.DISPLAY_ERROR.style.display = 'block';
    COMPONENTS.LOADING_TEXT_ELEMENT.style.display = 'none';
}