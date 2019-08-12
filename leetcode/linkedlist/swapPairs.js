/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null;
  if (!head.next) return head;
  const node2 = head.next;
  const node1NewNext = node2.next;
  node2.next = head;
  head.next = swapPairs(node1NewNext);
  return node2;
};
