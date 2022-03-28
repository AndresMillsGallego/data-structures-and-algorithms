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
  }

  // adds a new node to the list AFTER a passed value's index
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
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
myList.addsToHead(51);
myList.addsToHead(67);
myList.addsToHead(128);
myList.addsToHead(999);

console.log(myList.head.value);
console.log(myList.includes(999));
console.log(myList.toString());
myList.addsToTail(4032);
console.log(myList.toString());
module.exports = LinkedList;




