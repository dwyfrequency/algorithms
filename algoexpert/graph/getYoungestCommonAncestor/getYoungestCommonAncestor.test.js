function helper(root, ancestor) {
  let currNode = ancestor;
  let queue = [ancestor];
  while (currNode !== root) {
    queue.push(currNode.ancestor);
    currNode = currNode.ancestor;
  }
  return queue;
}
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
  return root;
}
// Do not edit the line below.
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
