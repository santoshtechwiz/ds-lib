// __tests__/binarySearchTree.test.js

const BinarySearchTree = require('../lib/binarySearchTree');

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('should insert and search values correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(2);
    bst.insert(7);

    expect(bst.search(10)).toBe(true);
    expect(bst.search(5)).toBe(true);
    expect(bst.search(15)).toBe(true);
    expect(bst.search(2)).toBe(true);
    expect(bst.search(7)).toBe(true);
    expect(bst.search(20)).toBe(false);
    expect(bst.search(8)).toBe(false);
  });

  test('should perform inorder traversal correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(2);
    bst.insert(7);

    expect(bst.inorderTraversal()).toEqual([2, 5, 7, 10, 15]);
  });

  test('should perform preorder traversal correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(2);
    bst.insert(7);

    expect(bst.preorderTraversal()).toEqual([10, 5, 2, 7, 15]);
  });

  test('should perform postorder traversal correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(2);
    bst.insert(7);

    expect(bst.postorderTraversal()).toEqual([2, 7, 5, 15, 10]);
  });
});
