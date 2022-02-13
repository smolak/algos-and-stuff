const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const numberOfWaysForRest = countConstruct(target.substring(word.length), wordBank, memo);

      totalCount += numberOfWaysForRest;
    }
  }

  memo[target] = totalCount;
  return totalCount;
};

/**
 * m - target length
 * n - words length
 *
 * Brute force
 * time: O(m^n * m) <-- 2nd m from subtracting
 * space: O(m*m) <-- 2nd m from subtracting
 *
 * Memo
 * time: O(m*n*m) <-- 2nd m from subtracting
 * space: O(m*m) <-- 2nd m from subtracting
 */

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])
); // 0
