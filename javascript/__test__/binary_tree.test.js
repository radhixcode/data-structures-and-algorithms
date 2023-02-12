const bst1 = require("../binary_tree_preorder_traversal");
const bst2 = require("../binary_tree_reverse");

describe("Binary tree Test", () => {
  test("1. Pre order traversal", () => {
    const binaryTree = new bst1.TreeNode(1);
    binaryTree.right = new bst1.TreeNode(2);
    binaryTree.right.left = new bst1.TreeNode(3);
    expect(bst1.preorderTraversal(binaryTree)).toStrictEqual([1, 2, 3]);
  });
  test("2. Binary tree reversal", () => {
    const binaryTree = new bst2.TreeNode(1);
    binaryTree.right = new bst2.TreeNode(2);
    binaryTree.right.left = new bst2.TreeNode(3);
    const reversedTree = bst2.invertTree(binaryTree);
    expect(bst1.preorderTraversal(binaryTree)).toStrictEqual([1, 2, 3]);
    expect(bst1.preorderTraversal(reversedTree)).toStrictEqual([1, 2, 3]);
  });
});
