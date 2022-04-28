'use strict';

function mergeSort(arr) {
  const mid = Math.floor(arr.length / 2);

  if (arr.length < 2){
    return arr;
  }
  const left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));

}


function merge(left, right) {
  let mergedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }
  return [...mergedArr, ...left, ...right];
}

let testArray = [8, 4, 23, 42, 16, 15];

let results = mergeSort(testArray);
console.log('results',results);

module.exports = mergeSort;
