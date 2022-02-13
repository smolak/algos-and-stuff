class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

/**
 *          3
 *        /   \
 *       2     7
 *      / \     \
 *     4  -2     5
 */

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// 2. Write a function, sumTree(root), that takes in the root of a binary tree as an argument.
//    The function should return the total sum of all values in the tree. You can assume that the tree only contains
//    number values.

const sumTree = (root) => {
  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    sum += node.value;

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return sum;
};

console.log(sumTree(a)); // 19
