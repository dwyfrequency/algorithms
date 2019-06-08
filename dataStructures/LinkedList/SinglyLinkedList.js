/**
 * Note, in our node class we have a prev property.
 * This should never be used in a singly linked list
 *  */

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
      this.tail.next = newTail;
      this.tail = newTail;
    }
  }
  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let parentNode = this.head;
    let currentNode = this.head.next;
    while (currentNode) {
      if (currentNode.value === value) {
        if (!currentNode.next) {
          // is it the tail
          this.tail = parentNode;
          this.tail.next = null;
        } else {
          this.parentNode.next = this.currentNode.next;
        }
        break;
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
  insertAtPosition(position, nodeToInsert) {
    if (position === 0) {
      this.setHead(nodeToInsert);
    }
    let parentNode = this.head;
    let currentNode = this.head.next;
    let counter = 1;
    while (currentNode) {
      if (counter === position) {
        if (!currentNode.next) {
          // is it the tail
          this.tail.next = nodeToInsert;
          this.tail = nodeToInsert;
        } else {
          nodeToInsert.next = this.parentNode.next;
          this.parentNode.next = nodeToInsert;
          nodeToInsert.next = this.currentNode;
        }
        break;
      }
      parentNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
  }
  insertBefore(value) {
    const newNode = new Node(value);
  }
  insertAfter() {}
}
