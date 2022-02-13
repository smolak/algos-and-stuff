/**
 * m - number of rows
 * n - number of cols
 * s - number of surrounding fields (max 8)
 *
 * target, aim at O(m*n*s)
 *
 * - create table and fill with bombs
 * - walk the rows/cols (potentially fill with bombs as one goes)
 *    - for each bomb add 1 to surrounding fields (except for other bomb fields if present already)
 */

const isBomb = (table, r, c) => table[r][c] === -1;
const isWithinTable = (table, r, c) => c >= 0 && c < table[0].length && r >= 0 && r < table.length;
const markSurroundingFields = (table, row, col) => {
  /**
   *  0 0 1    1 1 2
   *  0 B 0 -> 1 B 1
   *  0 0 B    1 1 B
   */
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (isWithinTable(table, r, c) && !isBomb(table, r, c)) {
        table[r][c] += 1;
      }
    }
  }
};

const minesweeper = (bombs, rows, cols) => {
  const table = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));

  if (bombs.length === 0) return table;

  bombs.forEach(([r, c]) => {
    table[r][c] = -1;
    markSurroundingFields(table, r, c);
  });

  return table;
};

console.table(
  minesweeper(
    [
      [0, 2],
      [2, 0],
    ],
    3,
    3
  )
);

console.table(
  minesweeper(
    [
      [0, 0],
      [0, 1],
      [1, 2],
    ],
    3,
    4
  )
);
console.table(
  minesweeper(
    [
      [1, 1],
      [1, 2],
      [2, 2],
      [4, 3],
    ],
    5,
    5
  )
);
