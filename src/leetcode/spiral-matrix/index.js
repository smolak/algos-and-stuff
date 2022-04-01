/**
 * https://leetcode.com/submissions/detail/656148045/
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  /**
   - whenever going down, pop O(1) operation, no shifting, also that way..
   - ...whenever going right, just take the whole array (as the last element is already gone)
   - check concat big O cost
   - it's bigger than O(n) for for loop, so loop it is
   - going left do regular for loop, ro reverse.... and take whole
   - check reverse big O cost
   - for loop is O(n), loop it is
   - how do we navigate?
   - limits? top, bottom, left and right changing?
   - when do we end?
   - counter would be OKish, as the whole rows and cols checking ... can be confusing
   - how do we walk the array?
   - while loop till all elements are walked through with direction changing, that indicates row and col changes perhaps


   DIFFERENT IDEA

   Every matrix will have this shape (more or less)

   --------
   |------|
   ||----||
   |------|
   --------

   oscilate

   going down and up till all items are used
   limits will play the role to tell when to take the wole row or single element from column
   **/

  const rows = matrix.length;
  const cols = matrix[0].length;

  // quick win
  if (rows === 1) return matrix[0];
  if (cols === 1) return matrix.map(([e]) => e);

  // rest
  let direction = "down";

  const result = matrix[0];

  let itemsLeft = (rows - 1) * cols;
  let r = 0;
  let c = cols - 1;

  // limits
  let top = 1; // we already took the first row
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  while (itemsLeft > 0) {
    if (direction === "down") {
      if (r === bottom) {
        //take bottom row right to left
        for (let i = right - 1; i >= left; i--) {
          result.push(matrix[r][i]);
          itemsLeft--;
        }

        direction = "up";
        c = left;
        right--;
        bottom--;
      } else {
        r++;
        result.push(matrix[r][c]);
        itemsLeft--;
      }
    } else {
      if (r === top) {
        // take top row left to right
        for (let i = left + 1; i <= right; i++) {
          result.push(matrix[r][i]);
          itemsLeft--;
        }

        direction = "down";
        c = right;
        left++;
        top++;
      } else {
        r--;
        result.push(matrix[r][c]);
        itemsLeft--;
      }
    }
  }

  return result;
};
