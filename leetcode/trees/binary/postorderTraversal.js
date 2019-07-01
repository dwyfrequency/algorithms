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
