/**
 * Definition for a Linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} node
 * @return {String}
 */
ListNode.prototype.printList = function (node) {
  let llArray = [];
  while (node != null) {
    llArray.push(node.val);
    node = node.next;
  }
  return llArray.join("->");
};


// ------------------------------------------------------
// | currentNode  | prevNode     | nextNode          |
// |----------------------------------------------------|
// | 6->7->8->null | null          | null               |
// |----------------------------------------------------|
// | 7->8->null    | 6->null       | 7->8->null => null |
// |----------------------------------------------------|
// | 8->null       | 7->6->null    | 8->null => null    |
// |----------------------------------------------------|
// | null          | 8->7->6->null | null               |
// ------------------------------------------------------
// https://favtutor.com/resources/images/uploads/mceu_65326981911623050226554.gif
/**
 * @param {ListNode} head
 * @return {ListNode}
 *//**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let currNode = head;
  let prevNode = null;
  while (currNode) {
    let tempNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNode;
  }
  return prevNode;
};

var llReverseRec = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let rest = llReverseRec(head.next);
  head.next.next = head;
  head.next = null;
  return rest;
};

module.exports = { ListNode, reverseList };
