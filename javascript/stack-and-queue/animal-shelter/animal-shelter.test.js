'use strict';

const { AnimalShelter, Stack } = require('./animal-shelter');

describe('Testing our AnimalShelter class', () => {

  test('Should create a new instance of the Stack class.', () => {
    let newStack = new Stack();
    expect(newStack.top).toEqual(null);
  });

  test('Should add a new Animal Node to the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push('cat');
    expect(newStack.top.value).toEqual('cat');
  });

  test('Should remove the Node from the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push('dog');
    newStack.push('cat');
    newStack.push('cat');
    let poppedValue = newStack.pop();
    expect(newStack.top.value).toEqual('cat');
    expect(poppedValue).toEqual('cat');
  });

  test('Should create a new instance of the AnimalShelter class with 2 empty Stacks inside', () => {
    let fuzzyQueue = new AnimalShelter();
    expect(fuzzyQueue.frontStack.top).toEqual(null);
    expect(fuzzyQueue.backStack.top).toEqual(null);
  });

  test('Should be able to add several nodes to the frontStack in the AnimalShelter', () => {
    let fuzzyQueue = new AnimalShelter();
    fuzzyQueue.enqueue('cat');
    fuzzyQueue.enqueue('dog');
    fuzzyQueue.enqueue('cat');
    fuzzyQueue.enqueue('dog');
    expect(fuzzyQueue.frontStack.size).toEqual(4);
    expect(fuzzyQueue.frontStack.top.value).toEqual('dog');
    expect(fuzzyQueue.frontStack.top.next.value).toEqual('cat');
    expect(fuzzyQueue.backStack.top).toEqual(null);
  });

  test('Should be able to dequeue an Animal node based on a passed in animal preference.  Return null if animal not found', () => {
    let fuzzyQueue = new AnimalShelter();
    fuzzyQueue.enqueue('cat');
    fuzzyQueue.enqueue('dog');
    fuzzyQueue.enqueue('cat');
    fuzzyQueue.enqueue('dog');
    let correctAnimal = fuzzyQueue.dequeue('dog');
    expect(correctAnimal).toEqual('dog');
    expect(fuzzyQueue.backStack.size).toEqual(0);
    let incorrectAnimal = fuzzyQueue.dequeue('hippo');
    expect(incorrectAnimal).toEqual(null);
  });
});
