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
var removeNthFromEnd = function(head, n) {
  let leftMostPnt = head;
  let leadPnt = head;
  for (let i = 0; i < n; i++) leadPnt = leadPnt.next;
  if (!leadPnt) {
    head.val = head.next.val;
    head = head.next;
    return head;
  }
  while (leadPnt.next !== null) {
    leadPnt = leadPnt.next;
    leftMostPnt = leftMostPnt.next;
  }
  leadPnt.next = leadPnt.next.next;
};
