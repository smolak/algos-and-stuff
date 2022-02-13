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

  const result = [];
  let num1Index = 0;
  let num2Index = 0;

  while (num1Index < numbers1.length && num2Index < numbers2.length) {
    const num1 = numbers1[num1Index];
    const num2 = numbers2[num2Index];

    if (num1 === num2) {
      result.push(num1);
      num1Index++;
      num2Index++;
    } else {
      if (num1 > num2) {
        num2Index++;
      } else {
        num1Index++;
      }
    }
  }

  return result;
};

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 4, 5, 9, 10]));
