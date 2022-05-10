# Graphs

For this challenge we are tasked with implementing a new class, the `Graph` data structure.

## Challenge

- Add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph

- Add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph

- Get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)

- Get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection
    size
  - Arguments: none
  - Returns the total number of nodes in the graph

## Approach & Efficiency

My approach will be to build off the work we did during lecture with Jacob and if necessary, do some further research online to learn more about the `Graph` class.

## Code Challenge 36

This challenge was to add the `breadthFirst` method to our `Graph` class.

- `breadthFirst`
  - Arguments: Node
  - Return: A collection of nodes in the order they were visited.

Based on the following Graph example:

![Graph](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-36/graph.PNG)

The output should be:

[Pandora, Arendelle, Metroville, Monstroplolis, Narnia, Naboo]

Building off of the work done in class during lecture, here is my solution (credit to Jacob for getting us started)

```JavaScript
  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    let current = null;
    visited.add(root);
    while (queue.length) {
      current = queue.pop();
      if (cb) cb(current.value);
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }
```

## Code Challenge 37

For this challenge we are tasked with creating a function called `businessTrip` that will return a boolean and $$ value based on if a "direct flight" trip is possible (and if true, the price of the flight) between two cities that get passed in as arguments.

## Challenge

- Write a function called business trip
- Arguments: graph, array of city names
- Return: cost or null

Based on this sample `Graph`:

![Graph Sample](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-37/GraphDay27.PNG)

Here are some possible outputs:


|Input | Output |
|------|--------|
|[Metroville, Pandora, ] |	True, $82|
|[Arendelle, New Monstropolis, Naboo] |	True, $115|
|[Naboo, Pandora]	 | False, $0|
|[Narnia, Arendelle, Naboo] |	False, $0|