'use strict';

console.log('==== new execution ====');

const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery draw is happening!');

  setTimeout(() => {
    const val = Math.random();
    if (val >= 0.5) {
      resolve(val);
    } else {
      reject(new Error(val));
    }
  }, 2000);
});

lotteryPromise.then(console.log).catch((e) => console.log(e, ' caught'));

// Promisifying
const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('waited for 2 secs');
    return wait(1);
  })
  .then(() => console.log('waited for 1 sec'));

Promise.resolve(1).then(console.log);
Promise.reject(new Error(1)).catch(console.log);
