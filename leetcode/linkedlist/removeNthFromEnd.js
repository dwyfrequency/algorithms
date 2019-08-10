/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Time O(n) | Space O(1)
var removeNthFromEnd = function(head, n) {
  let leftMostPnt = head;
  let leadPnt = head;
  for (let i = 0; i < n; i++) leadPnt = leadPnt.next;
  // if they are asking us to remove the head
  if (leadPnt === null) {
    // if only one element, make head null
    if (!head.next) {
      head = null;
    } else {
      // update head to next value in list
      head.val = head.next.val;
      head = head.next;
    }
    return head;
  }
  // iterate until the tail
  while (leadPnt.next !== null) {
    leadPnt = leadPnt.next;
    leftMostPnt = leftMostPnt.next;
  }
  leftMostPnt.next = leftMostPnt.next.next;
  return head;
};
