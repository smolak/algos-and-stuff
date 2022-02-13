const equalOrClosestTo = (target, numbers1, numbers2) => {
  const map = new Map();
  let closestSum = 0;
  let closestPair = [0, 0];

  for (let num1 of numbers1) {
    map.set(num1, num1);
  }

  for (let num2 of numbers2) {
    const rest = target - num2;

    if (map.has(rest)) {
      return [rest, num2];
    }

    // oscillating
    for (let i = 1; ; i++) {
      const restSmaller = target - num2 - i;
      const restBigger = target - num2 - i;

      if (map.has(restSmaller)) {
        if (restSmaller + num2 > closestSum) {
          closestSum = target - i;
          closestPair = [restSmaller, num2];
        }
        break;
      }

      if (map.has(restBigger)) {
        if (restBigger + num2 < closestSum) {
          closestSum = target - i;
          closestPair = [restSmaller, num2];
        }
        break;
      }
    }
  }

  return closestPair;
};

/**
 * m - length of numbers
 * n - size of oscillation
 *
 * time: O(m * n)
 * space: O(n)
 */

console.log(equalOrClosestTo(2, [1], [1])); // [1,1]
console.log(equalOrClosestTo(3, [1, 2], [-2, 1])); //[2, 1]
console.log(equalOrClosestTo(3, [1, 2], [-2, 0])); // [2, 0]
console.log(equalOrClosestTo(4, [1, 2, 3], [3, 2, 1])); // [1, 3]
