'use strict';

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const renderCountry = ({
  flag,
  name: { common: commonName },
  region,
  population,
  languages,
  currencies,
}) =>
  console.log({
    flag,
    commonName,
    region,
    population: (population / 1000000).toFixed(1),
    languages,
    currencies,
  });

const getCountryAndNeighbour = (country = 'ukraine') => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);

    const [neighbour] = data.borders;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2);
    });
  });
};

getCountryAndNeighbour('usa');
