const gridTraveler = (m, n) => {
  const grid = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // we know that a 1x1 grid will take max 1 ways of passing it,
  // so we can set that the value of 1 in [1,1] position.
  grid[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = grid[i][j];

      if (j + 1 <= n) grid[i][j + 1] += current;
      if (i + 1 <= m) grid[i + 1][j] += current;
    }
  }

  return grid[m][n];
};

/**
 * time: O(m*n)
 * spce: O(m*n)
 */

console.log(gridTraveler(1, 1), "- should equal: 1");
console.log(gridTraveler(2, 3), "- should equal: 3");
console.log(gridTraveler(3, 2), "- should equal: 3");
console.log(gridTraveler(3, 3), "- should equal: 6");
console.log(gridTraveler(18, 18), "- should equal: 2333606220");
