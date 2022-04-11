"use strict";

let list = [];
const Node = require('./Node.js');
class BinaryTree {
  constructor(node) {
    this.root = node ? node : null;
  }

  recursiveBinarySearchPre(root) {
    if (root !== null) {
      list.push(root.value);
      if(root.left !== null){
        this.recursiveBinarySearchPre(root.left);
      }
      if(root.right !== null){
        this.recursiveBinarySearchPre(root.right);
      }
      return list;
    }
  }
  recursiveBinarySearchIn(root) {
    if (root !== null) {
      if(root.left !== null){
        this.recursiveBinarySearchPre(root.left);
      }
      console.log(root.value);
      if(root.right !== null){
        this.recursiveBinarySearchPre(root.right);
      }
    }
  }
  recursiveBinarySearchPost(root) {
    if (root !== null) {
      if(root.left !== null){
        this.recursiveBinarySearchPre(root.left);
      }
      if(root.right !== null){
        this.recursiveBinarySearchPre(root.right);
      }
      console.log(root.value);
    }
  }
}


let startRoot = new Node(5);
let binaryTree = new BinaryTree(startRoot);
startRoot.left = new Node(3);
startRoot.right = new Node(1);
startRoot.left.left = new Node(9);
startRoot.left.right = new Node(9);
startRoot.right.right = new Node(11);
startRoot.right.left = new Node(11);
let arr = binaryTree.recursiveBinarySearchPre(binaryTree.root);
let max = Math.max(...arr);
console.log(max);
// binaryTree.recursiveBinarySearchIn(binaryTree.root);
// binaryTree.recursiveBinarySearchPost(binaryTree.root);



