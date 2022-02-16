const expandAroundCenter = (string, left, right) => {
  for (let i = 0; i < left; i++) {
    if (string[left - i] !== string[right + i]) {
      return false;
    }
  }

  return true;
};

export function isPalindrome(str) {
  if (str.length === 0) return false;
  if (str.length === 1) return true;

  // even number of letters: "abba"
  //    [b][b] <-- left: 1, right: 2
  // [a]      [a]

  // odd number of letters: "level"
  //       [v] <-- left: 2, right: 2
  //    [e]   [e]
  // [l]         [l]
  // right === left

  if (str.length % 2 === 0) {
    return expandAroundCenter(str, str.length / 2 - 1, str.length);
  }

  const center = Math.floor(str.length / 2);

  return expandAroundCenter(str, center, center);
}
