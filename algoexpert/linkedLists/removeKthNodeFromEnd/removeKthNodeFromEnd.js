// Time O(n) | Space
function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  // thinking two pointer solution - keep left most pointer
  // k nodes being the right and keep advancing until the end
  let curNode = head;
  let leftPnt = head,
    distance = 0;
  while (curNode.next) {
    if (distance === k) {
      leftPnt = leftPnt.next;
    } else {
      distance++;
    }
    curNode = curNode.next;
  }
  leftPnt.next = leftPnt.next.next;
}

// Do not edit the line below.
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
