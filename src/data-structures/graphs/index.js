/**
 * (a) ---(b)
 *  |    /
 *  |  (c)
 *  | /   \
 * (d) --- (e)
 */

const vertices = ["a", "b", "c", "d", "e"];
const edges = [
  ["a", "b"],
  ["a", "d"],
  ["b", "c"],
  ["c", "d"],
  ["c", "e"],
  ["d", "e"],
];

// Find adjacent nodes
const findAdjacentNodes = (node) => {
  // Loop through edges array
  // is my node in the connection?
  // if yes, push the other node in pair into adjacent nodes array
  // if no, keep looping

  const adjacentNodes = [];

  for (let edge of edges) {
    // edge = ['a', 'b']
    const nodeIndex = edge.indexOf(node);

    if (nodeIndex !== -1) {
      // 0 or 1
      nodeIndex ? adjacentNodes.push(edge[0]) : adjacentNodes.push(edge[1]);
    }
  }

  return adjacentNodes;
};

console.log(findAdjacentNodes("a"));
console.log(findAdjacentNodes("c"));

const isConnected = (node1, node2) => {
  for (let edge of edges) {
    if (edge.includes(node1) && edge.includes(node2)) return true;
  }

  return false;
};

console.log(isConnected("a", "b")); // true
console.log(isConnected("a", "c")); // false

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

const findAdjacentNodes2 = (node) => {
  const nodeIndex = vertices.indexOf(node);
  const adjacentNodes = [];

  for (let i = 0; i < vertices.length; i++) {
    if (adjacencyMatrix[nodeIndex][i] == 1) {
      adjacentNodes.push(vertices[i]);
    }
  }

  return adjacentNodes;
};

console.log(findAdjacentNodes2("a"));
console.log(findAdjacentNodes2("c"));

const isConnected2 = (node1, node2) => {
  const node1Index = vertices.indexOf(node1);
  const node2Index = vertices.indexOf(node2);

  return adjacencyMatrix[node1Index][node2Index] === 1;
};

console.log(isConnected2("a", "b")); // true
console.log(isConnected2("a", "c")); // false
