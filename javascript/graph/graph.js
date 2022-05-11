'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.neighborList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.neighborList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(start, end, weight) {
    const neighbors = this.neighborList.get(start);
    neighbors.push(new Edge(end, weight));
  }

  getNeighbors(vertex) {
    return [...this.neighborList.get(vertex)];
  }

  getNodes() {
    return this.neighborList;
  }

  size() {
    return this.neighborList.size;
  }

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

  depthFirst(root, cb) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
    while (stack.length) {
      current = stack.pop();
      if (cb) cb(current.value);
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }
}

const businessTrip = (graph, cities) => {
  // If the graph is empty, break out and return this message
  if (!graph.neighborList.size) {
    return 'Your Graph Is Empty';
  }
  // This gets the edges from the first city.
  let cityRoutes = graph.neighborList.get(cities[0]);
  // If the second city exists in the edges, return true plus the cost of the flight
  if (cityRoutes) { // If cityRoutes is empty, or falsy, we go straight to the false statement.
    for (let route of cityRoutes) {
      if (route.vertex.value === cities[1].value) {
        return [true, `$${route.weight}`];
      }
    }
  }
  return [false, '$0'];
};



module.exports = {
  Graph,
  businessTrip,
};

