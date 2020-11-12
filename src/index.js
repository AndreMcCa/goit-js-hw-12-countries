const debounce = require('lodash.debounce');

import getRefs from './js/refs.js';
import requestOnServer from './js/fetchCountries.js';
import callNotification from './js/pnotyfi.js';
import countryInfo from './templates/country.hbs';
import countriesList from './templates/countries.hbs';

import './styles.css';

const MESSAGE = 'Too many matches found. Please enter a more specific query!';
const refs = getRefs();
refs.inputRef.addEventListener('input', debounce(onReadingFormData, 500));


function onReadingFormData(e) {
    e.preventDefault();

    const searchQuery = e.target.value;

    if (searchQuery.length  === 0) {

        refs.queryOutputRef.innerHTML = '';
        refs.queryOutputRef.classList.remove('query-output');

        return
    }

    requestOnServer(searchQuery).then(checkingLengthResponse)
}

function checkingLengthResponse(response) {

    if (response.length === 1) {
        renderCountryCard(response);
    } else if (response.length <= 10) {
        renderCountries(response);
    } else {
        callNotification(MESSAGE);
    }
}



function renderCountryCard(data) {
    const markup = countryInfo(data);
    
    refs.queryOutputRef.classList.add('query-output');
    refs.queryOutputRef.innerHTML = '';
    refs.queryOutputRef.insertAdjacentHTML('beforeend', markup);
}

function renderCountries(data) {
    const markup = countriesList(data);

    refs.queryOutputRef.classList.add('query-output');
    refs.queryOutputRef.innerHTML = '';
    refs.queryOutputRef.insertAdjacentHTML('beforeend', markup);
}







