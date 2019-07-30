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
var isValidBST = function(root, minMax = { min: -Infinity, max: Infinity }) {
  //  we need to create a min max at each node
  if (!root) return true;
  const { min, max } = minMax;
  // our root can never be less than or equal to our min or greater than max
  if (root.val <= min || root.val >= max) {
    return false;
  }

  // when going left, update the max val to the parent
  // going right, update the min val to the parent
  return (
    isValidBST(root.left, { ...minMax, max: root.val }) &&
    isValidBST(root.right, { ...minMax, min: root.val })
  );
};
