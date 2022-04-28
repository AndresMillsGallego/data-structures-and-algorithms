'use strict';

const quickSort = require('./quick-sort');

describe('Testing our quickSort function', () => {

  const testArray = [8, 4, 23, 42, 16, 15];
  const left = 0;
  const right = testArray.length - 1;

  test('Should sort the testArray', () => {
    quickSort(testArray, left, right);
    expect(testArray[left]).toEqual(4);
    expect(testArray[right]).toEqual(42);
  });

});
