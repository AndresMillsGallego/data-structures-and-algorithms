'use strict';

// code along with Jacob during our class discussion on linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = value ? new Node(value) : null;
    
  }

  // read all values in the list while traversing
  traverse(callback) {
    try {
      let currentRef = this.head;
      while(currentRef !== null) {
        callback(currentRef.value);
        currentRef = currentRef.next;
      }

    } catch (error) {
      console.log('Error with the traverse method: ', error);
    }
  }
  // add values to the end of the list
  add() {
  }

  // Determines if a passed value exists in the list
  includes(value) {
    try {
      let currentRef = this.head;
      while(currentRef !== null) {
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

  // add values to the start of the list
  addsToStart(value) {
    try {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;

    } catch (error) {
      console.log('Error with adding a Node to the HEAD: ', error);
    }
  }

  // Returns a string representing the values in the list
  toString() {
    try {
      let linkedListString = '';
      let currentRef = this.head;
      while(currentRef !== null) {
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

let ll = new LinkedList();
console.log(ll);

let nodeA = new Node(20);
let nodeB = new Node(25);
let nodeC = new Node(12);
let nodeD = new Node(-13);

ll.head = nodeA;
ll.head.next = nodeB;
ll.head.next.next = nodeC;
ll.head.next.next.next = nodeD;

console.log(ll.toString());
ll.addsToStart(101);
console.log(ll.toString());
console.log(ll.includes(45));

module.exports = {
  LinkedList,
  Node,
};




