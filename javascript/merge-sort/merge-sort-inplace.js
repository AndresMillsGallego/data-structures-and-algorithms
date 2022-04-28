'use strict';

function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);

    return merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];

      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    console.log(arr);
    k++;
  } return arr;
  // if (i === left.length) {
  //   return arr;
  // } else {
  //   return arr;
  // }
}

let testArray = [8, 4, 23, 42, 16, 15];


let results = mergeSort(testArray);
console.log('results',results);

module.exports = mergeSort;


