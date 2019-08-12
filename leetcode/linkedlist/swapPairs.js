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
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Time O(n) | Space O(n) -> not O(1) b/c not tail recursive
var swapPairsRecursion = function(head) {
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

var swapPairsIter = function(head) {
  // if null or odd number of nodes, there is nothing to swap with
  if (!head || !head.next) return head;
  // get the next node
  let prevNode = null;
  let curNode = head;
  while (curNode && curNode.next) {
    const node2 = curNode.next;
    // get reference to the node in front of node2
    const node2PrevNext = node2.next;
    // reassign next node.next to head
    node2.next = curNode;
    // swap the pairs ahead and assign to our trailing node
    if (prevNode) {
      prevNode.next = node2;
    } else {
      head = node2;
    }
    prevNode = curNode;
    curNode = node2PrevNext;
    // return new start node
  }

  return head;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(swapPairsIter(node1));
