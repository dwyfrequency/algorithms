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

const breadthFirstSearch = (node, callback) => {
  const queue = [node];
  while (queue.length) {
    const currentNode = queue.shift();
    callback(currentNode.value);
    queue.push(...currentNode.children);
  }
};

breadthFirstSearch(a, console.log);
