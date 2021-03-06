# Trees

This week's topic is the data structure `Trees`.  We will be learning about this data structure, how and when to use it, and how to write good code for it's implementation

![Whiteboard](../trees/assets/class-15-uml.png)

![Breadth First WhiteBoard](../trees/assets/breadth-first-uml.png)

![FizzBuzz WhiteBoard](../trees/assets/fizzBuzz-whiteboard.png)

## Challenge

**Challenge 15**
Per the class lecture, implement a `Node` class that will be used with our `Trees`.
Implement a `Binary Tree` Class and accompanying methods
Implement a `Binary Search Tree` Class and accompanying methods
Write passing tests for all classes and methods

**Challenge 16**

For this challenge we were tasked with creating a `getMax` method to the `BinaryTree` class. The purpose is to traverse a tree and return the max value.  

**Challenge 17**

For this challenge we created the `breadthFirst` method which traverses our tree starting at the root and working it's way down.  

**Challenge 18**

For this challenge we were tasked with traversing over an existing K-ary Tree, then returning a new K-ary tree with the values converted to `Fizz`, `Buzz`, `FizzBuzz` of a string value of the number all based on whether the value is divisible by 3 and 5, 3, or 5.

## Approach & Efficiency

My approach is to build off our class lecture and the code that Jacob started.  The binary search tree is essentially like a normal binary tree, just dividing the values based on their relative value to the root. 

I also used this article on [Medium](https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b) (author: Gulgina Arkin) for inspiration and to help further understand the algorithms behind the code.  

## API

- `Node` Class
- `BinaryTree` class
  - `preOrder` method
  - `inOrder` method
  - `postOrder` method
  - `getMax` method
  - `breadthFirst` method
- `BinarySearchTree` class
  - `add` method
  - `contains` method
- `KaryNode` class
- `fizzBuzzTree` function