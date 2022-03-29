'use strict';

// Require our linked list implementation
const LinkedList = require('./linked-list');


describe('Linked List', () => {

  test('Should create a new instance of the Linked List class', () => {
    let newList = new LinkedList();
    expect(newList.head).toEqual(null);
  });

  test('Should add a new node to the HEAD of the list', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    expect(newList.head.value).toEqual(13);
  });

  test('Should return a boolean based on if a value is inlcuded in the list', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    let testBoolTruthy = newList.includes(999);
    let testBoolFalsy = newList.includes(1000);
    expect(testBoolTruthy).toBeTruthy();
    expect(testBoolFalsy).toBeFalsy();
  });

  test('Should print out a string based on the contents of the list', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    let linkedListString = newList.toString();
    expect(linkedListString).toEqual('999 -> 128 -> 67 -> 51 -> 13 -> NULL');
  });

  test('Should add a new node BEFORE the node that contains a given value', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.insertBefore(13, 49);
    expect(newList.head.next.value).toEqual(49);
  });

  test('Should add a new node After the node that contains a given value', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.insertAfter(51, 666);
    expect(newList.head.next.value).toEqual(666);
  });

  test('Should find a node based on a passed value and delete it', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    let deletedNode = newList.deleteNode(67);
    expect(deletedNode).toEqual(67);
  });
});
