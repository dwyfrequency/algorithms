/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isMirror = function(leftNode, rightNode) {
  if (!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
  return (
    isMirror(leftNode.left, rightNode.right) &&
    isMirror(leftNode.right, rightNode.left)
  );
};

var isSymmetric = function(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
};
