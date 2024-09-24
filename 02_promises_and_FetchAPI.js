'use strict';

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

const toJSON = (response) => {
  if (response.ok) return response.json();
  else throw new Error(`Country not found (${response.status})`);
};

const getCountryData = (country) =>
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(toJSON)
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(toJSON)
    .then((data) => renderCountry(data[0]))
    .catch((err) => {
      console.log(err);
    });

getCountryData('usa');
