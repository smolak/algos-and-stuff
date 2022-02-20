/**
 * https://leetcode.com/submissions/detail/645350692/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (nums.length <= 1) return nums;

  let zeroesCount = 0;
  const temp = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroesCount++;

    if (zeroesCount >= 2) {
      return Array(nums.length).fill(0);
    }

    if (i === 0) {
      temp.push(1);
    } else {
      temp.push(temp[i - 1] * nums[i - 1]);
    }
  }

  const temp2 = Array(nums.length).fill(0);
  const answer = Array(nums.length).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      temp2[i] = 1;
    } else {
      temp2[i] = nums[i + 1] * temp2[i + 1];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = temp[i] * temp2[i];
  }

  return answer;
};
