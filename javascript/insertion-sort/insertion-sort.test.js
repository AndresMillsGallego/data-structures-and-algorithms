'use strict';

const insertionSort = require('./insertion-sort');

describe('Testing our insertionSort function', () => {

  let testArray = [8, 4, 23, 42, 16, 15];

  test('Should return a sorted array', () => {
    let sortedArray = insertionSort(testArray);
    expect(sortedArray[0]).toEqual(4);
    expect(sortedArray[5]).toEqual(42);
  });
});

