'use strict';

class KaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
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
  let buzzyArray = [];

  fizzyQueue.push(tree.root);
  while (fizzyQueue.length > 0) {
    let length = fizzyQueue.length;
    let current;
    for (let i = 0; i < length; i++) {
      current = fizzyQueue.shift();
      buzzyArray.push(isFuzzBuzzy(current.value));
      for (let child of current.children) {
        fizzyQueue.push(child);
      }
    }
  }
  return buzzyArray;
}


function randomNumber() {
  return Math.floor(Math.random() * 300);
}

let tree = new Tree(new KaryNode(5));
tree.root.children.push(new KaryNode(randomNumber()), new KaryNode(randomNumber()), new KaryNode(randomNumber()));
tree.root.children[0].children.push(new KaryNode(randomNumber()));
tree.root.children[1].children.push(new KaryNode(randomNumber()));
tree.root.children[2].children.push(new KaryNode(randomNumber()));

// let results = tree.traverse();
// console.log(tree.root);
// console.log(tree.root.children);
// console.log(tree.root.children[0].children);
// console.log(tree.root.children[1].children);
// console.log(tree.root.children[2].children);
// console.log(results);

let fizzyResults = fizzBuzzTree(tree);
console.log(fizzyResults);
