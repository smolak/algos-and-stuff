/**
 * https://leetcode.com/submissions/detail/647671795/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  /**
   do a dfs or bfs and whenever nodes differ, return false
   **/

  if (p === null && q === null) return true;
  if ((p === null && q !== null) || (p !== null && q === null) || p.val !== q.val) return false;

  const leftResult = isSameTree(p.left, q.left);
  const rightResult = isSameTree(p.right, q.right);

  if (!leftResult || !rightResult) return false;

  return true;
};
