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
      this.insertBefore(this.head, node);
    }
  }

  setTail(node) {
    // Time O(1) | O(1) space
    // Write your code here.
    if (!this.tail) {
      this.setHead(node);
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  insertBefore(node, nodeToInsert) {
    // Time O(1) | O(1) space
    // Write your code here.
    if (
      nodeToInsert.value === this.head.value &&
      nodeToInsert.value === this.tail.value
    ) {
      // if nodeToInsert equals the only value in a linked list of 1, dont do anything
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      // if node is head, new node as head
      this.head = nodeToInsert;
    } else {
      // if it was not head, we need to update the before node to point to our node to insert
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    // Time O(1) | O(1) space
    // Write your code here.
    if (
      nodeToInsert.value === this.head.value &&
      nodeToInsert.value === this.tail.value
    ) {
      // if nodeToInsert equals the only value in a linked list of 1, dont do modify anything
      return;
    }
    // remove item if already in list
    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;
    if (node.next === null) {
      this.head = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    // Time O(P) | O(1) space where P stands for position
    // Write your code here.
    if (position === 1) {
      this.setHead(nodeToInsert);
    } else {
      let currentNode = this.head.next;
      let counter = 1;
      while (currentNode && position !== counter) {
        currentNode = currentNode.next;
        counter++;
      }
      if (currentNode) {
        // node exists and there is a position - set it
        this.insertBefore(currentNode, nodeToInsert);
      } else {
        // set new value as the tail
        this.setTail(nodeToInsert);
      }
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
    if (node.value === this.head.value) {
      // if it's the head, update head to be the next node in list
      this.head = this.head.next;
    }
    if (node.value === this.tail.value) {
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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const ll = new DoublyLinkedList();
ll.setHead(new Node(1));
console.log(ll);
console.log('----------------');
ll.remove(new Node(1));
console.log(ll);

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;
