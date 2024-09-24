'use strict';

console.log('==== new execution ====');

function resolveAfterNSeconds(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`resolved: ${n}s`);
    }, n * 1000);
  });
}

const asyncCall = async () => {
  console.log('calling');
  try {
    const result1 = await resolveAfterNSeconds(2);
    console.log(result1);
    const result2 = await resolveAfterNSeconds(3);
    console.log(result2);

    return `${result1} - ${result2}`;
  } catch (err) {
    console.log(err);
  }
};

asyncCall().then(console.log);
