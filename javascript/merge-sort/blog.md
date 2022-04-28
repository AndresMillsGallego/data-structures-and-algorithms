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



