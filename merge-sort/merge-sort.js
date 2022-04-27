'use strict';


function merge(left, right) {
  let mergedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }

  while (left.length) {
    mergedArr.push(left.shift());
  }
  while (right.length) {
    mergedArr.push(right.shift());
  }
  return mergedArr;
}

function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const mergedLeft = mergeSort(left);
    const mergedRight = mergeSort(right);

    return merge(mergedLeft, mergedRight);
  }
}

let testArray = [8, 4, 23, 42, 16, 15];

let results = mergeSort(testArray);
console.log('results',results);

module.exports = mergeSort;
