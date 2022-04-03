'use-strict';

const { Stack, Queue } = require('./stack-and-queue');

describe('Testing our Stacks and Queues classes and methods', () => {

  test('Should create a new instance of the Stack class.  Since the Stack is empty, the pop and peek methods should return an exception', () => {
    let newStack = new Stack();
    expect(newStack.top).toEqual(null);
    expect(newStack.pop()).toEqual('The Stack is empty');
    expect(newStack.peek()).toEqual('The Stack is empty');
  });

  test('Should add a new Node to the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push(15);
    expect(newStack.top.value).toEqual(15);
  });

  test('Should be able to empty a Stack after successfuly adding several nodes to the stack', () => {
    let newStack = new Stack();
    newStack.push(15);
    newStack.push(76);
    newStack.push(666);
    expect(newStack.top).toBeTruthy();
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toEqual(null);
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

  test('Should return true when the stack is empty, and false when it is not', () => {
    let newStack = new Stack();
    expect(newStack.isEmpty()).toEqual(true);
    newStack.push(44);
    expect(newStack.isEmpty()).toEqual(false);
  });

  test('Should create a new instance of the Queue class. Since the queue is empty the dequeue and peek methods should return an exception ', () => {
    let newQueue = new Queue();
    expect(newQueue.front).toEqual(null);
    expect(newQueue.dequeue()).toEqual('The Queue is empty');
    expect(newQueue.peek()).toEqual('The Queue is empty');
  });

  test('Should add a new node to the back of the Queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1024);
    expect(newQueue.front.value).toEqual(1024);
  });

  test('Should remove a new node from the front of the Queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1024);
    newQueue.enqueue(999);
    newQueue.enqueue(13);
    let dqValue = newQueue.dequeue();
    expect(newQueue.front.value).toEqual(999);
    expect(dqValue).toEqual(1024);
  });

  test('Should empty a queue after successfully adding nodes to the queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1024);
    newQueue.enqueue(999);
    newQueue.enqueue(13);
    expect(newQueue.front).toBeTruthy();
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.front).toEqual(null);
  });

  test('Should "peek" into the queue and return the value from the node at the top of the Stack', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1024);
    newQueue.enqueue(999);
    newQueue.enqueue(13);
    expect(newQueue.peek()).toEqual(1024);
  });

  test('Should return true when the queue is empty, and false when it is not', () => {
    let newQueue = new Queue();
    expect(newQueue.isEmpty()).toEqual(true);
    newQueue.enqueue(44);
    expect(newQueue.isEmpty()).toEqual(false);
  });
});
