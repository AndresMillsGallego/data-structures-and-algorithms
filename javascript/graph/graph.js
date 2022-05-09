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

  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    let current = null;
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

const graph = new Graph();

module.exports = Graph;
