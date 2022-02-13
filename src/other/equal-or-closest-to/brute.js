const equalOrClosestTo = (target, numbers1, numbers2) => {
  let closestSum = 0;
  const closestPair = [0, 0];

  for (let num1 of numbers1) {
    for (let num2 of numbers2) {
      const sum = num1 + num2;

      if ((sum > closestSum && sum <= target) || (sum < closestSum && sum >= target)) {
        closestSum = sum;
        closestPair[0] = num1;
        closestPair[1] = num2;
      }
    }
  }

  return closestPair;
};

/**
 * time: O(n*m)
 * space: O(n*m)
 */

console.log(equalOrClosestTo(2, [1], [1])); // [1,1]
console.log(equalOrClosestTo(3, [1, 2], [-2, 1])); //[2, 1]
console.log(equalOrClosestTo(3, [1, 2], [-2, 0])); // [2, 0]
console.log(equalOrClosestTo(4, [1, 2, 3], [3, 2, 1])); // [1, 3]
