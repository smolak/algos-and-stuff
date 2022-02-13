// https://leetcode.com/submissions/detail/633762423/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const strings = Array(numRows).fill("");

  let rowNumber = 0;
  let direction = "down";

  for (let charNumber = 0; charNumber < s.length; charNumber++) {
    strings[rowNumber] += s[charNumber];

    if (rowNumber === numRows - 1) {
      direction = "up";
    }

    if (rowNumber === 0) {
      direction = "down";
    }

    direction === "down" ? rowNumber++ : rowNumber--;
  }

  return strings.join("");
};
