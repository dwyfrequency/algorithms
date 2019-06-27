// Time O(N) | O(D)
// D is the depth of the tree. So the depth of the longest branch
// (root) -> bool
const validateBST = tree => {
  // min < value <= max
  return validateBSTHelper(tree, -Infinity, Infinity);
};

function validateBSTHelper(tree, min, max) {
  if (!tree.value) return true;
  if (tree.value <= min || tree.value > max) return false;
  return (
    validateBSTHelper(tree.left, min, tree.value) &&
    validateBSTHelper(tree.right, tree.value, max)
  );
}
