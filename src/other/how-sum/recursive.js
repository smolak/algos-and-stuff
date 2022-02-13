/**
 * m = target sum
 * n = numbers.length
 *
 * Brute force
 * time: O(n^m * m) <-- second m from copying the array, perhaps concat would be better
 * space: O(m)
 *
 * Memo:
 * time: O(n*m*m) <-- second m from copying again
 * space: O(m*m) <-- memoized object holds arrays of depth of max m
 */

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers, memo);

    if (result !== null) {
      memo[targetSum] = [...result, num];

      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])); // [4,3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(howSum(300, [7, 14])); // null
