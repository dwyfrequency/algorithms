class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Time O(n) | Space O(1)
const reverseLinkedList = node => {
  if (!node || !node.next) return node;
  let curNode = node;
  let prevNode = null;
  while (curNode) {
    const nextNode = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = nextNode;
  }
  return prevNode;
};

module.exports = {
  ListNode,
  reverseLinkedList,
};
