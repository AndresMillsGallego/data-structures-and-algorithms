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

  test('Should return a node\'s value depending on it\'s "k"position from the tail of the list', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    let kthNodeValue = newList.kthFromEnd(3);
    expect(kthNodeValue).toEqual(67);
  });

  test('Should return "Invalid Number" if the passed k value is bigger than the length of the list', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    let kthNodeValue = newList.kthFromEnd(6);
    expect(kthNodeValue).toEqual('Invalid Number');
  });

  test('If a linked list is only 1 node long, then it should return that node\'s value as long as <=k<=1 ', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    let kthNodeValue = newList.kthFromEnd(0);
    expect(kthNodeValue).toEqual(13);
  });

  test('Should return "Invalid Number" if a negative value is passed into k', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    let kthNodeValue = newList.kthFromEnd(-5);
    expect(kthNodeValue).toEqual('Invalid Number');
  });

  test('Should return with the value of the first node if k === this.length', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    let kthNodeValue = newList.kthFromEnd(5);
    expect(kthNodeValue).toEqual(999);
  });

  test('Should return with the value of the "happy path", somewhere near the middle of the list', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    newList.addsToHead(4);
    newList.addsToHead(1328);
    newList.addsToHead(666);
    let kthNodeValue = newList.kthFromEnd(4);
    expect(kthNodeValue).toEqual(128);
  });

  test('Should return the node\'s value at the middle of the list', () => {
    let newList = new LinkedList();
    newList.addsToHead(13);
    newList.addsToHead(51);
    newList.addsToHead(67);
    newList.addsToHead(128);
    newList.addsToHead(999);
    let middleNodeValue = newList.middleNode();
    expect(middleNodeValue).toEqual(67);
  });

  test('Should merge two lists together alternatively', () => {
    let myList = new LinkedList();

    myList.addsToHead(13);
    myList.addsToHead(51);
    myList.addsToHead(67);

    let yourList = new LinkedList();
    yourList.addsToHead(128);
    yourList.addsToHead(999);
    yourList.addsToHead(4032);

    let zippedList = new LinkedList();
    zippedList.zipTwoLists(myList, yourList);
    expect(zippedList.length).toEqual(6);
    expect(zippedList.head.value).toEqual(67);
    expect(zippedList.tail.value).toEqual(128);

  });

  test('Should merge two lists together alternatively, even when they are different sized lists', () => {
    let myList = new LinkedList();

    myList.addsToHead(13);
    myList.addsToHead(51);
    myList.addsToHead(67);
    myList.addsToHead(666);

    let yourList = new LinkedList();
    yourList.addsToHead(128);
    yourList.addsToHead(999);
    yourList.addsToHead(4032);

    let zippedList = new LinkedList();
    zippedList.zipTwoLists(myList, yourList);
    expect(zippedList.length).toEqual(7);
    expect(zippedList.head.value).toEqual(666);
    expect(zippedList.tail.value).toEqual(13);

  });
});
