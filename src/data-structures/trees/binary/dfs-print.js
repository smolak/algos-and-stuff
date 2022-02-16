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

/**
 *          a
 *        /   \
 *       b     c
 *      / \     \
 *     d   e     f
 */

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/**
 * n - number of nodes
 *
 * Time: O(n)
 * Space: O(n)
 */

const depthFirstPrint = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    console.log(node.value);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }
};

console.log("DFS print:");
depthFirstPrint(a); // a b d e c f

/**
 * n - number of nodes
 *
 * time: O(n)
 * space: O(n)
 */

const depthFirstPrintRecursive = (root) => {
  if (root === null) return;

  console.log(root.value);

  depthFirstPrintRecursive(root.left);
  depthFirstPrintRecursive(root.right);
};

console.log("\nDFS recursive print:");
depthFirstPrintRecursive(a); // a b d e c f

/**
 * 3 traversals:
 *  - pre-order
 *  - post-order
 *  - in-order
 */

// PRE-ORDER
const preOrder = (root) => {
  if (root === null) return;

  // print is done PRIOR to traversing
  // self, left, right
  console.log(root.value);

  preOrder(root.left);
  preOrder(root.right);
};

console.log("\nDFS PRE-ORDER:");
preOrder(a); // a b d e c f

const postOrder = (root) => {
  if (root === null) return;

  postOrder(root.left);
  postOrder(root.right);

  // print is done POST to traversal
  // left, right, self
  console.log(root.value);
};

console.log("\nDFS POST-ORDER:");
postOrder(a); // d e b f c a

const inOrder = (root) => {
  if (root === null) return;

  inOrder(root.left);

  // print is done IN between traversal
  // left, self, right
  console.log(root.value);

  inOrder(root.right);
};

console.log("\nDFS IN-ORDER:");
inOrder(a); // d b e a c f
