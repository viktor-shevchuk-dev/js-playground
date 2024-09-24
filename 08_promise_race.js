'use strict';

console.log('==== new execution ====');

const toJSON = (response) => {
  if (response.ok) return response.json();
  else throw new Error(`Country not found (${response.status})`);
};

const getJSON = (url) => fetch(url).then(toJSON);

const baseUrl = 'https://restcountries.com/v3.1/name';

const getCountries = async (c1, c2, c3) => {
  try {
    const url1 = `${baseUrl}/${c1}`;
    const url2 = `${baseUrl}/${c2}`;
    const url3 = `${baseUrl}/${c3}`;

    const data = await Promise.race([
      getJSON(url1),
      getJSON(url2),
      getJSON(url3),
    ]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getCountries('poland', 'canada', 'tanzania');

const timeout = (sec) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

(async () => {
  try {
    const data = await Promise.race([getJSON(`${baseUrl}/usa`), timeout(4)]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
