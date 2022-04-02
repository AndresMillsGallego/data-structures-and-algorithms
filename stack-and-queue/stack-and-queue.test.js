'use-strict';

const { Stack, Queue } = require('./stack-and-queue');

describe('Testing our Stacks and Queues classes and methods', () => {

  test('Should create a new instance of the Stack class', () => {
    let newStack = new Stack();
    expect(newStack.top).toEqual(null);
  });

  test('Should add a new Node to the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push(15);
    expect(newStack.top.value).toEqual(15);
  });

  test('Should remove the Node from the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push(15);
    newStack.push(666);
    let poppedValue = newStack.pop();
    expect(poppedValue).toEqual(666);
  });
});
