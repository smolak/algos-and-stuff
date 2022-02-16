export function rle(str) {
  /**
   * temp number - number of occurrences of given char in a row
   * result string - newly build string with result
   *
   * check next char, if:
   *  1) same:
   *   - increase temp number
   *   - iterate further
   *  2) different:
   *   - concatenate the result string with current char
   *   - temp number === 1 ? do nothing : concatenate that number
   *   - reset temp number
   *   - iterate further
   *   (the end of the string will be covered here, as the "after" last char will be undefined)
   *
   *  This will have time O(n), space O(n) simplified as space is twice that much
   *  but not mentioned in complexity measurement as it is constant (twice).
   */

  if (str.length <= 1) return str;

  let result = "";
  let tempNumber = 0;

  for (let i = 0; i < str.length; i++) {
    tempNumber++;

    if (str[i] !== str[i + 1]) {
      result += str[i];

      if (tempNumber > 1) {
        result += tempNumber;
      }

      tempNumber = 0;
    }
  }

  return result;
}
