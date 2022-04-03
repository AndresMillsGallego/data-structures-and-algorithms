# Stacks and Queues

- Stacks and Queues are data structures that are similar to Linked Lists.  The main differences are:
  1. They operate under a `FILO` and `FIFO` order respectively
  2. Stacks use the **F**irst **I**n **L**ast **O**out (`FILO`), and Queues use the **F**irst **I**n **F**irst **O**out (`FIFO`)
  3. Stacks store their data vertically, or rather that is how I like to envision them (like stacks of pancakes!)
  4. Queues store their data horizontally (like people waiting in a queue!)

## Challenge

### Code Challenge 10

New implementation of the `Node`, `Stack` and `Queue` classes and their respective methods. 

- `Node` Class is used to create a node assigning it a value that is passed in as an argument, and a `this.next property`

- `Stack` Class is used to instantiate new "Stacks" to hold nodes.  This class will use the following methods:
  - `push` 
    - Arguments:  a `value`
    - Adds a new node with the passed in value to the `top` of the stack
  - `pop`
    - Arguments:  none
    - Removes the node from the `top` of the stack
    -  Returns:  the value of the "popped" node
    - if the stack is empty it should return an exception
  - `peek`
    - Arguments: none
    - Returns:  the value of the node at the `top` of the stack
    - if the stack is empty it should return an exception
  - `isEmpty`
    - Arguments: none
    - Returns:  a boolean indicating whether or not the stack is empty

- `Queue` Class is used to instantiate new "Queues" to hold nodes.  This class will use the following methods:
  - `enqueue`
    - Arguments: a `value`
    - - Adds a new node with the passed in value to the `back` of the queue
  - `dequeue`
    - Arguments: none
    - Removes the node from the `front` of the queue
    -  Returns:  the value of the "dequeued" node
    - if the queue is empty it should return an exception
  - `peek`
    - Arguments: none
    - Returns:  the value of the node at the `front` of the queue
    - if the queue is empty it should return an exception
  - `isEmpty`
    - Arguments: none
    - Returns:  a boolean indicating whether or not the queue is empty

## Approach and Efficiency

My approach will be to tackles these problems using the same logic we implemented in the Linked Lists.  If I understand it correctly, all we are doing with any of these methods is reassigning the references, or "pointers" of the nodes to ensure proper functionality.

## Solutions

Sample of my code for the `dequeue` method:

``` JavaScript
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
```