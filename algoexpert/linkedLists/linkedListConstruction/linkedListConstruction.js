// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Time O(1) | O(1) space
    // Write your code here.
    this.head = node;
  }

  setTail(node) {
    // Time O(1) | O(1) space
    // Write your code here.
    this.tail = node;
  }

  insertBefore(node, nodeToInsert) {
    // Time O(1) | O(1) space
    // Write your code here.
  }

  insertAfter(node, nodeToInsert) {
    // Time O(1) | O(1) space
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Time O(P) | O(1) space where P stands for position
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Time O(N) | O(1) space
    // Write your code here.
  }

  remove(node) {
    // Time O(1) | O(1) space
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Time O(N) | O(1) space
    // Write your code here.
  }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;
