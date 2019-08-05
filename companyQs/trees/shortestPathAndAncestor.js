/*
root = {
  val,
  left: {
    val,
    left,
    right
  }
  right: {
    val,
    left,
    right
  }
}
we iterate through using bfs, and mutate the obj adding an ancestor prop
then once we hit the search val, we build a return array of our ancestors
*/

function getShortestPath(root, lookupVal) {
  root.ancestor = null;
  const queue = [root];
  while (queue.length) {
    const curNode = queue.shift();
    if (curNode.value === lookupVal) {
      return createPath(curNode);
    } else if (curNode.left) {
      curNode.left.ancestor = curNode.value;
      queue.push(curNode.left);
    } else if (curNode.right) {
      curNode.right.ancestor = curNode.value;
      queue.push(curNode.right);
    }
  }
  return []; // if not found return blank array
}

function createPath(node) {
  const returnArr = [];
  while (node) {
    returnArr.unshift(node.value);
    node = node.ancestor;
  }
  return returnArr;
}
