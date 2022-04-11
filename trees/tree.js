'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let results = [];
    let traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  breadthFirst() {
    let results = [];
    let current = this.root;
    let children = [current];
    while (children.length) {
      current = children.pop();
      results.push(current.value);
      if (current.left) children.unshift(current.left);
      if (current.right) children.unshift(current.right);
    }
    return results;
  }

  // Returns the max value from a BinaryTree instance.
  getMax() {
    // Any of the traversal methods could work here.
    return Math.max(...this.breadthFirst());
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }
  // Adds a new node to the correct side of the tree based on it's value
  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return 'That value already exists';
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Returns a boolean indicating whether or not the passed value exists in the Tree
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let isNodeFound;

    while (current && !isNodeFound) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        isNodeFound = current;
      }
    }
    if (isNodeFound) return true;
    else return false;
  }
}



module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};

let tree = new BinarySearchTree();
console.log(tree);
tree.add(13);
console.log(tree);
tree.add(40);
console.log(tree);
tree.add(7);
console.log(tree);
console.log(tree.contains(20));
console.log(tree.getMax());
