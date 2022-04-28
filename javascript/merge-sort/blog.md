# Code Challenge 27 - Merge Sort

![Merge](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_kvsIh4zKrUIkzE333T9FIcgzrNT42peiw&usqp=CAU)

## Problem Domain

For this challenge we are tasked with creating the `mergeSort` function and once again are given some pseudocode in `Java`

Pseudocode:

``` Java
  
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## What does it do?

After examining the above pseudocode, I would guess that the idea with this function is to split the initial array that gets passed in as the argument into a right and a left side (kind of like with a binary search).  These smaller arrays then get sorted, and finally it all ends with the initial array getting sorted in place.  

The easier method, in my opinion, would be to return a new array, but I understand the value in learning this in place method.

![Later](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9RNgRxQiovIdfDt4wQrA7InGQpI7a1xpGQ&usqp=CAU)


After extensive research, it seems that the go-to method for merge sort is to indeed return a new array, so for now I am going to proceed with this method

## Visual Representation

See below for an excellent representation of the merge sort algorithm provided by [w3resource](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-2.php)

![Merge Sort](https://www.w3resource.com/w3r_images/merge_sort.png)


Here is my working `merge` function:

```JavaScript
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
```

And my working `mergeSort` function:

```JavaScript
function mergeSort(arr) {
  const mid = Math.floor(arr.length / 2);

  if (arr.length < 2){
    return arr;
  }
  const left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));

}
```

I want to give credit to this excellent [article](https://stackabuse.com/merge-sort-in-javascript/) by Abhilash Kakumanu that I used to better understand this algorithm.


![Celebrate](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlNQ9LQj0taf0ivw4c3vT4hK34qF1cjwuEQ&usqp=CAU)


