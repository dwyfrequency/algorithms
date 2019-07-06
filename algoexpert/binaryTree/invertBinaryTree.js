function swapNodeVals(node) {
  const newRight = node.left;
  node.left = node.right;
  node.right = newRight;
}

function invertBinaryTree(tree) {
  // Write your code here.
  // thinking use BFS and swap each
  if (!tree) return tree;
  const queue = [tree];
  while (queue.length) {
    const curNode = queue.shift();
    swapNodeVals(curNode);
    curNode.left && queue.push(curNode.left);
    curNode.right && queue.push(curNode.right);
  }
  return tree;
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
