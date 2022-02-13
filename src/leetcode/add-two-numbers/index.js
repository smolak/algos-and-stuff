// https://leetcode.com/submissions/detail/632557521/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const toNumber = (list) => {
  let s = String(list.val);

  if (list.next) {
    s = toNumber(list.next) + s;
  }

  return BigInt(s);
};

const toList = (number) => {
  return String(number)
    .split("")
    .reduce((list, stringifiedDigit) => {
      return new ListNode(Number(stringifiedDigit), list);
    }, undefined);
};

var addTwoNumbers = function (list1, list2) {
  return toList(toNumber(list1) + toNumber(list2));
};
