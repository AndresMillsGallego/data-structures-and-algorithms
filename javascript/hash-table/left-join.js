'use strict';

const leftJoin = (a, b) => {
  let joinedArray = [];
  let keys = a.keys();
  for (let key of keys) {
    let array = [];
    array.push(key[0]);
    array.push(a.get(key[0]));
    if (b.contains(key[0])) {
      array.push(b.get(key[0]));
    } else {
      array.push(null);
    }
    joinedArray.push(array);
  }
  return joinedArray;
};

const HashTable = require('./HashTable');
let a = new HashTable(1024);
let b = new HashTable(1024);

a.set('Luke', 'Skywalker');
a.set('Han', 'Solo');
a.set('Darth', 'Vader');
a.set('Babu', 'Frik');

b.set('Luke', 'Rebel');
b.set('Han', 'Scoundral');
b.set('Boba', 'Bounty Hunter');
b.set('Babu', 'Mechanic');

console.log(a.keys())
console.log(b.keys())
console.log(leftJoin(a,b));

module.exports = leftJoin;
