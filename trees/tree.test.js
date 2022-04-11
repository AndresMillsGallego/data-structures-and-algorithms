'use strict';


const { Node, BinarySearchTree, BinaryTree } = require('./tree');

describe('Testing our BinaryTree and BinarySearchTree classes', () =>{

  let newTree = new BinaryTree();
  let newSearchTree = new BinarySearchTree();

  test('Should instantiate a new empty Tree', () => {
    expect(newTree.root).toEqual(null);
    expect(newSearchTree.root).toEqual(null);
  });

  test('Should successfully add a single node to a tree', () => {
    newTree.root = new Node(13);
    newSearchTree.add(666);
    expect(newTree.root.value).toEqual(13);
    expect(newSearchTree.root.value).toEqual(666);
  });

  test('Should successfully add a left and right child property to a Binary Search Tree node', () => {
    newSearchTree.add(13);
    newSearchTree.add(999);
    console.log(newSearchTree);
    expect(newSearchTree.root.left.value).toEqual(13);
    expect(newSearchTree.root.right.value).toEqual(999);
  });

  test('Should successfully return results from a call to preOrder method', () => {
    let results = newSearchTree.preOrder();
    expect(results.length).toEqual(3);
    expect(results[0]).toEqual(666);
    expect(results[2]).toEqual(999);
  });

  test('Should successfully return results from a call to inOrder method', () => {
    let results = newSearchTree.inOrder();
    expect(results.length).toEqual(3);
    expect(results[0]).toEqual(13);
    expect(results[1]).toEqual(666);
    expect(results[2]).toEqual(999);
  });

  test('Should successfully return results from a call to postOrder method', () => {
    let results = newSearchTree.postOrder();
    expect(results.length).toEqual(3);
    expect(results[0]).toEqual(13);
    expect(results[1]).toEqual(999);
    expect(results[2]).toEqual(666);
  });

  test('Should return true or false depending on the value passed to the contains method', () => {
    expect(newSearchTree.contains(13)).toEqual(true);
    expect(newSearchTree.contains(5)).toEqual(false);
  });
});
