/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var mergeTwoLists = function(l1, l2) {
  const head = new ListNode(); // keep pointer to head
  let curNode = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      // add new node
      curNode.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      curNode.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    // make current node the newly added node
    curNode = curNode.next;
  }
  curNode.next = l1 || l2;
  /*
  ListNode {
  val: undefined,
  next: ListNode { val: 1,
                  next: ListNode { val: 2, next: [ListNode] } }}
  */
  // because this was just a unpopulated node w/ val, the next value actually
  // points to our list, see above
  return head.next;
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
console.log(mergeTwoLists(linkedList));
