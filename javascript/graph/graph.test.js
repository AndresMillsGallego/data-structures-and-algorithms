'use strict';

const { Graph } = require('./graph');

describe('Testing our new Graph class and methods', () => {
  let graph = new Graph();

  test('Should add a new node to the graph', () => {
    const A = graph.addVertex('A');
    expect(A.value).toEqual('A');
  });

  test('Should be able to add an edge to a graph', () => {
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    graph.addDirectedEdge(B, C);
    graph.addDirectedEdge(C, B);
    expect(graph.neighborList.get(B).length).toEqual(1);
  });

  test('Should return a list of all the nodes in the graph', () => {
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectedEdge(A, B);
    const C = graph.addVertex('C');
    graph.addDirectedEdge(B, C);
    let nodes = graph.getNodes();
    expect(nodes.size).toEqual(6);
  });

  test('Should return a list of neighbors from the graph', () => {
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(B, A);
    const C = graph.addVertex('C');
    graph.addDirectedEdge(B, C);
    let neighbors = graph.getNeighbors(B);
    expect(neighbors.length).toEqual(2);
    expect(neighbors[0].vertex.value).toEqual('A');
  });

  test('Should return the appropriate size of the graph', () => {
    let size = graph.size();
    expect(size).toEqual(9);
  });

  test('Should return any nodes in the "visited" list in the order they were visited', () => {
    let graphB = new Graph();
    const A = graphB.addVertex('A');
    const B = graphB.addVertex('B');
    const C = graphB.addVertex('C');
    graphB.addDirectedEdge(A, B);
    graphB.addDirectedEdge(B, C);
    let visited = graphB.breadthFirst(A);
    expect(visited.size).toEqual(3);
  });

  test('Should return all nodes from the "visited" list using depth first traversal', () => {
    let graphB = new Graph();
    const A = graphB.addVertex('A');
    const B = graphB.addVertex('B');
    const C = graphB.addVertex('C');
    graphB.addDirectedEdge(A, B);
    graphB.addDirectedEdge(B, C);
    let visited = graphB.depthFirst(A);
    expect(visited.size).toEqual(3);
  });

});
