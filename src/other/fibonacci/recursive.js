const memo = {};

const fibonacci = (n) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

  return memo[n];
};

/**
 * Brute force
 * time: O(2^n)
 * space: O(n)
 *
 * Memo
 * time: O(n)
 * space: O(n)
 */

console.log("Big fib:", fibonacci(999));
