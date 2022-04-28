# Code Challenge 27 - Quick Sort

![Quick](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsy1h94MLqsv3vDltF5-HQ-Vy-Rm-P1TBjeQ&usqp=CAU)

For this challenge we are tasked with implementing the `quickSort` function based on the following pseudocode:

```Java
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

Here we have one main function, `quickSort`, that relies on two functions that get called inside - `partition` and `swap`.

The whole idea behind this function is to sort an array in place.  The `pivot` variable is key to the whole process.  
I understand the process as such:

1. Pass in the array and set the left and right to the start and end index positions of the array
2. We need to set the `position` variable using the `partition` function
3.  We then call the `quickSort` function recursively on the parts of the array that lie to the left and the right of the `position`
4. In our pseudocode the `pivot` is set to our "right" variable, though any value could be used here.
5.  We compare the values in the array to the value at `pivot`, then if the condition is met `(arr[i] <= pivot)`, we call `swap` and increment low.  If that condition is not met, we call `swap` and return `low + 1`
6. This takes the `pivot` and sets a `position` and sorts the array in small bits until the entire array is sorted!

See below for an excellent visual representation of the algorithm provided by [W3Resource](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-1.php)

![Quick Sort](https://www.w3resource.com/w3r_images/quick-sort-part-2.png)


And an animation as well!

![Quick Sort Animation](https://www.w3resource.com/w3r_images/Sorting_quicksort_anim.gif)