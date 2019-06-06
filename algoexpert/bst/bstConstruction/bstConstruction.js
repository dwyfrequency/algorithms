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
    const insertNode = new BST(value);
    while (currentNode) {
      if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = insertNode;
          break;
        }
        currentNode = currentNode.left;
      } else if (!currentNode.right) {
        currentNode.right = insertNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let currentNode = this;
    while (currentNode) {
      if (currentNode.value === value) return true;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  getMinValue(node) {
    while (node.left) node = node.left;
    return node.value;
  }

  removeNodeBindings(node) {
    node.value = null;
    node.left = null;
    node.right = null;
  }

  // eslint-disable-next-line complexity
  remove(value, parentNode = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    while (currentNode) {
      if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // found the node
        if (currentNode.left && currentNode.right) {
          // we need to get the left most value value on the right branch
          currentNode.value = this.getMinValue(currentNode.right);
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (!parentNode) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
            currentNode.left.remove(currentNode.value, null);
          } else if (currentNode.right) {
            // we need to get the left most value value on the right branch
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
            currentNode.right.remove(currentNode.value, null);
          }
          return this;
        } else if (parentNode.left === currentNode) {
          /*
						6
					 /
				  3
				 /  \
				2	   5
							*/
          parentNode.left = currentNode.left
            ? currentNode.left
            : currentNode.right;
          currentNode = null;
        } else {
          parentNode.right = currentNode.right
            ? currentNode.right
            : currentNode.left;
          currentNode = null;
        }
        return this;
      }
    }
    return this;
  }
}

// Do not edit the line below.
exports.BST = BST;
