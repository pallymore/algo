import test from "ava";
// A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph connected. For example, any binary tree is minimally-connected.

// Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an adjacency matrix or adjacency list.

// Solution one: if edges.length = vertices.length - 1 === minimumConnectedGraph
// list => { vertex: [connectedVertices] }
function isMinimumConnectedGraphA(adjacencyList) {
  const vertices = Object.keys(adjacencyList);
  const edgesCount = vertices.reduce((count, vertex) => {
    const edges = adjacencyList[vertex].length;
    return count + edges;
  }, 0);

  return edgesCount === vertices.length - 1;
}

// Solution two: adjacencyMatrix
// there is only one `1` (connected) in the upper triangle
// matrix: 1 - connected
// *  A  B  C  D
// A  -  1  0  0
// B  1  -  1  0
// C  0  1  -  1
// D  0  B  1  -
function minimumConnectedGraphB(adjacencyMatrix) {
  for (let x = 0; x < adjacencyMatrix.length - 2; x++) {
    const row = adjacencyMatrix[x];
    if (row.filter((n) => n === 1).length > 1) {
      return false;
    }
  }
  return true;
}

test("isMinimumConnectedGraphA", (t) => {
  const graphA = { a: ["b", "c"], b: ["c"], c: ["a"] };
  const graphB = { a: ["b"], b: ["c"], c: [] };
  t.assert(!isMinimumConnectedGraphA(graphA));
  t.assert(isMinimumConnectedGraphA(graphB));
});

test("minimumConnectedGraphB", (t) => {
  const graphA = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  t.assert(minimumConnectedGraphB(graphA));

  const graphB = [
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ];
  t.assert(!minimumConnectedGraphB(graphB));
});
