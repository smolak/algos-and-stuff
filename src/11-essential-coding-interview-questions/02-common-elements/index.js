/**
 * Conditions:
 *  - arrays can have different length
 *  - both have unique numbers
 *  - both sorted ASC
 *
 * Target time: O(max(n, m))
 */

const commonElements = (numbers1, numbers2) => {
  // if different length, then check both arrays for length
  if (numbers1.length === 0 || numbers2.length === 0) return [];

  const set = new Set(numbers2);
  const result = [];

  for (let number of numbers1) {
    if (set.has(number)) {
      result.push(number);
    }
  }

  return result;
};

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 4, 5, 9, 10]));
