/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    if (detectCycle(graph, node, visited, visiting) === true) return false;
  }
  return true;
};

const detectCycle = (graph, node, visited, visiting) => {
  // this node has been checked and is fine, no cycles detected
  if (visited.has(node)) return false;

  // I cycled back to given node (recursion)
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, visited, visiting) === true) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

const createGraph = (size, edges) => {
  let graph = {};

  for (let i = 0; i < size; i++) {
    graph[i] = [];
  }

  for (let [a, b] of edges) {
    graph[a].push(b);
  }

  return graph;
};
