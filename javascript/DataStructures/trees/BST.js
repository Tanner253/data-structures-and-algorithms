'use strict';

const Node = require('./Node.js');
const BT = require('./BinaryTree.js');

class BinarySearchTree{
  constructor(root){
    root? this.root = root : root = null;
  }

  contains(value){
    if(this.root !== null){
      let arr = BT.recursiveBinarySearchPre(this.root);
      arr.forEach(val => {
        if( val === value){
          return true;
        }
      });
    }
    return false;
  }

  //insert into binary tree with O(n log(n))

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let curr = this.root;
    while (!(curr && curr.value)) {
      if (curr.value < node.value) {
        curr = curr.rightChild;
      } else if (curr.value > node.value) {
        curr = curr.leftChild;
      } else {
        curr = null;
      }
    }
    curr = node;
  }
}

let startRoot = new Node(10);
let binarySearchTree = new BinarySearchTree(startRoot);
startRoot.left = new Node(9);
startRoot.right = new Node(11);
// startRoot.left.left = new Node(7);
// startRoot.left.right = new Node(8);
// startRoot.right.right = new Node(15);
// startRoot.right.left = new Node(13);

console.log(binarySearchTree);
binarySearchTree.insert(20);
console.log(binarySearchTree);
