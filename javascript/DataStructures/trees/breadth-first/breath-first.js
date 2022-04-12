'use strict';


const BT = require('../BinaryTree.js');
const Node = require('../Node.js');

let bt = new BT(new Node(20));
bt.left = new Node(3);
bt.right = new Node(1);
bt.left.left = new Node(9);
bt.left.right = new Node(9);
bt.right.right = new Node(11);
bt.right.left = new Node(11);

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  dequeue() {
    let temp = new Node();
    temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  enqueue(value) {
    let node = new Node(value);
    this.rear.next = node;
    this.rear = node;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front.value ? true : false;
  }
}

function breadthFirst(root){
  let breadth = new Queue();
  breadth.enqueue(root);

  while(!breadth.isEmpty()){
    breadth.front = breadth.dequeue();
    console.log(this.front.value);

    if(this.front.left !== null){
      breadth.enqueue(this.front.left);
    }

    if(this.front.right !== null){
      breadth.enqueue(this.front.right);
    }
  }
}

breadthFirst(bt.root);

// ALGORITHM breadthFirst(root)
// // INPUT  <-- root node
// // OUTPUT <-- front node of queue to console

//   Queue breadth <-- new Queue()
//   breadth.enqueue(root)

//   while ! breadth.is_empty()
//     node front = breadth.dequeue()
//     OUTPUT <-- front.value

//     if front.left is not NULL
//       breadth.enqueue(front.left)

//     if front.right is not NULL
//       breadth.enqueue(front.right)