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

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var preorderTraversal = function(root, arr = []) {
  if (!root) return [];
  arr.push(root.val);
  preorderTraversal(root.left, arr);
  preorderTraversal(root.right, arr);
  return arr;
};

const rootNode = new TreeNode(1);
const child = new TreeNode(2);
const child2 = new TreeNode(3);
child.left = child2;
rootNode.right = child;
console.log(preorderTraversal(rootNode));
