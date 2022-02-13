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

// BFT Breadth-First Traversal / BFS for Search

const breadthFirstPrint = (root) => {
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    console.log(node.value);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

breadthFirstPrint(a); // a b c d e f
