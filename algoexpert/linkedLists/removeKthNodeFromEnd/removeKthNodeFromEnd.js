// URL: https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End
// Time O(n) | Space
// function removeKthNodeFromEnd(head, k) {
//   // Write your code here.
//   // thinking two pointer solution - keep left most pointer
//   // k nodes being the right and keep advancing until the end
//   let curNode = head;
//   let leftPnt = head,
//     distance = 0;
//   while (curNode.next) {
//     if (distance === k) {
//       leftPnt = leftPnt.next;
//     } else {
//       distance++;
//     }
//     curNode = curNode.next;
//   }
//   leftPnt.next = leftPnt.next.next;
// }

// URL: https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End
// Time O(n) | Space
function removeKthNodeFromEndAttempt2(head, k) {
  // Write your code here.
  // thinking two pointer solution - keep left most pointer
  // k nodes being the right and keep advancing until the end
  let curNode = head;
  let leftPnt = head,
    counter = 1;
  while (counter <= k) {
    curNode = curNode.next;
    counter++;
  }
  if (curNode === null) {
    leftPnt.value = leftPnt.next.value;
    leftPnt.next = leftPnt.next.next;
    return;
  }
  while (curNode.next !== null) {
    leftPnt = leftPnt.next;
    curNode = curNode.next;
  }
}

// Do not edit the line below.
exports.removeKthNodeFromEnd = removeKthNodeFromEndAttempt2;
