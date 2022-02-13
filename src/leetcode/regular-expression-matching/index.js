// https://leetcode.com/submissions/detail/633776474/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return new RegExp('^${p}$`).test(s);
};
