const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const result = bestSum(targetSum - num, numbers, memo);

    if (result !== null) {
      const combination = [...result, num];

      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

/**
 * m = target sum
 * n = numbers.length
 *
 * Brute force
 * time: O(n^m * m) <-- second m from copying the array, perhaps concat would be better
 * space: O(m^2) <-- because of storing the array in shortestCombination that in worst case can happen m times each loop
 *
 * Memoized
 * time: O(m * n * m) <-- second m from copying the array, perhaps concat would be better
 * space: O(m^2) <-- because of storing the array in shortestCombination that in worst case can happen m times each loop
 */

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [5, 3]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
