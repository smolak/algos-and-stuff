/**
 * n - number of chars in input string
 * target: O(n)
 *
 * Single change of:
 *  - replacing a char with another char
 *  - removing a char
 *  - adding a char
 *
 * Returned value: boolean
 */

/**
 *  - if equal in length
 *    - walk equally and count differences
 *      - if diff > 1, return false
 *  - if different in length
 *    - walk the longer / shorter one?
 *
 *      abc  a b (diff 1, increase index) c
 *      ac   a c                          c
 *
 *      abc  a b (diff 1, increase index) c (diff 2, break loop, return false)
 *      ad   a d                          d
 *
 *      ab  a b (end, diff === 0 -> true)
 *      abc a b
 *
 *      ab  a b (end, diff === 1 -> false)
 *      acd a c
 *
 *      walking longer is better as it can break earlier
 */

const isOneAwaySameLength = (string1, string2) => {
  let diffCount = 0;

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      diffCount++;

      if (diffCount > 1) {
        return false;
      }
    }
  }

  return true;
};

const isOneAwayDiffLengths = (longerString, shorterString) => {
  let diffCount = 0;

  for (let i = 0, j = 0; i < longerString.length; i++) {
    if (longerString[i] === shorterString[j]) {
      j++;
    } else {
      diffCount++;

      if (diffCount > 1) {
        return false;
      }
    }
  }

  return true;
};

const isOneAway = (string1, string2) => {
  if (Math.abs(string1.length - string2.length) >= 2) return false;

  if (string1.length === string2.length) {
    return isOneAwaySameLength(string1, string2);
  }

  if (string1.length > string2.length) {
    return isOneAwayDiffLengths(string1, string2);
  }

  return isOneAwayDiffLengths(string2, string1);
};

console.log(1, isOneAway("a", "abc") === false); // false
console.log(2, isOneAway("abc", "a") === false); // false
console.log(3, isOneAway("abcde", "abcd") === true); // true
console.log(4, isOneAway("abde", "abcde") === true); // true
console.log(5, isOneAway("a", "a") === true); // true
console.log(6, isOneAway("abcdef", "abqdef") === true); // true
console.log(7, isOneAway("abcdef", "abccef") === true); // true
console.log(8, isOneAway("aaa", "abc") === false); // false
console.log(9, isOneAway("abcde", "abc") === false); // false
console.log(10, isOneAway("abc", "abcde") === false); // false
console.log(11, isOneAway("abc", "bcc") === false); // false
