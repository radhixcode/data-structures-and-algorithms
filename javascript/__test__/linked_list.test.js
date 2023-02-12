const ll1 = require("../linked_list_reverse");

describe("Linked list Test", () => {
  test("1. Linked list reverse", () => {
    let llNode = new ll1.ListNode(6);
    llNode.next = new ll1.ListNode(7);
    llNode.next.next = new ll1.ListNode(8);
    llNode.next.next.next = new ll1.ListNode(9);
    let reverseList = ll1.reverseList(llNode);
    expect(llNode.printList(reverseList)).toStrictEqual("9->8->7->6");
  });
});
