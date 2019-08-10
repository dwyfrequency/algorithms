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
    curNode = head;
  // iterate until the tail
  while (curNode.next) {
    // take next val in list
    let nextNode = curNode.next;
    // assign currentNode the prevNode as next
    curNode.next = prevNode;
    // make the prevNode the curNode
    prevNode = curNode;
    // make curNode the nextNode
    curNode = nextNode;
    nextNode = nextNode.next;
  }
  // once we've found the tail, point the head at the prevNode
  curNode.next = prevNode;
  return curNode;
};

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);
const l4 = new ListNode(4);
const l5 = new ListNode(5);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
const linkedList = l1;
console.log(reverseList(linkedList));

module.exports = { reverseList, ListNode };
