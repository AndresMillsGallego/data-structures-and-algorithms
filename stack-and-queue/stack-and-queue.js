'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    try {
      if (!this.isEmpty()) {
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp.value;
      } else {
        return 'The Stack is empty';
      }
    } catch (error) {
      console.log(error.message);
    }
  }


  peek() {
    try {
      if (!this.isEmpty()) {
        return this.top.value;
      } else {
        return 'The Stack is empty';
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  isEmpty() {
    return (this.top === null);
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.isEmpty()) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    try {
      if (!this.isEmpty()) {
        let temp = this.front;
        this.front = this.front.next;
        if (!temp.next) {
          this.back = null;
        }
        temp.next = null;
        return temp.value;
      } else {
        return 'The Queue is empty';
      }
    } catch (error) {
      console.log(error.message);
    }
  }


  peek() {
    try {
      if (!this.isEmpty()) {
        return this.front.value;
      } else {
        return 'The Queue is empty';
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  isEmpty() {
    return (this.front === null);
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};

