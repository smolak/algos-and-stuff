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

// 1. Write a function, bfs(root, target), that takes in the root of a binary tree and a target value as arguments.
//    The function should return a boolean indicating whether or not the tree contains the target value.

const bfs = (root, target) => {
  const queue = [root];
  let found = false;

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.value === target) {
      found = true;
      break;
    }

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return found;
};

console.log(bfs(a, "e")); // true
console.log(bfs(a, "z")); // false
