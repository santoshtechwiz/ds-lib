// BinarySearchTree.js

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertRecursively(this.root, newNode);
      }
    }
  
    _insertRecursively(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertRecursively(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertRecursively(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this._searchRecursively(this.root, value);
    }
  
    _searchRecursively(node, value) {
      if (node === null) {
        return false;
      }
      if (node.value === value) {
        return true;
      }
      if (value < node.value) {
        return this._searchRecursively(node.left, value);
      } else {
        return this._searchRecursively(node.right, value);
      }
    }
  
    inorderTraversal() {
      const result = [];
      this._inorderTraversalRecursively(this.root, result);
      return result;
    }
  
    _inorderTraversalRecursively(node, result) {
      if (node !== null) {
        this._inorderTraversalRecursively(node.left, result);
        result.push(node.value);
        this._inorderTraversalRecursively(node.right, result);
      }
    }
  
    preorderTraversal() {
      const result = [];
      this._preorderTraversalRecursively(this.root, result);
      return result;
    }
  
    _preorderTraversalRecursively(node, result) {
      if (node !== null) {
        result.push(node.value);
        this._preorderTraversalRecursively(node.left, result);
        this._preorderTraversalRecursively(node.right, result);
      }
    }
  
    postorderTraversal() {
      const result = [];
      this._postorderTraversalRecursively(this.root, result);
      return result;
    }
  
    _postorderTraversalRecursively(node, result) {
      if (node !== null) {
        this._postorderTraversalRecursively(node.left, result);
        this._postorderTraversalRecursively(node.right, result);
        result.push(node.value);
      }
    }
  }
  
  module.exports = BinarySearchTree;
  