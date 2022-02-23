/**
 * https://leetcode.com/submissions/detail/647703855/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// in Solution this does not work and global space is polluting this???
// let maxSum = Number.MIN_SAFE_INTEGER;

var maxPathSum = function (root) {
  // walk up from each bottom and find out what the max is from left and right including self
  // and pick the biggest one and continue going up
  // sum up as you go picking max ouf ot left / right
  // make sure root is not counted twice

  if (root.left == null && root.right === null) return root.val;

  const result = { maxSum: Number.MIN_SAFE_INTEGER };
  getMax(root, result);

  return result.maxSum;
};

const getMax = (root, result) => {
  if (root === null) return Number.MIN_SAFE_INTEGER;

  const leftMax = getMax(root.left, result);
  const rightMax = getMax(root.right, result);

  const max = Math.max(
    root.val + leftMax + rightMax,
    root.val + leftMax,
    root.val + rightMax,
    root.val,
    leftMax,
    rightMax
  );

  if (max > result.maxSum) {
    result.maxSum = max;
  }

  return Math.max(root.val, root.val + leftMax, root.val + rightMax);
};
