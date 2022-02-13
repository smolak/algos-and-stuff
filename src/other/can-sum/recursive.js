/**
 * BigO:
 * m - target sum
 * n - array length
 *
 * Depth: m (might be reducing 1 each time down the tree)
 *
 * O(n ^ m) time
 * O(m) space
 *
 * With memo
 * O(n * m)
 * O(m) space
 */

export const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    if (canSum(targetSum - num, numbers, memo) === true) {
      memo[targetSum] = true;

      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
