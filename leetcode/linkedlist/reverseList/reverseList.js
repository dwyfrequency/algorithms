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
