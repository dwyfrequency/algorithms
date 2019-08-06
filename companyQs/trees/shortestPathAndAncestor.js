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

// Time O(v + e) | Space O(v)
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
// Time O(depth)
function createPath(node) {
  const returnArr = [];
  while (node) {
    returnArr.unshift(node.value);
    node = node.ancestor;
  }
  return returnArr;
}

function getFirstCommonAncestor(root, val1, val2) {
  const ancestorArr1 = getShortestPath(root, val1);
  const ancestorArr2 = getShortestPath(root, val2);
  while (ancestorArr1.length !== ancestorArr2.length) {
    if (ancestorArr1.length > ancestorArr2.length) ancestorArr1.pop();
    else ancestorArr1.pop();
  }
  for (let i = ancestorArr1.length - 1; i >= 0; i--) {
    if (ancestorArr1[i] === ancestorArr2[i]) {
      return ancestorArr2[i];
    }
  }
}
