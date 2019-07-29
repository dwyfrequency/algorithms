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
  cnt++;
  const leftCnt = maxDepth(root.left, cnt);
  const rightCnt = maxDepth(root.right, cnt);
  return Math.max(leftCnt, rightCnt);
};
