'use strict';

console.log('==== new execution ====');

(async () => {
  const result = await Promise.allSettled([
    Promise.resolve('Success!'),
    Promise.reject('Rejected!'),
  ]);
  console.log(result);
})();

(async () => {
  try {
    // Promise.all will short circuit if there is one rejected promise
    const result = await Promise.all([
      Promise.resolve('Success!'),
      Promise.reject('Rejected!'),
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
