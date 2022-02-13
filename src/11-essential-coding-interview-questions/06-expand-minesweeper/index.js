/**
 *
 */

const isEmpty = (table, r, c) => table[r][c] === 0;
const isWithinTable = (table, r, c) => c >= 0 && c < table[0].length && r >= 0 && r < table.length;

const markAdjacentFields = (table, row, col) => {
  let queue = [];
  queue.push([row, col]);

  while (queue.length > 0) {
    let [r, c] = queue.shift();

    for (let i = r - 1; i <= r + 1; i++) {
      for (let j = c - 1; j <= c + 1; j++) {
        if (isWithinTable(table, i, j) && isEmpty(table, i, j)) {
          table[i][j] = -2;
          queue.push([i, j]);
        }
      }
    }
  }
};

const expandMinesweeper = (table, rows, cols, r, c) => {
  if (!isEmpty(table, r, c)) return table;

  markAdjacentFields(table, r, c);

  return table;
};

const table1 = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, -1, 1, 0],
];
const table2 = [
  [-1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 1, -1],
];

console.table(expandMinesweeper(table1, 3, 5, 2, 2));
console.table(expandMinesweeper(table1, 3, 5, 1, 4));
console.table(expandMinesweeper(table2, 4, 4, 0, 1));
console.table(expandMinesweeper(table2, 4, 4, 1, 3));
