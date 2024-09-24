'use strict';

console.log('==== new execution ====');

(async () => {
  try {
    // Will return the first fulfilled promise. Will ignore rejected promises. The result will alwayb be a fulfilled promise. Unless all of them reject.
    const result = await Promise.any([
      Promise.resolve('Success!'),
      Promise.reject('Rejected!'),
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
