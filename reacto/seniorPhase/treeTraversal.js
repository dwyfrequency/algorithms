// Solution - https://gist.github.com/dhf-fullstack/6606447fae2efefaa840a61db5be26b1

// starter data for tests
function node(value) {
  return {
    value,
    children: [],
  };
}
const a = node('a');
const b = node('b');
const c = node('c');
const d = node('d');
const e = node('e');
const f = node('f');
const g = node('g');
const h = node('h');
const i = node('i');
const j = node('j');
const k = node('k');
const l = node('l');
const m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

/*
 * We use a queue to store our nodes. We then run our node value
 * through our callback and add the children. This way he do everything on
 * each depth first
 */
// breadthFirst: Each "level" of the tree is printed in order
const breadthFirstSearch = (startNode, callback) => {
  const queue = [startNode];
  while (queue.length) {
    const currentNode = queue.shift();
    callback(currentNode.value);
    queue.push(...currentNode.children);
  }
};

// depthFirstPreOrder: Children nodes are visited before sibling nodes

const depthFirstPreOrder = (startNode, callback = console.log) => {
  callback(startNode.value);
  startNode.children.forEach(child => depthFirstPreOrder(child));
};

// depthFirstPostOrder: A node is not traversed until all its children are reached
const depthFirstPostOrder = (startNode, callback = console.log) => {
  startNode.children.forEach(child => depthFirstPostOrder(child));
  callback(startNode.value);
};

// Test
// breadthFirstSearch(a, console.log);
// depthFirstPreOrder(a);
depthFirstPostOrder(a);
