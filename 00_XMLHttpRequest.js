'use strict';

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const getCountryData = (country = 'usa') => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    const {
      flag,
      name: { common: commonName },
      region,
      population,
      languages,
      currencies,
    } = data;

    console.log({
      flag,
      commonName,
      region,
      population: (population / 1000000).toFixed(1),
      languages,
      currencies,
    });
  });
};

getCountryData();
getCountryData('ukraine');
getCountryData('germany');
