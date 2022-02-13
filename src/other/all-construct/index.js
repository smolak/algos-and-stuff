/**
 * allConstruct('dog', ['cat', 'mouse', 'horse']); --> [] 0 ways of constructing
 * allConstruct('', ['cat', 'mouse', 'horse']); --> [[]] 1 way of constructing (not taking anything)
 */

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const sets = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const setsOfCombinations = allConstruct(target.substring(word.length), wordBank, memo);

      if (setsOfCombinations.length) {
        sets.push(...setsOfCombinations.map((combination) => [word].concat(combination)));
      }
    }
  }

  memo[target] = sets;
  return sets;
};

/**
 * m - target length
 * n - word bank length
 *
 * Brute force
 * time: O(n^m)
 * space: O(m) height of the recursion tree
 *
 * Memoized
 * time: O(n^m) as this is searching for all of the combinations, so nothing really changes
 * space: O(m)
 */

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
/**
 * [
 *  [purp, le],
 *  [p, ur, p. le]
 * ]
 */

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "ef", "c"])); // 4 ways
/**
 * [
 *   [ab, cd, ef],
 *   [ab, c, def],
 *   [abc, def],
 *   [abcd, ef]
 * ]
 */

console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]));
// []
