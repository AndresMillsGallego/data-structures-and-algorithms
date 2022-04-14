'use strict';

const { KaryNode, Tree, fizzBuzzTree } = require('./kary-tree');

describe('Testing our K-ary Tree and fizzBuzz function', () => {

  let newTree = new Tree();
  newTree.root = new KaryNode(15);
  newTree.root.children.push(new KaryNode(33));
  newTree.root.children.push(new KaryNode(50));
  newTree.root.children.push(new KaryNode(9));
  newTree.root.children.push(new KaryNode(49));

  test('Should return a new Tree with the values converted appropriately', () => {
    let fizzyTree = fizzBuzzTree(newTree);
    expect(fizzyTree.root.value).toEqual('FizzBuzz');
    expect(fizzyTree.root.children.length).toEqual(4);
    expect(fizzyTree.root.children[0].value).toEqual('Fizz');
    expect(fizzyTree.root.children[1].value).toEqual('Buzz');
    expect(fizzyTree.root.children[2].value).toEqual('Fizz');
    expect(fizzyTree.root.children[3].value).toEqual('49');
  });
});
