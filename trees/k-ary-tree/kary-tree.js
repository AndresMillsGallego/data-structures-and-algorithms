'use strict';

class KaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverse() {
    let fizzyQueue = [];
    fizzyQueue.push(this.root);
    let results = [];
    while (fizzyQueue.length > 0) {
      let length = fizzyQueue.length;
      let current;
      for (let i = 0; i < length; i++) {
        current = fizzyQueue.shift();
        results.push(current.value);
        for (let child of current.children) {
          fizzyQueue.push(child);
        }
      }
    }
    return results;
  }
}

// Helper function to return one of the 3 values
function isFuzzBuzzy(value) {
  let newValue;
  if (value % 3 === 0 && value % 5 === 0) {
    newValue = 'FizzBuzz';
  } else if (value % 3 === 0) {
    newValue = 'Fizz';
  } else if (value % 5 === 0) {
    newValue = 'Buzz';
  } else {
    newValue = value.toString();
  }
  return newValue;
}





function fizzBuzzTree(tree) {
  let fizzyQueue = [];
  let newTree = new Tree();

  fizzyQueue.push(tree.root);

  while (fizzyQueue.length > 0) {
    let length = fizzyQueue.length;
    let current;
    for (let i = 0; i < length; i++) {
      current = fizzyQueue.shift();
      if (newTree.root === null) {
        newTree.root = new KaryNode(isFuzzBuzzy(current.value));
      } else {
        newTree.root.children.push(new KaryNode(isFuzzBuzzy(current.value)));
      }
      for (let child of current.children) {
        fizzyQueue.push(child);
      }
    }
  }
  return newTree;
}

// Saving this functino to generate random numbers for the Nodes
// function randomNumber() {
//   return Math.floor(Math.random() * 300);
// }

// let tree = new Tree();
// tree.root = new KaryNode(15);
// tree.root.children.push(new KaryNode(20), new KaryNode(25), new KaryNode(30));


// let fizzyResults = fizzBuzzTree(tree);
// console.log(fizzyResults);
// console.log(fizzyResults.root.children);

module.exports = {
  KaryNode,
  Tree,
  fizzBuzzTree
};

