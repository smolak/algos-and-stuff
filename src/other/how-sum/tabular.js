const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (Array.isArray(table[i])) {
      for (let num of numbers) {
        i + num in table && (table[i + num] = [...table[i], num]);
      }
    }
  }

  return table[targetSum];
};

/**
 * m - target sum
 * n - numbers length
 *
 * time: O(m*n*m)
 * space: O(m^2)
 */

console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])); // [4,3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(howSum(300, [7, 14])); // null
