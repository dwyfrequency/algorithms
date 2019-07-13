// Time O(N) | Space O(N)
function findLoop(head) {
  // Write your code here.
  const set = new Set();
  let currentNode = head;
  while (!set.has(currentNode)) {
    set.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
}

// Do not edit the line below.
exports.findLoop = findLoop;
