/**
 * https://leetcode.com/submissions/detail/658002189/
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // early returns
  if (n === 1) return n;
  if (n === 2) return n;

  let a = 1,
    b = 2;

  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    (a = b), (b = temp);
  }

  return b;
};

/**
 3:
 - temp: 3; a = 2, b = 3; b: 3
 5:
 - temp: 3; a = 2; b = 3
 - temp: 5; a = 3; b = 5
 - temp: 8; a = 5; b = 8

 **/
