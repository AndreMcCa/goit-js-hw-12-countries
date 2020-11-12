
import callNotification from './pnotyfi.js';


const URL = 'https://restcountries.eu/rest/v2/name/';
const MESSAGE = 'Looks like something went wrong...';

export default function fetchCountries(searchQuery) {
   return fetch(`${URL}${searchQuery}`).then(response => checkRequestSuccess(response)).catch(response => responseError())
}

function checkRequestSuccess(response) {

    if (response.status === 404) {
        throw new Error('Oops! ', MESSAGE);
    }
    
    return response.json();
}

function responseError() {
    callNotification(MESSAGE, 'error')
}

