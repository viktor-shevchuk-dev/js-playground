'use strict';

console.log('==== new execution ====');

const toJSON = (response) => {
  if (response.ok) return response.json();
  else throw new Error(`Country not found (${response.status})`);
};

const getJSON = (url) => fetch(url).then(toJSON);

const getCountries = async (c1, c2, c3) => {
  try {
    const baseUrl = 'https://restcountries.com/v3.1/name';
    const url1 = `${baseUrl}/${c1}`;
    const url2 = `${baseUrl}/${c2}`;
    const url3 = `${baseUrl}/${c3}`;

    const data = await Promise.all([
      getJSON(url1),
      getJSON(url2),
      getJSON(url3),
    ]);
    console.log(data.map((c) => c[0].capital[0]));
  } catch (err) {
    console.log(err);
  }
};

getCountries('poland', 'canada', 'tanzania');
