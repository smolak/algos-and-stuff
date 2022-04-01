/**
 * https://leetcode.com/submissions/detail/655440490/
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // single element case
  if (strs.length === 1) return [strs];

  // if you want to keep the function pure, don't have to if e.g it's a lambda on an AWS and you just pass it an array for some "calculations"
  // const source = [...strs];

  const dict = {};

  for (let word of strs) {
    const sorted = word.split("").sort().join();

    if (sorted in dict) {
      dict[sorted].push(word);
    } else {
      dict[sorted] = [word];
    }
  }

  return Object.values(dict);
};
