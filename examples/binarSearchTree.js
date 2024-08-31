// example.js

const BinarySearchTree = require('./binarySearchTree');

// Create a new binary search tree instance
const bst = new BinarySearchTree();

// Insert elements into the BST
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);

// Search for values in the BST
console.log('Search results:');
console.log('Does 10 exist in the BST?', bst.search(10)); // Output: true
console.log('Does 5 exist in the BST?', bst.search(5));   // Output: true
console.log('Does 15 exist in the BST?', bst.search(15)); // Output: true
console.log('Does 2 exist in the BST?', bst.search(2));   // Output: true
console.log('Does 7 exist in the BST?', bst.search(7));   // Output: true
console.log('Does 20 exist in the BST?', bst.search(20)); // Output: false
console.log('Does 8 exist in the BST?', bst.search(8));   // Output: false

// Perform and print tree traversals
console.log('Inorder Traversal:', bst.inorderTraversal());   // Output: [2, 5, 7, 10, 15]
console.log('Preorder Traversal:', bst.preorderTraversal()); // Output: [10, 5, 2, 7, 15]
console.log('Postorder Traversal:', bst.postorderTraversal()); // Output: [2, 7, 5, 15, 10]
