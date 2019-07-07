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

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  // thinking two pointer solution - keep left most pointer
  // k nodes being the right and keep advancing until the end
  let curNode = head;
  let leftPnt = head;
  // (0 -> 1 -> null, 2)  => should remove num 0
  //
  // 0 1
  for (let i = 1; i <= k; i++) {
    // we do <= b/c we want the node just after the one we want to delete
    curNode = curNode.next;
  }
  if (!curNode) {
    // checks if node to delete is the head of our linked list
    leftPnt.value = leftPnt.next.value;
    leftPnt.next = leftPnt.next.next;
    return leftPnt;
  }
  while (curNode.next !== null) {
    // iterate until current node is the tail
    curNode = curNode.next;
    leftPnt = leftPnt.next;
  }
  leftPnt.next = leftPnt.next.next;
}

function removeKthNodeFromEndV3(head, k) {
  // Write your code here.
  // thinking two pointer solution - keep left most pointer
  // k nodes being the right and keep advancing until the end
  let curNode = head,
    leftPnt = head,
    counter = 0;
  while (counter !== k) {
    curNode = curNode.next;
    counter++;
  }
  if (!curNode) {
    // k is the len of the ll, we place the head and return
    leftPnt.value = leftPnt.next.value;
    leftPnt.next = leftPnt.next.next;
    return;
  }
  while (curNode.next !== null) {
    // iterate until the tail
    curNode = curNode.next;
    leftPnt = leftPnt.next;
  }
  // 	changes pointer to the node after the kth element
  leftPnt.next = leftPnt.next.next;
}

// Do not edit the line below.
exports.removeKthNodeFromEnd = removeKthNodeFromEndAttempt2;
