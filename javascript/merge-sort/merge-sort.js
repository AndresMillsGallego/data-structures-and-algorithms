'use strict';

function mergeSort(arr) {

  if (arr.length <= 1){
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  console.log(left, right)
  return merge(left, right);

}


function merge(left, right) {
  let mergedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
    return [...mergedArr, ...left, ...right];
  }

  // while (left.length) {
  //   mergedArr.push(left.shift());
  // }
  // while (right.length) {
  //   mergedArr.push(right.shift());
  // }
  // return mergedArr;
}

let testArray = [8, 4, 23, 42, 16, 15];

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(merge(arr1, arr2));

let results = mergeSort(testArray);
console.log('results',results);

module.exports = mergeSort;
