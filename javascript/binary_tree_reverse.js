/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var invertTree = function (root) {
  function reverseNode(node) {
    if (node == null) {
      return null;
    }
    reverseNode(node.left);
    reverseNode(node.right);
    let holdLeft = node.left;
    node.left = node.right;
    node.right = holdLeft;
    return node;
  }
  return reverseNode(root);
};

module.exports = { TreeNode, invertTree };
