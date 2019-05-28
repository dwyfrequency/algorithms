function findClosestValueInBst(tree, target) {
  // Write your code here.
  let minDelta = Infinity,
    closestVal = Infinity;
  let currentNode = tree;
  while (currentNode) {
    if (target === currentNode.value) return target;
    let dif = Math.abs(target - currentNode.value);
    if (dif < minDelta) {
      minDelta = dif;
      closestVal = currentNode.value;
    }
    if (currentNode.value < target) {
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }
  return closestVal;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
