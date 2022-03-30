'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a node to the start of the list
  addsToHead(value) {
    try {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    } catch (error) {
      console.log('Error with adding a Node to the HEAD: ', error);
    }
  }

  // add a node to the end of the list
  addsToTail(value) {
    try {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    } catch (error) {
      console.log('Error with adding a Node to the TAIL: ', error);
    }
  }

  // Determines if a passed value exists in the list
  includes(value) {
    try {
      let currentRef = this.head;
      while (currentRef !== null) {
        if (currentRef.value === value) {
          return true;
        }
        currentRef = currentRef.next;
      }
      return false;

    } catch (error) {
      console.log('Error with the includes method: ', error);
    }
  }

  // adds a new node to the list BEFORE a passed value's index
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let currentRef = this.head;
    while (currentRef.next.value !== value) {
      currentRef = currentRef.next;
    }
    let placeHolder = currentRef.next;
    currentRef.next = newNode;
    currentRef.next.next = placeHolder;
    this.length++;
  }

  // adds a new node to the list AFTER a passed value's index
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let currentRef = this.head;
    while (currentRef.value !== value) {
      currentRef = currentRef.next;
    }
    let placeHolder = currentRef.next;
    currentRef.next = newNode;
    currentRef.next.next = placeHolder;
    this.length++;
  }

  // finds a node based on the passed value and deletes it
  deleteNode(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let nodeBefore = this.head;
      let nodeCurrent = nodeBefore.next;
      while (nodeCurrent) {
        if (nodeCurrent.value === value) {
          nodeBefore.next = nodeCurrent.next;
          nodeCurrent = nodeCurrent.next;
          return value;
        } else {
          nodeBefore = nodeCurrent;
          nodeCurrent = nodeCurrent.next;
        }
      }
    }
  }

  // Returns a node's value that is "k" places from the end of the list.
  kthFromEnd(k) {
    let thisManyNodes = this.length - k;
    let nodeCounter = 0;
    let currentRef = this.head;
    if (k > this.length || k < 0) {
      return 'Invalid Number';
    }
    if (this.length === 1) {
      return this.head.value;
    } else {
      while (nodeCounter !== thisManyNodes) {
        currentRef = currentRef.next;
        nodeCounter++;
      }
      return currentRef.value;
    }
  }

  // Returns the value of the node in the middle of the list
  middleNode() {
    let middleIndex = Math.floor(this.length / 2);
    let nodeCounter = 0;
    let currentRef = this.head;
    while (nodeCounter !== middleIndex) {
      currentRef = currentRef.next;
      nodeCounter++;
    }
    return currentRef.value;
  }

  // Returns a string representing the values in the list
  toString() {
    try {
      let linkedListString = '';
      let currentRef = this.head;
      while (currentRef !== null) {
        linkedListString += currentRef.value + ' -> ';
        currentRef = currentRef.next;
        if (currentRef === null) {
          linkedListString += 'NULL';
        }
      }
      return linkedListString;

    } catch (error) {
      console.log('Error converting the list to a string: ', error);
    }
  }
}

let myList = new LinkedList();

myList.addsToHead(13);
console.log(myList.length);
// myList.addsToHead(51);
// myList.addsToHead(67);
// myList.addsToHead(128);
// myList.addsToHead(999);

// console.log(myList.head.value);
// console.log(myList.includes(999));
// console.log(myList.toString());
// myList.addsToTail(4032);
// myList.insertBefore(67, 99);
// myList.insertAfter(999, 1);
// console.log(myList.toString());
// myList.deleteNode(128);
// myList.includes(4032);
// console.log(myList.toString());
// console.log(myList.length);
// console.log(myList.kthFromEnd());
// console.log(myList.middleNode());

module.exports = LinkedList;




