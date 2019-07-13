function helper(root, ancestor) {
  let currNode = ancestor;
  let queue = [ancestor];
  while (currNode !== root) {
    queue.push(currNode.ancestor);
    currNode = currNode.ancestor;
  }
  return queue;
}

// Time O(d) | Space O(d)
// d is depth
function getYoungestCommonAncestorTeamRichieNJack(
  topAncestor,
  descendantOne,
  descendantTwo
) {
  // Write your code here.
  const queue1 = helper(topAncestor, descendantOne);
  const queue2 = helper(topAncestor, descendantTwo);

  while (queue1.length && queue2.length) {
    if (queue1.length > queue2.length) {
      if (queue1.shift() === queue2[0]) {
        return queue2[0];
      }
    } else if (queue1.length < queue2.length) {
      if (queue2.shift() === queue1[0]) {
        return queue1[0];
      }
    } else {
      const youngest = queue1.shift();
      if (youngest === queue2.shift()) {
        return youngest;
      }
    }
  }
  return topAncestor;
}

const getYoungestCommonAncestor = (
  topAncestor,
  descendantOne,
  descendantTwo
) => {
  const queue1 = helper(topAncestor, descendantOne);
  const queue2 = helper(topAncestor, descendantTwo);
  if (queue1.length < queue2.length) {
    while (queue1.length !== queue2.length) queue2.shift();
  } else if (queue2.length < queue1.length) {
    while (queue1.length !== queue2.length) queue1.shift();
  }
  while (queue1.length && queue2.length) {
    if (queue1[0] === queue2[0]) {
      return queue1[0];
    } else {
      queue1.shift();
      queue2.shift();
    }
  }
  return topAncestor;
};

/* Algo Exp solution */

// increment depthCnt until we hit the root
const getDepth = (root, curNode) => {
  let depthCnt = 0;
  while (curNode !== root) {
    depthCnt++;
    curNode = curNode.ancestor;
  }
  return depthCnt;
};

const findYoungestCommon = (diff, largestDepthDesc, smallestDepthDesc) => {
  // if the depths are different, then we arent at the common ancestor
  while (diff > 0) {
    diff--;
    largestDepthDesc = largestDepthDesc.ancestor;
  }
  // while the values are not equal keep going up the graph
  while (largestDepthDesc !== smallestDepthDesc) {
    largestDepthDesc = largestDepthDesc.ancestor;
    smallestDepthDesc = smallestDepthDesc.ancestor;
  }
  // return the value once equal
  return largestDepthDesc;
};

// O(d) | O(1)
const youngestCommonAncestorAlgoExp = (
  topAncestor,
  descendantOne,
  descendantTwo
) => {
  // get how deep it is from the root
  const depthCntDescOne = getDepth(topAncestor, descendantOne);
  const depthCntDescTwo = getDepth(topAncestor, descendantTwo);
  if (depthCntDescOne < depthCntDescTwo) {
    return findYoungestCommon(
      depthCntDescTwo - depthCntDescOne,
      descendantTwo,
      descendantOne
    );
  } else {
    return findYoungestCommon(
      depthCntDescOne - depthCntDescTwo,
      descendantOne,
      descendantTwo
    );
  }
};
// Do not edit the line below.
exports.getYoungestCommonAncestor = youngestCommonAncestorAlgoExp;
