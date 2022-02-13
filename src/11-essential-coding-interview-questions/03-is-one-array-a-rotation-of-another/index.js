/**
 * n - length of first array
 * Target: O(n)
 */

const isRotationOf = (numbers1, numbers2) => {
  if (numbers1.length !== numbers2.length) return false;
  if (numbers1.length === 0 && numbers2.length === 0) return true;

  /**
   * [1, 2, 3]
   * [3, 1, 2]
   *  - get the first num from numbers1
   *  - find index of same number in numbers2
   *  - iterate further on numbers1 and increase index in numbers2 equally, till the end
   *    and then start over (in numbers2) and compare values
   *  - if all are equal, then they are a rotation
   */

  let i1 = 0;
  let i2 = 0;
  let foundFirst = false;
  let result = false;

  while (i1 < numbers1.length) {
    const num1 = numbers1[i1];
    const num2 = numbers2[i2];

    if (num1 === num2) {
      if (!foundFirst) {
        foundFirst = true;
      }

      result = true;
      i1++;
      i2++;

      if (i2 === numbers2.length) {
        i2 = 0;
      }
    } else {
      if (!foundFirst) {
        i2++;

        // no same first number found
        if (i2 > numbers2.length) {
          result = false;
          break;
        }
      } else {
        result = false;
        break;
      }
    }
  }

  return result;
};

console.log(isRotationOf([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 8, 1, 2, 3])); // false
console.log(isRotationOf([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3])); // true
console.log(isRotationOf([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 9, 1, 2, 3])); // false
console.log(isRotationOf([1, 2, 3, 4, 5, 6, 7], [4, 6, 5, 7, 1, 2, 3])); // false
console.log(isRotationOf([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 0, 2, 3])); // false
console.log(isRotationOf([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])); // true
console.log(isRotationOf([1, 2, 3, 4, 5, 6, 7], [7, 1, 2, 3, 4, 5, 6])); // true
