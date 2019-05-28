// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    while (currentNode) {
      currentNode =
        currentNode.value > value ? currentNode.left : currentNode.right;
    }
    currentNode = new BST(value);
    return this;
  }

  contains(value) {
    // Write your code here.
    let currentNode = this;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode =
        currentNode.value > value ? currentNode.left : currentNode.right;
    }
    return false;
  }

  // eslint-disable-next-line complexity
  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    let parentNode;
    while (currentNode.value !== value) {
      parentNode = currentNode;
      currentNode =
        currentNode.value > value ? currentNode.left : currentNode.right;
    }
    if (currentNode.left && currentNode.right) {
      let nodeToReplace = currentNode;
      while (currentNode.right) {
        currentNode = currentNode.right;
      }
      nodeToReplace = currentNode.value;
      currentNode = null;
    } else if (currentNode.left) {
      currentNode = currentNode.left;
    }
    return this;
  }
}

// Do not edit the line below.
exports.BST = BST;
