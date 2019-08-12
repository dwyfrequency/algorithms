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
  // if odd number of nodes, there is nothing to swap with
  if (!head.next) return head;
  // get the next node
  const node2 = head.next;
  // get reference to the node in front of node2
  const node1NewNext = node2.next;
  // reassign next node.next to head
  node2.next = head;
  // swap the pairs ahead and assign to our trailing node
  head.next = swapPairs(node1NewNext);
  // return new start node
  return node2;
};
