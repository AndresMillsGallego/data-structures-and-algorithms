'use strict';

const HashTable = require('./HashTable');
const leftJoin = require('./left-join');

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


describe('Testing our leftJoin function', () => {

  test('Should return an array of arrays based on the data in the two tables', () => {
    let results = leftJoin(a,b);
    expect(results.length).toEqual(4);
    expect(results[1].includes('Han')).toBeTruthy();
    expect(results[3].includes(null)).toBeTruthy();
  });

});
