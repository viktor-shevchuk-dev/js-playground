const john = {
  name: 'John',
  run(where, when) {
    console.log(this.name + ' runs', where, when);
  },
};

const ann = { name: 'Ann' };

john.run('in the forest', 'today');
john.run.call(ann, 'in the park', 'tomorrow');
const boundRun = john.run.bind(ann, 'in the park', 'tomorrow');
boundRun();

Function.prototype.customCall = function (self, ...args) {
  console.log(self); // object to bind
  console.log(this); // the function itself
  this.bind(self)(...args);
};

john.run.customCall(ann, 'in the park', 'tomorrow');
