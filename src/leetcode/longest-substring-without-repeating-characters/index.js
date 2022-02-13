// https://leetcode.com/submissions/detail/629841915/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (string) => {
  if (string.length < 2) {
    return string.length;
  }

  const map = new Map();
  let longest = 0;

  for (let left = 0, right = 0; right < string.length; right++) {
    if (map.has(string[right])) {
      left = Math.max(map.get(string[right]), left);
    }

    map.set(string[right], right + 1);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};
