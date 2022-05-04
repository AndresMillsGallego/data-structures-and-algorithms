'use strict';

const treeIntersection = require('./tree-intersection');
const { BinaryTree, Node } = require('../trees/tree/tree');

describe('Testing our treeIntersection function', () => {

  const a = new BinaryTree();
  a.root = new Node(13);
  a.root.left = new Node(99);
  a.root.right = new Node(5);
  a.root.left.left = new Node(666);
  a.root.right.right = new Node(1);

  const b = new BinaryTree();
  b.root = new Node(13);
  b.root.left = new Node(9);
  b.root.right = new Node(52);
  b.root.left.left = new Node(666);
  b.root.right.right = new Node(1);

  test('Should return an array with the correct values', () => {
    let results = treeIntersection(a, b);
    expect(results.length).toEqual(3);
    expect(results[0]).toEqual(666);
    expect(results[2]).toEqual(13);
  });

});
