'use strict';

const { PseudoQueue, Stack } = require('./pseudo-queue');

describe('Testing our PseudoQueue and Stack classes and methods', () => {

  test('Should create a new instance of the Stack class.', () => {
    let newStack = new Stack();
    expect(newStack.top).toEqual(null);
  });

  test('Should add a new Node to the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push(15);
    expect(newStack.top.value).toEqual(15);
  });

  test('Should create a new instance of the PseudoQueue class with 2 empty Stacks inside', () => {
    let trippyQueue = new PseudoQueue();
    expect(trippyQueue.frontStack.top).toEqual(null);
    expect(trippyQueue.backStack.top).toEqual(null);
  });

  test('Should remove the Node from the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push(15);
    newStack.push(76);
    newStack.push(666);
    let poppedValue = newStack.pop();
    expect(newStack.top.value).toEqual(76);
    expect(poppedValue).toEqual(666);
  });

  test('Should "peek" into the stack and return the value from the node at the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push(15);
    newStack.push(666);
    expect(newStack.peek()).toEqual(666);
  });

  test('Should be able to add several nodes to the frontStack in the PseudoQueue', () => {
    let trippyQueue = new PseudoQueue();
    trippyQueue.enqueue(10);
    trippyQueue.enqueue(20);
    trippyQueue.enqueue(30);
    expect(trippyQueue.frontStack.size).toEqual(3);
    expect(trippyQueue.frontStack.top.value).toEqual(30);
    expect(trippyQueue.frontStack.top.next.value).toEqual(20);
    expect(trippyQueue.backStack.top).toEqual(null);
  });

  test('Should be able to dequeue a value from the PseudoCode using a FIFO system', () => {
    let trippyQueue = new PseudoQueue();
    trippyQueue.enqueue(10);
    trippyQueue.enqueue(20);
    trippyQueue.enqueue(30);
    let outOfLineValue = trippyQueue.dequeue();
    expect(outOfLineValue).toEqual(10);
    expect(trippyQueue.frontStack.top).toEqual(null);
  });
});
