const { reverseList, ListNode } = require('./reverseList');

describe('testing reverseList func', () => {
  let linkedList;
  let revList;
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

    const L1 = new ListNode(1);
    const L2 = new ListNode(2);
    const L3 = new ListNode(3);
    const L4 = new ListNode(4);
    const L5 = new ListNode(5);
    revList = L5;
    L5.next = L4;
    L4.next = L3;
    L3.next = L2;
    L2.next = L1;
    revList = L5;
  });
  test('should reverse list', () => {
    expect(reverseList(linkedList)).toEqual(revList);
  });
});
