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
    this.size = 0;
  }

  push(animal) {
    let newNode = new Node(animal);
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

class AnimalShelter {
  constructor() {
    this.frontStack = new Stack();
    this.backStack = new Stack();
  }

  enqueue(animal) {
    this.frontStack.push(animal);
  }

  dequeue(animal) {
    let stackSize = this.frontStack.size;
    let correctAnimal;
    if (this.frontStack.size > 0) {
      for (let n = 0; n < stackSize; n++) {
        let poppedValue = this.frontStack.pop();
        this.backStack.push(poppedValue);
      }
      for (let a = 0; a < stackSize; a++) {
        let animalToCompare = this.backStack.pop();
        if (animal === animalToCompare) {
          correctAnimal = animalToCompare;
        } else {
          this.enqueue(animalToCompare);
        }
      }
      return (correctAnimal ? correctAnimal : null);
    }
  }
}

let shelter = new AnimalShelter();

shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('dog');
shelter.enqueue('cat');


console.log(shelter);
let poppedAnimal = shelter.dequeue('hippo');
console.log(poppedAnimal);

module.exports = {
  AnimalShelter,
  Stack,
};
