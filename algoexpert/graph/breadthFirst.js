// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // Time O(v + e) | Space O(v)
  // space (v) is b/c our array will return all vertices
  // also, worst case it is a depth of one so our queue could contain all
  // vertices
  breadthFirstSearch(array) {
    // Write your code here.
    const queue = [this];
    const set = new Set();
    while (queue.length) {
      const currentNode = queue.shift();
      set.add(currentNode);
      array.push(currentNode.name);
      currentNode.children.forEach(
        child => !set.has(child) && queue.push(child)
      );
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
