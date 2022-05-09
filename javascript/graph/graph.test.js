'use strict';

const Graph = require('./graph');

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

});
