'use strict';

const HashTable = require('../hash-table/HashTable');

// Used the postOrder traversal method as it seemed the most basic to write

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



module.exports = treeIntersection;
