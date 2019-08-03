/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root, arr = []) {
  if (!root) return [];
  postorderTraversal(root.left, arr);
  postorderTraversal(root.right, arr);
  arr.push(root.val);
  return arr;
};

const postOrderIterative = root => {
  if (!root) return root;
  const curStack = [root];
  const finalStack = [];
  while (curStack.length) {
    const curNode = curStack.pop();
    if (curNode.left) curStack.push(curNode.left);
    if (curNode.right) curStack.push(curNode.right);
    finalStack.push(curNode);
  }
  while (finalStack.length) console.log(finalStack.pop());
};
