# Challenge Summary

The challenge this week is to create the `treeIntersection` function.

- Arguments - 2 Binary Trees
- Output - Returns a list of values that are contained in both trees.

## Approach & Efficiency

My approach will essentially be to piece together the classes and methods that I have already built.  I will utilize my:

- `Node` class
- `BinaryTree` class
- `HashTable` class

and all the appropriate methods that I already have at my disposal.  
I will use the `postOrder` traversal method, but I will change what we do when each value is reached. 

The first traversal of `BinaryTree` "a" will add all the values to the `HashTable`.
Then, when we traverse `BinaryTree` "b" we will just look at the values in each node, then check to see if they exist in the `HashTable`.
If they do, let's push that value to our intersections array.  If not, we move on!

## Solution

Finished code example:

```JavaScript
  const treeIntersection = (a, b) => {
  // Sets empty array to store and return the duplicate values
  let intersections = [];
  // Creates a new table to store the first Tree's values
  let table = new HashTable(1024);
  // this function stores the values into the Hast Table
  let setTable = (a) => {
    if (a.left) setTable(a.left);
    if (a.right) setTable(a.right);
    table.set(a.value.toString());
  };
  setTable(a.root);

  // This function compares the values in the 2nd tree, and if they exist in the Hash Table, they get pushed to the intersections array
  let compare = (b) => {
    if (b.left) compare(b.left);
    if (b.right) compare(b.right);
    if (table.contains(b.value.toString())) {
      intersections.push(b.value);
    }
  };
  compare(b.root);
  // Returns the final array with any duplicate values stored inside
  return intersections;
};
```