const validateBSTUtil = (tree, min, max) => {
  if (!tree) return true;
  if (tree.value < min || tree.value >= max) return false;
  return (
    validateBSTUtil(tree.left, min, tree.value) &&
    validateBSTUtil(tree.right, tree.value, max)
  );
};

function validateBst(tree) {
  // Write your code here.
  return validateBSTUtil(tree, -Infinity, Infinity);
}

// Do not edit the line below.
exports.validateBst = validateBst;
