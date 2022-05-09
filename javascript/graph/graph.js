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
}

module.exports = Graph;
