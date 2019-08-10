const { reverseList, ListNode } = require('./reverseList');

describe('testing reverseList func', () => {
  let linkedList;
  beforeEach(() => {
    const l1 = new ListNode(1);
    const l2 = new ListNode(2);
    const l3 = new ListNode(3);
    const l4 = new ListNode(4);
    const l5 = new ListNode(5);
    l1.next = l2;
    l2.next = l3;
    l3.next = l4;
    l4.next = l5;
    linkedList = l1;
  });
  test('should ', () => {
    console.log(linkedList);
  });
});
