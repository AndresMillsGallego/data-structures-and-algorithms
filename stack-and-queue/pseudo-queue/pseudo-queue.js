'use strict';

const { Node } = require('../stack-and-queue');

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    try {
      if (this.size > 0) {
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.size--;
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
      if (this.top !== null) {
        return this.top.value;
      } else {
        return 'The Stack is empty';
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

class PseudoQueue {
  constructor() {
    this.frontStack = new Stack();
    this.backStack = new Stack();
  }

  enqueue(value) {
    this.frontStack.push(value);
  }

  dequeue() {
    let stackSize = this.frontStack.size;
    if (this.frontStack.size > 0) {
      for (let n = 0; n < stackSize; n++) {
        let poppedValue = this.frontStack.pop();
        this.backStack.push(poppedValue);
        console.log(this.frontStack.size);
      }
    }
    return this.backStack.pop();
  }
}

// let trippyQueue = new PseudoQueue();
// trippyQueue.enqueue(5);
// trippyQueue.enqueue(21);
// trippyQueue.enqueue(66);
// console.log(trippyQueue);
// let popped = trippyQueue.dequeue();
// console.log(popped);

module.exports = {
  PseudoQueue,
  Stack,
};
