/**
 * https://leetcode.com/submissions/detail/647664613/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  /**
   * take the first element of each list
   whichever is smaller, is the first one
   - it the same, just go with any, e.g. latter
   if both the same: go to next in both and repeat
   if one is smaller: iterate that one and repeat
   repeat till all done
   no need to create new list
   */

  // early returns
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val > list2.val) {
    let temp = list1;
    list1 = list2;
    list2 = temp;
  }

  let head = list1;
  let prev = list1;
  list1 = list1.next;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev = list1;
      list1 = list1.next;
    } else {
      let node = new ListNode(list2.val);
      prev.next = node;
      node.next = list1;
      prev = node;
      list2 = list2.next;
    }
  }

  if (list2) prev.next = list2;

  return head;
};
