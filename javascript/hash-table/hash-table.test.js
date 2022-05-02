'use strict';

const HashTable = require('./HashTable');

describe('Testint our new Hash Table class', () => {

  const testTable = new HashTable(1024);

  test('Should make a new instance of the HashTable class and successfully hash a key', () => {
    let hashyTable = new HashTable(1024);
    let key = hashyTable.hash('Colombia');
    expect(hashyTable.size).toEqual(1024);
    expect(typeof key).toEqual('number');
  });

  test('The set method should add a new value in the form of a Linked List to the table', () => {
    testTable.set('Nova', 'Beautiful Cat');
    let result = testTable.contains('Nova');
    expect(result).toEqual(true);
  });

  test('The get method should return the appropraite value from the table', () => {
    let testValue = testTable.get('Nova');
    let nullValue = testTable.get('Not There');
    expect(testValue).toEqual('Beautiful Cat');
    expect(nullValue).toEqual(null);
  });

  test('Should return a list of keys from the table', () => {
    testTable.set('Petra', 5);
    testTable.set('Star', 'Wars');
    let results = testTable.keys();
    console.log(results);
    expect(results[2].includes('Star')).toBeTruthy();
  });

});
