const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      if (canConstruct(target.substring(word.length), wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

/**
 * m - target length
 * n - word bank length
 *
 * Brute force
 * time: O(m ^ n * m) <-- 2nd m from taking the substring (copying, but substring should not impact that)
 * space: O(m*m) <-- substring
 *
 * Memoized:
 * time: O(m * n * m) <-- substring
 * space O(m^m) <-- again, substring
 */

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])); // false
