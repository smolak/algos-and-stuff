class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");
const z = new Node("z");

/**
 *          a        L: 0
 *        /   \
 *       b     c     L: 1
 *      / \     \
 *     d   e     f   L: 2
 *    / \
 *   g   h           L: 3
 *        \
 *         i         L: 4
 */

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
d.left = g;
d.right = h;
h.right = i;

const lowestCommonAncestor = (root, node1, node2) => {
  // tree is empty
  if (root === null) {
    return null;
  }

  // node1 or node2 found
  if (root.value === node1.value || root.value === node2.value) {
    return root;
  }

  // check if node1 or node2 exist in the left subtree
  const left = lowestCommonAncestor(root.left, node1, node2);

  // check if node1 or node2 exist in the right subtree
  const right = lowestCommonAncestor(root.right, node1, node2);

  // one node is on the left branch and the other is on the right branch
  // going out of the root node, so root node it is
  if (left !== null && right !== null) {
    return root;
  }

  // both node1 and node2 are not in one of the subtree
  if (left === null && right === null) {
    return null;
  }

  // both node1 and node2 are on the left subtree
  if (left !== null) {
    return left;
  }

  // both node1 and node2 are on the right subtree
  if (right !== null) {
    return right;
  }
};

console.log(lowestCommonAncestor(a, a, a).value === "a");
console.log(lowestCommonAncestor(a, b, c).value === "a");
console.log(lowestCommonAncestor(a, d, e).value === "b");
console.log(lowestCommonAncestor(a, d, c).value === "a");
console.log(lowestCommonAncestor(a, d, g).value === "d");
console.log(lowestCommonAncestor(a, i, e).value === "b");
console.log(lowestCommonAncestor(a, i, g).value === "d");
console.log(lowestCommonAncestor(a, h, i).value === "h");
console.log(lowestCommonAncestor(a, a, c).value === "a");
console.log(lowestCommonAncestor(a, h, c).value === "a");

/**
 * maxDepth()
 * 1. If tree is empty then return -1
 * 2. Else
 *      (a) Get the max depth of left subtree recursively  i.e.,
 *           call maxDepth( tree->left-subtree)
 *      (a) Get the max depth of right subtree recursively  i.e.,
 *           call maxDepth( tree->right-subtree)
 *      (c) Get the max of max depths of left and right
 *           subtrees and add 1 to it for the current node.
 *          max_depth = max(max dept of left subtree,
 *                              max depth of right subtree)
 *                              + 1
 *      (d) Return max_depth
 */

const maxDepth = (root) => {
  if (root === null) {
    return -1;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  if (leftDepth > rightDepth) {
    return leftDepth + 1;
  }

  return rightDepth + 1;
};

console.log(maxDepth(a) === 4);
console.log(maxDepth(d) === 2);
console.log(maxDepth(f) === 0);

const maxDepth2 = (root) => {
  if (root.left === null && root.right === null) return 0;

  let depth = -1;
  const queue = [root];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    let nodeCount = queue.length;

    // when there are no more nodes to check, return depth
    if (nodeCount === 0) {
      return depth;
    }

    depth++;

    // traversing all children on a given node
    while (nodeCount > 0) {
      const node = queue.shift();

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);

      nodeCount--;
    }
  }
};

console.log(maxDepth2(a) === 4, maxDepth2(a));
console.log(maxDepth2(d) === 2, maxDepth2(d));
console.log(maxDepth2(f) === 0, maxDepth2(f));
console.log(maxDepth2(h) === 1, maxDepth2(h));

const getLevelUntil = (fromNode, toNode, level) => {
  if (fromNode === null) return -1;
  if (fromNode.value === toNode.value) return level;

  const levelDownLeft = getLevelUntil(fromNode.left, toNode, level + 1);

  if (levelDownLeft === -1) {
    return getLevelUntil(fromNode.right, toNode, level + 1);
  }

  return levelDownLeft;
};

const findLevel = (root, node) => getLevelUntil(root, node, 0);

console.log(findLevel(a, a) === 0, findLevel(a, a));
console.log(findLevel(a, b) === 1, findLevel(a, b));
console.log(findLevel(a, e) === 2, findLevel(a, e));
console.log(findLevel(a, i) === 4, findLevel(a, i));
console.log(findLevel(b, e) === 1, findLevel(b, e));
console.log(findLevel(d, i) === 2, findLevel(d, i));
console.log(findLevel(a, z) === -1, findLevel(a, z));

const findDistance = (root, node1, node2) => {
  // distance = findLevel(lca(node1, node2), node1) + findLevel(lca(node1, node2), node2)
  const lca = lowestCommonAncestor(root, node1, node2);

  return findLevel(lca, node1) + findLevel(lca, node2);
};

console.log(findDistance(a, a, a) === 0);
console.log(findDistance(a, a, b) === 1);
console.log(findDistance(a, b, a) === 1);
console.log(findDistance(a, d, e) === 2);
console.log(findDistance(a, h, i) === 1);
console.log(findDistance(a, i, f) === 6);
