const mkNode = (value, next = null) => ({ value, next });
const nums = mkNode(1, mkNode(2, mkNode(3)));

// {1, {2, {3, null}}} -> {2, {3, null}} -> {3, null}

const logReversedLinkedList = headNode => {
  if (!headNode) return;
  logReversedLinkedList(headNode.next);
  console.log(headNode.value);
};

logReversedLinkedList(nums); // 3, 2, 1

const reversedLinkedList = (headNode, newList = null) => {
  if (!headNode) return newList; // once we've reached tail of original LL return our newList
  const list = mkNode(headNode.value, newList); // create new list node with our currentNodeValue and the newList as it's next property
  // once we hit base case just bubble up the created list
  return reversedLinkedList(headNode.next, list);
};

// const reversedLinkedList = headNode => {
//   if (!headNode) return;
//   reversedLinkedList();
//   const newNode = mkNode(headNode.value);
// };

console.log(reversedLinkedList(nums)); // returns { value: 3, next: { value: 2, next: { value: 1, next: null } } }
