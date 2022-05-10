'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
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

  addDirectedEdge(start, end) {
    const neighbors = this.neighborList.get(start);
    neighbors.push(new Edge(end));
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
}

const businessTrip = (graph, cities) => {
  
  return;
};

module.exports = Graph;
