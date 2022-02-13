/**
 * [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9],
 * ]
 *
 * [
 *  [7, 4, 1],
 *  [8, 5, 2], -> [0,2], [0,1], [0,0]...
 *  [9, 6, 3]
 * ]
 *
 * for (c = 0; c < n; c++)
 *   for (r = n - 1; r === 0; r--)
 *     0,2
 *     0,1
 *     0,0
 *
 *
 * Given it's a square.
 *
 * 1st row -> last column
 * 2nd row -> mid column
 * 3rd row -> 1st column
 *
 * 1) create new empty array
 *    - walk the original array (row by row)
 *    - each cell will become [r, c] ->
 *       [0, 0] (1) -> [0, 2]
 *       [0, 1] (2) -> [1, 2]  -> if (row === 0) -> r = c, c = n -1
 *       [0, 2] (3) -> [2, 2]
 *
 *       [1, 0] (4) -> [0, 1]
 *       [1, 1] (5) -> [1, 1]  -> r = c, c = n - r - 1
 *       [1, 2] (6) -> [2, 1]
 *
 *       [2, 0] (7) -> [0, 0]
 *       [2, 1] (8) -> [1, 0]  -> else: r = c, c = 0
 *       [2, 2] (9) -> [2, 0]
 *
 *       [1, 2],
 *       [3, 4]
 *
 *       [3, 1]
 *       [4, 2]
 *
 *       [0, 0] (1) -> [0, 1]
 *       [0, 1] (2) -> [1, 1]
 *       [1, 0] (3) -> [0, 0]
 *       [1, 1] (4) -> [1, 0]
 *
 *       [1, 2, 3, 4]
 *       [5, 6, 7, 8]
 *       [9, 10, 11, 12]
 *       [13, 14, 15,16]
 *
 *       [13, 9, 5, 1]
 *       [14, 10, 6, 2]
 *       [15, 11, 7, 3]
 *       [16, 12, 8, 4]
 *
 *       if (row === 0) -> r = c, c = n -1
 *       mid points: r = c, c = n - r - 1
 *       if (row === n - 1) -> r = c, c = 0
 *
 *       (1) [0,0] -> [0, 3]
 *       (2) [0,1] -> [1, 3]
 *
 *       (5) [1,0] -> [0,2]
 *       (6) [1,1] -> [1,2]
 *       (7) [1,2] -> [2,2]  -> r = c, c = n - r - 1
 *       (8) [1,3] -> [3,2]
 *
 *       (9)  [2,0] -> [0,1]
 *       (10) [2,1] -> [1,1]  -> r = c, c = n - r - 1
 *       (11) [2,2] -> [2,1]
 *       (12) [2,3] -> [3,1]
 */

const newCoords = (r, c, n) => [c, n - r - 1];

const rotateArray = (array, n) => {
  const rotatedArray = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const [nr, nc] = newCoords(r, c, n);
      rotatedArray[nr][nc] = array[r][c];
    }
  }

  return rotatedArray;
};

const rotateArray2 = (array, n) => {
  /**
   * [1,2,3]   (1) [0,0] -> [0,1] store the [0,1] from original
   * [4,5,6]
   * [7,8,9]
   *
   * [7,4,1]
   * [8,5,2]
   * [9,6,3]
   *
   * current coordinates AND new coordinates -> 0,0 and 0,2
   * current value AND current value at new coordinates -> 1 and 3
   * (1) CC: 0,0; NC: 0,2; CV: 1; CVNC: 3
   * (2) CC: 0,1; NC: 1,2; CV: 2; CVNC: 6
   *
   * 0,0 -> 0,2 -> 3,3 -> 3,0 -> 0,0
   * 0,1 -> 1,2 -> 2,1 -> 1,0 -> 0,1
   *
   *       [1, 2, 3, 4]
   *       [5, 6, 7, 8]
   *       [9, 10, 11, 12]
   *       [13, 14, 15,16]
   *
   *       [13, 9, 5, 1]
   *       [14, 10, 6, 2]
   *       [15, 11, 7, 3]
   *       [16, 12, 8, 4]
   *
   *       0,0 -> 0,3 -> 3,3 -> 3,0 -> 0,0 => r,c -> c, n-1 ->
   *       0,1 -> 1,3 -> 3,2 -> 2,0 -> 0,1
   *
   *       3x3 -> 3, 1
   *       4x4 -> 4, 2
   *       5x5 -> 5, 3, 1
   *       6x6 -> 6, 4, 2
   */

  const numberOfSquares = Math.ceil(n / 2); // 3x3 -> 2; 4x4 -> 2
  const tempValues = [-1, -1, -1, -1];
  const tempCoords = [-1, -1];

  // for each outer to inner square
  for (let s = 0; s < numberOfSquares; s++) {
    // go as many steps as there are on the edge - 1 (from corner to penultimate)
    const numbersOfElements = n - 2 * s - 1;

    for (let element = 0; element < numbersOfElements; element++) {
      tempCoords[0] = s;
      tempCoords[1] = s + element;

      // and rotate each element on all 4 sides
      for (let step = 0; step < 4; step++) {
        const [nr, nc] = newCoords(tempCoords[0], tempCoords[1], n);
        tempValues[step] = array[nr][nc];

        if (step > 0) {
          array[nr][nc] = tempValues[step - 1];
        } else {
          array[nr][nc] = array[tempCoords[0]][tempCoords[1]];
        }

        tempCoords[0] = nr;
        tempCoords[1] = nc;
      }
    }
  }

  return array;
};

const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/**
 * Expected
 * [
 *  [7, 4, 1],
 *  [8, 5, 2],
 *  [9, 6, 3]
 * ]
 */
console.log("Original array:");
console.table(array1);
console.table(rotateArray(array1, 3));
console.table(rotateArray2(array1, 3));

const array2 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];

console.log("Original array:");
console.table(array2);
console.table(rotateArray(array2, 6));
console.table(rotateArray2(array2, 6));
