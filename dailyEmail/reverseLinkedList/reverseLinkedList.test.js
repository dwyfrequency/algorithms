const { ListNode, reverseLinkedList } = require('./reverseLinkedList');

describe('reverseLinkedList', () => {
  let head;
  beforeEach(() => {
    head = null;
  });
  test('should reverse linked list', () => {
    // list one
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    n1.next = n2;
    n2.next = n3;

    // rev list
    const rl1 = new ListNode(3);
    const rl2 = new ListNode(2);
    const rl3 = new ListNode(1);
    rl1.next = rl2;
    rl2.next = rl3;

    expect(reverseLinkedList(n1)).toEqual(rl1);
  });
});
