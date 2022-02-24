/**
 * https://leetcode.com/submissions/detail/648293687/
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let obj = {};
  let left = 0;
  let result = 0;

  for (let right in s) {
    //increment count of char at position right
    if (obj[s[right]]) {
      obj[s[right]]++;
    } else {
      obj[s[right]] = 1;
    }

    //while the window minus the number of most frequent chars is greater than k we narrow down the window
    let val = Object.values(obj);
    let windowSize = right - left + 1;
    let countOfMostFreq = Math.max(...val);
    let countOfLeastFreq = windowSize - countOfMostFreq;

    if (countOfLeastFreq > k) {
      obj[s[left]]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
