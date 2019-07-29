/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, cnt = 0) {
  if (!root) return cnt;
  // if we are at a non-null node increment the cnt
  cnt++;
  // get cnt from left and right side, return max of both
  const leftCnt = maxDepth(root.left, cnt);
  const rightCnt = maxDepth(root.right, cnt);
  return Math.max(leftCnt, rightCnt);
};
