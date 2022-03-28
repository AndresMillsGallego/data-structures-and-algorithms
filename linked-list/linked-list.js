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
  }
  // add a node to the start of the list
  addsToStart(value) {
    try {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    } catch (error) {
      console.log('Error with adding a Node to the HEAD: ', error);
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

myList.addsToStart(13);
myList.addsToStart(51);
myList.addsToStart(67);
myList.addsToStart(128);
myList.addsToStart(999);

console.log(myList.head.value);
console.log(myList.includes(999));
console.log(myList.toString());
module.exports = LinkedList;




