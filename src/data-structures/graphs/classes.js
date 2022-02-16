class Node {
  #edgesList;
  #value;

  constructor(value) {
    this.#value = value;
    this.#edgesList = [];
    this.color = null;
    this.v = value;
  }

  get value() {
    return this.#value;
  }

  connect(node) {
    this.#edgesList.push(node);
    node.#edgesList.push(this);
  }

  getAdjacentNodes() {
    return this.#edgesList;
  }

  isConnectedTo(node) {
    return this.#edgesList.indexOf(node) > -1;
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }

  addToGraph(node) {
    this.nodes.push(node);
  }

  // vertices (a, b, c), e - edges (a, b, c)
  // t: O(v + e), s: O(v)
  breadthFirstSearch(startingNode, end) {
    const queue = [startingNode];
    const visitedNodes = new Set();
    visitedNodes.add(startingNode);

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.value === end.value) {
        return "Found!";
      }

      for (const adjacentNode of node.getAdjacentNodes()) {
        if (!visitedNodes.has(adjacentNode)) {
          queue.push(adjacentNode);
          visitedNodes.add(adjacentNode);
        }
      }
    }

    return "Not found :(";
  }

  // t: O(v + e), s: O(v)
  depthFirstSearch(startingNode, end) {
    const stack = [startingNode];
    const visitedNodes = new Set();

    while (stack.length > 0) {
      const node = stack.pop();

      if (node.value === end.value) return "Found!";

      for (let adjacentNode of node.getAdjacentNodes()) {
        if (!visitedNodes.has(adjacentNode)) {
          stack.push(adjacentNode);
          visitedNodes.add(adjacentNode);
        }
      }
    }

    return "Not found :(";
  }

  findShortestPath(fromNode, toNode) {
    // bfs with keeping track of how did I get where I got (tracking parent)
    const queue = [fromNode];
    const visitedNodes = new Map();

    visitedNodes.set(fromNode.value, null);

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.value === toNode.value) {
        return this.#reconstructPath(visitedNodes, fromNode.value, toNode.value);
      }

      for (let adjacentNode of node.getAdjacentNodes()) {
        if (!visitedNodes.has(adjacentNode.value)) {
          queue.push(adjacentNode);
          visitedNodes.set(adjacentNode.value, node.value);
        }
      }
    }

    return "Not found :(";
  }

  #reconstructPath(visitedNodes, fromValue, toValue) {
    let steps = 0;
    let atValue = toValue;

    while (atValue !== fromValue) {
      steps++;

      atValue = visitedNodes.get(atValue);
    }

    return steps;
  }

  isBipartite() {
    const startingNode = this.nodes[0];
    startingNode.color = "red";
    const stack = [startingNode];
    const visitedNodes = new Set();

    while (stack.length > 0) {
      const node = stack.pop();

      if (!visitedNodes.has(node)) {
        visitedNodes.add(node);

        for (let adjacentNode of node.getAdjacentNodes()) {
          if (visitedNodes.has(adjacentNode)) {
            if (adjacentNode.color === node.color) return false;
          }

          adjacentNode.color = node.color === "red" ? "blue" : "red";
          stack.push(adjacentNode);
        }
      }
    }

    return true;
  }
}

/**
 * (a) ---(b)
 *  |    /
 *  |  (c)
 *  | /   \
 * (d) --- (e) --- (f)
 */

const nodeA = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");
const nodeF = new Node("f");
const nodeZ = new Node("z");

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE, nodeF]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);
nodeE.connect(nodeF);

for (let node of graph.nodes) {
  console.log(
    `Node ${node.value} is connected to: ${node
      .getAdjacentNodes()
      .map((node) => node.value)
      .join(", ")}.`
  );
}

console.log(nodeA.isConnectedTo(nodeB)); // true
console.log(nodeA.isConnectedTo(nodeC)); // false

console.log(graph.breadthFirstSearch(nodeA, nodeE));
console.log(graph.breadthFirstSearch(nodeA, nodeZ));

console.log(graph.depthFirstSearch(nodeA, nodeE));
console.log(graph.depthFirstSearch(nodeA, nodeZ));

console.log(graph.findShortestPath(nodeA, nodeF)); // 3

console.log(graph.isBipartite());
