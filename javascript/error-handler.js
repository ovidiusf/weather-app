import * as COMPONENTS from './elements.js'; 

export function errorHandler(error){
    COMPONENTS.DISPLAY_ERROR.textContent = `${error}`;
    COMPONENTS.DISPLAY_ERROR.style.display = 'block';
    COMPONENTS.LOADING_TEXT_ELEMENT.style.display = 'none';
}