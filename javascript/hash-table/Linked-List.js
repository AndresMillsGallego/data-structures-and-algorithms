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
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.length++;
  }

  includes(key) {
    let currentRef = this.head;
    while (currentRef !== null) {
      if (currentRef.value[key] === key) {
        return currentRef.value;
      }
    }
  }
}

module.exports = LinkedList;
