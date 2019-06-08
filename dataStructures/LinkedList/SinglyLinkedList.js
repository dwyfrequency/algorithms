class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(value) {
    const newHead = new Node(value);

    /*
     * if there is no head, then we create a new node and make it
     * both the head and the tail.  B/c the LL is blank
     */
    if (!this.head) {
      this.head = this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  setTail(value) {
    const newTail = new Node(value);
    /*
     * if there is no tail, then we create a new node and make it
     * both the head and the tail. B/c the LL is blank
     */
    if (!this.tail) {
      this.head = this.tail = newTail;
    } else {
      this.head.next = newTail;
      this.head = newTail;
    }
  }
  remove(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (!currentNode.next) {
          // curr
        }
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  insertAtPosition(position, nodeToInsert) {}
  insertBefore(value) {
    const newNode = new Node(value);
  }
  insertAfter() {}
}
