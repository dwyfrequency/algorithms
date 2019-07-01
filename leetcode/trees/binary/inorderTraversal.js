import { arrayExpression } from '@babel/types';

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
var inorderTraversalRecursive = function(root, arr = []) {
  if (!root) return arr;
  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
  return arr;
};

var inorderTraversalIterative = function(root, arr = []) {
  if (!root) return arr;
  const stack = [root];
  while (stack.length) {
    const top = stack[stack.length - 1];
    if (top.left) {
      stack.push(top.left);
    } else if (top.right) {
      stack.push(top.right);
    } else {
      arr.push(top);
    }
  }
  return arr;
};
