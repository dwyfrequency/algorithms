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
  let cnt = 1;
  while (cnt < n) {
    cnt++;
    leadPnt = leadPnt.next;
  }
};
