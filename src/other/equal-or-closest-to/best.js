const equalOrClosestTo = (target, numbers1, numbers2) => {
  numbers1.sort((a, b) => a - b); // X
  numbers2.sort((a, b) => a - b); // Y

  let closestPair = [0, 0];
  let closestSum = null;

  // going from top right corner (can also go from bottom left)
  let x = numbers1.length - 1;
  let y = 0;

  while (x >= 0 && y < numbers2.length) {
    const num1 = numbers1[x];
    const num2 = numbers2[y];
    const sum = num1 + num2;

    if (sum === target) {
      closestPair = [num1, num2];
      break;
    }

    if (sum < target) {
      if (closestSum === null || sum > closestSum) {
        closestSum = sum;
        closestPair = [num1, num2];
      }

      y++;
      continue;
    }

    if (closestSum === null || sum < closestSum) {
      closestSum = sum;
      closestPair = [num1, num2];
    }

    x--;
  }

  return closestPair;
};

/**
 * time: O(n log n)
 * space: O(n)
 */

console.log(equalOrClosestTo(2, [1], [1])); // [1,1]
console.log(equalOrClosestTo(3, [1, 2], [1, -2])); //[2, 1]
console.log(equalOrClosestTo(3, [1, 2], [-2, 0])); // [2, 0]
console.log(equalOrClosestTo(4, [1, 2, 3], [3, 2, 1])); // [3, 1]
