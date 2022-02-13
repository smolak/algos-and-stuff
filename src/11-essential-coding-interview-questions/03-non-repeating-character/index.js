/**
 * n - length of input string
 * Target: O(n)
 *
 * return null if none found
 * return character if found
 * if more than one found, return first
 */

const findNonRepeating = (string) => {
  if (string.length === 0) return null;
  const dict = new Set();
  const singles = new Set();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (!dict.has(char)) {
      dict.add(char);
      singles.add(char);
    } else {
      singles.delete(char);
    }
  }

  return singles.size === 0 ? null : singles.values().next().value;
};

console.log(findNonRepeating("abcab")); // c
console.log(findNonRepeating("abab")); // null
console.log(findNonRepeating("aabbc")); // c
console.log(findNonRepeating("aabbdbc")); // d
console.log(findNonRepeating("")); // null
