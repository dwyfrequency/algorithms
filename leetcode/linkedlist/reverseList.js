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
var reverseList = function(head) {
  if (!head || !head.next) return head;
  let prevNode = null,
    curNode = head,
    nextNode = curNode.next;
  while (nextNode) {
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode.next;
  }
  return curNode;
};
