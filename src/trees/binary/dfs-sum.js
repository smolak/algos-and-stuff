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

const sumTree = (root) => {
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const node = stack.pop();
    sum += node.value;

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return sum;
};

console.log("Sum node values:");
console.log(sumTree(a)); // 19

/**
 * time O(n)
 * space O(n)
 */
const sumTreeRecursive = (root) => {
  if (root === null) return 0;

  // pre-order version
  // return root.value + sumTreeRecursive(root.left) + sumTreeRecursive(root.right);

  // in-order version
  // return sumTreeRecursive(root.left) + root.value + sumTreeRecursive(root.right);

  // post-order version
  return sumTreeRecursive(root.left) + sumTreeRecursive(root.right) + root.value;
};

// Not so readable fancy 1 liner.
// const str = (root) => (root === null ? 0 : str(root.left) + str(root.right) + root.value);

console.log("\nSum values recusrively:");
console.log(sumTreeRecursive(a)); // 19
