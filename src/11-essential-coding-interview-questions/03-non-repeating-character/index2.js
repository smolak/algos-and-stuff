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
  const dict = new Map();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    dict.has(char) ? dict.set(char, dict.get(char) + 1) : dict.set(char, 1);
  }

  let single = null;

  dict.forEach((val, key) => {
    if (single === null && val === 1) {
      single = key;
    }
  });

  return single;
};

console.log(findNonRepeating("abcab")); // c
console.log(findNonRepeating("abab")); // null
console.log(findNonRepeating("aabbc")); // c
console.log(findNonRepeating("aabbdbc")); // d
console.log(findNonRepeating("")); // null
