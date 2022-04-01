/**
 * https://leetcode.com/submissions/detail/656111744/
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const findZeroes = (matrix) => {
  const rowsCols = { rows: new Set(), cols: new Set() };
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        rowsCols.rows.add(r);
        rowsCols.cols.add(c);
      }
    }
  }

  return rowsCols;
};

var setZeroes = function (matrix) {
  /**
   - find zeroes (coords)
   - e.g. [1,1]
   - this will make the 1-indexed row and 1-indexed column as 0
   - e.g. [1,1], [0,1]
   - this time we have rows: 0 and 1 and column: 1
   - perhaps it's best to collect rows and columns together in a unique set?

   **/

  const rowsColsWithZeroes = findZeroes(matrix);

  if (rowsColsWithZeroes.rows.size > 0) {
    rowsColsWithZeroes.rows.forEach((row) => {
      matrix[row] = new Array(matrix[row].length).fill(0);
    });
  }

  // some optimization
  // all were already zeroed, no need for columns
  if (rowsColsWithZeroes.rows.size === matrix.length) return matrix;

  if (rowsColsWithZeroes.cols.size > 0) {
    rowsColsWithZeroes.cols.forEach((col) => {
      for (let r = 0; r < matrix.length; r++) {
        matrix[r][col] = 0;
      }
    });
  }

  return matrix;
};
