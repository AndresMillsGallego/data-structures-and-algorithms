'use strict';

const mergeSort = require('./merge-sort');

describe('Testing our mergeSort function', () => {

  const testArray = [8, 4, 23, 42, 16, 15];

  test('Should sort the array', () => {
    const sortedArray = mergeSort(testArray);
    expect(sortedArray[0]).toEqual(4);
    expect(sortedArray[5]).toEqual(42);
  });

});
