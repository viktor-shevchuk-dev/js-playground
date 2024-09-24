'use strict';

console.log('==== new execution ====');

const fs = require('fs');

const path = 'package.json';

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

const readFile = (path, encoding = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        reject(new Error(`Error reading file: ${err}`));
      }
      resolve(`File content: ${data}`);
    });
  });
};

readFile(path).then(console.log).catch(console.log);
