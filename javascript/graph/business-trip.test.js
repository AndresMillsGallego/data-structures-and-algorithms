const { Graph, businessTrip } = require('./graph');

describe('Testing our businessTrip function', () => {
  let tripGraph = new Graph();

  const Cali = tripGraph.addVertex('Cali');
  const Popayan = tripGraph.addVertex('Popayan');
  const Paris = tripGraph.addVertex('Paris');
  const Disneyland = tripGraph.addVertex('Disneyland');
  const Seattle = tripGraph.addVertex('Seattle');
  const SantaMarta = tripGraph.addVertex('Santa Marta');

  tripGraph.addDirectedEdge(Cali, Popayan, 99);
  tripGraph.addDirectedEdge(Cali, SantaMarta, 155);
  tripGraph.addDirectedEdge(Popayan, SantaMarta, 99);
  tripGraph.addDirectedEdge(SantaMarta, Paris, 899);
  tripGraph.addDirectedEdge(Paris, Seattle, 1024);
  tripGraph.addDirectedEdge(Paris, Disneyland, 1224);
  tripGraph.addDirectedEdge(Seattle, Disneyland, 299);

  test('Should return true plus the cost of the trip', () => {
    let truthyResults = businessTrip(tripGraph, [Seattle, Disneyland]);
    expect(truthyResults[0]).toEqual(true);
    expect(truthyResults[1]).toEqual('$299');
  });

  test('Should return false plus a cost of $0', () => {
    let falsyResults = businessTrip(tripGraph, [Popayan, Paris]);
    expect(falsyResults[0]).toEqual(false);
    expect(falsyResults[1]).toEqual('$0');
  });

  test('Should return the appropriate message if the Graph is empty', () => {
    let emptyGraph = new Graph();

    let emptyResponse = businessTrip(emptyGraph, [Seattle, Cali]);
    expect(emptyResponse).toEqual('Your Graph Is Empty');
  });

});

