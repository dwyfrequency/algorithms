/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Time O(n) | Space O(n)
var hasCycle = function(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
};

const hasCycleTwoPointers = head => {
  if (!head || !head.next) return false;
  let slowPnt = head;
  let fastPnt = head.next;
  while (fastPnt && fastPnt.next) {
    if (slowPnt === fastPnt) return true;
    slowPnt = slowPnt.next;
    fastPnt = fastPnt.next.next;
  }
  return false;
};
