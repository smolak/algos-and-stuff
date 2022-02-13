// https://leetcode.com/submissions/detail/632505195/

const expandAroundCenter = (string, left, right) => {
  let l = left;
  let r = right;

  while (l >= 0 && r < string.length && string.charAt(l) === string.charAt(r)) {
    l--;
    r++;
  }

  return r - l - 1;
};

var longestPalindrome = function (string) {
  if (string.length < 2) {
    return string;
  }

  let start = 0;
  let len1 = 0;
  let len2 = 0;
  let len = 0;
  let longest = 0;

  for (let i = 0; i < string.length; i++) {
    len1 = expandAroundCenter(string, i, i); // palindrome length from center as a single char
    len2 = expandAroundCenter(string, i, i + 1); // palindrome length from center as 2 chars
    len = Math.max(len1, len2);

    if (len > longest) {
      longest = len;
      start = len1 > len2 ? i - Math.floor(len1 / 2) : i - len2 / 2 + 1;
    }
  }

  return string.substr(start, longest);
};
