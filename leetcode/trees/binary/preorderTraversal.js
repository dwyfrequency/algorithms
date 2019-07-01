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

var preorderTraversalRecursive = function(root, arr = []) {
  if (!root) return [];
  arr.push(root.val);
  preorderTraversal(root.left, arr);
  preorderTraversal(root.right, arr);
  return arr;
};

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
// used with stack
var preorderTraversalStack = function(root, arr = []) {
  if (!root) return arr;
  const stack = [root];
  while (stack.length) {
    const currentNode = stack.pop();
    if (currentNode) {
      arr.push(currentNode.val);
      stack.push(currentNode.right);
      stack.push(currentNode.left);
    }
  }
  return arr;
};

// Made with queue
var preorderTraversalQueue = function(root, arr = []) {
  if (!root) return arr;
  const queue = [root];
  while (queue.length) {
    const currentNode = queue.pop();
    if (currentNode) {
      arr.push(currentNode.val);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }
  }
  return arr;
};

const rootNode = new TreeNode(1);
const child = new TreeNode(2);
const child2 = new TreeNode(3);
child.left = child2;
rootNode.right = child;
console.log(preorderTraversal(rootNode));
