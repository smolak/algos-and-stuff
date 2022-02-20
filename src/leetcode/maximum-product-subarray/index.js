/**
 * https://leetcode.com/submissions/detail/645396881/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  /**
   split numbers to sequences of numbers that don't contain 0
   - if 0 was present, 0 still can be the biggest product
   go over each sequence (if any present) and check for negatives
   - if even number of negatives - calculate the product of all
   - if odd number of negatives - check left longest chain and right longest chain - pick biggest
   - afther calculating the biggest products of all subsequences pick the biggest one
   **/

  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const zeroes = [];
  const negatives = [];
  let wholeProduct = 1;
  const nonZeroesNums = [];

  for (let i = 0; i < nums.length; i++) {
    wholeProduct *= nums[i];

    if (nums[i] === 0) {
      zeroes.push(i);

      if (i < nums.length - 1) {
        nonZeroesNums.push([]);
      }
    } else {
      if (nonZeroesNums.length === 0) nonZeroesNums.push([]);

      nonZeroesNums[nonZeroesNums.length - 1].push(nums[i]);
    }

    if (nums[i] < 0) negatives.push(i);
  }

  // console.log(wholeProduct);
  // console.log(zeroes);
  // console.log(negatives);
  // console.log(nonZeroesNums);

  // best case scenario
  if (negatives.length % 2 === 0 && zeroes.length === 0) {
    return wholeProduct;
  }

  // similar best scenario
  if (nonZeroesNums.length === 0) return 0;

  // 0 can still be the best result if others turn out to be negative
  const results = [0];

  for (let n = 0; n < nonZeroesNums.length; n++) {
    const numbers = nonZeroesNums[n];

    // very quick return here
    if (numbers.length === 1) {
      results.push(numbers[0]);
      continue;
    }

    const negatives = [];
    let wholeProduct = 1;

    for (let i = 0; i < numbers.length; i++) {
      wholeProduct *= numbers[i];

      if (numbers[i] < 0) negatives.push(i);
    }

    // best scenario
    if (negatives.length % 2 === 0) {
      results.push(wholeProduct);
      continue;
    }

    /**
     * Determining the longest chains of numbers with even number of negative numbers
     * to compare their products and pick bigger one.
     */
    const firstNegativePosition = negatives[0];
    const lastNegativePosition = negatives[negatives.length - 1];

    let leftFrom = 0;
    let leftTo = 0;
    let rightFrom = 0;
    let rightTo = 0;

    if (firstNegativePosition === 0 && lastNegativePosition === numbers.length - 1) {
      leftFrom = 0;
      leftTo = lastNegativePosition - 1;

      rightFrom = 1;
      rightTo = numbers.length - 1;
    } else {
      if (firstNegativePosition === 0) {
        leftFrom = 0;
        leftTo = lastNegativePosition - 1;

        rightFrom = 1;
        rightTo = numbers.length - 1;
      } else if (lastNegativePosition === numbers.length - 1) {
        leftFrom = 0;
        leftTo = lastNegativePosition - 1;

        rightFrom = firstNegativePosition + 1;
        rightTo = numbers.length - 1;
      } else {
        leftFrom = 0;
        leftTo = lastNegativePosition - 1;

        rightFrom = firstNegativePosition + 1;
        rightTo = numbers.length - 1;
      }
    }

    // console.log(leftFrom, leftTo, rightFrom, rightTo);

    let leftProduct = 1;
    let rightProduct = 1;

    for (let i = 0; i < numbers.length; i++) {
      if (i >= leftFrom && i <= leftTo) {
        leftProduct *= numbers[i];
      }

      if (i >= rightFrom && i <= rightTo) {
        rightProduct *= numbers[i];
      }
    }

    results.push(Math.max(leftProduct, rightProduct));
  }

  // console.log(results);

  let best = null;

  for (let result of results) {
    if (best === null) {
      best = result;
    } else if (result > best) {
      best = result;
    }
  }

  return best;
};
