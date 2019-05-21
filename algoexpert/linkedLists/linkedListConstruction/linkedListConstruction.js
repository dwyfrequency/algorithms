// Feel free to add new properties and methods to the class.
// Video time 42:13
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Time O(1) | O(1) space
    // Write your code here.
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      node.prev = null;
      this.head.prev = node;
      this.head = node;
    }
  }

  setTail(node) {
    // Time O(1) | O(1) space
    // Write your code here.
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      node.next = null;
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertBefore(node, nodeToInsert) {
    // Time O(1) | O(1) space
    // Write your code here.
    if (node.prev === null) {
      this.setHead(nodeToInsert);
      return;
    } else if (node.next === null) {
      this.setTail(nodeToInsert);
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    node.prev.next = nodeToInsert;
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    // Time O(1) | O(1) space
    // Write your code here.
    if (node.prev === null) {
      this.setHead(nodeToInsert);
      return;
    } else if (node.next === null) {
      this.setTail(nodeToInsert);
      return;
    }

    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;
    node.next.prev = nodeToInsert;
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    // Time O(P) | O(1) space where P stands for position
    // Write your code here.
    let currentNode = this.head.next;
    while (currentNode.value !== node.value) {
      currentNode = currentNode.next;
      if (!currentNode) throw new Error('No node found');
    }
  }

  removeNodesWithValue(value) {
    // Time O(N) | O(1) space
    // Write your code here.
    let node = this.head;
    while (node) {
      // need this intermediate b/c we clear the bindings in our remove function
      // so we would not be able to go to the next node in the list if we didnt update node to node.next before remove call
      // never lose track of your pointers
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    // Time O(1) | O(1) space
    // Write your code here.
    if (node === this.head) {
      // if it's the head, update head to be the next node in list
      this.head = this.head.next;
    } else if (node === this.tail) {
      // if it's the tail, update tail to be the next to last node in list
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    // Time O(N) | O(1) space
    // Write your code here.
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return node !== null;
  }

  removeNodeBindings(node) {
    // check it wasnt previous head - reassign the node behind to point to the node ahead of the removed
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    // check if it wasnt the tail
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;
