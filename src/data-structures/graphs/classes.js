class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }

  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  getAdjacentNodes() {
    return this.edgesList;
  }

  isConnectedTo(node) {
    return this.edgesList.indexOf(node) > -1;
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }

  addToGraph(node) {
    this.nodes.push(node);
  }
}

/**
 * (a) ---(b)
 *  |    /
 *  |  (c)
 *  | /   \
 * (d) --- (e)
 */

const nodeA = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

for (let node of graph.nodes) {
  console.log(`Node ${node.value} is connected to: ${node.edgesList.map((node) => node.value).join(", ")}.`);
}

console.log(nodeA.isConnectedTo(nodeB)); // true
console.log(nodeA.isConnectedTo(nodeC)); // false
