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
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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

module.exports = { reverseList, ListNode };
