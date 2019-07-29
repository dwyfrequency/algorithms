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
var isValidBST = function(root, status = true) {
  //  we need to create a min max at each node
  if (!root) return true;
  if (status && root.left) {
    status = root.val > root.left.val && isValidBST(root.left, status);
  }

  if (status && root.right) {
    status = root.val < root.right.val && isValidBST(root.right, status);
  }
  return status;
};
