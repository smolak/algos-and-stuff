// https://leetcode.com/submissions/detail/629853584/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const combined = nums1.concat(nums2).sort((a, b) => a - b);

  if (combined.length % 2 === 0) {
    const left = combined[combined.length / 2 - 1];
    const right = combined[combined.length / 2];

    return (left + right) / 2;
  }

  return combined[Math.floor(combined.length / 2)];
};
