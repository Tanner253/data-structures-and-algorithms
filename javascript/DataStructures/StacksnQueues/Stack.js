"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    let temp = new Node();
    if(this.top === null){
      return null;
    }
    temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  push(value) {
    let newnode = new Node(value);
    if (this.top !== null) {
      newnode.next = this.top;
      this.top.next = newnode;
    }
    this.top = newnode;
  }

  peek() {
    if(this.top !== null){
      return this.top.value;
    }
    else return null;
  }

  isEmpty() {
    if(this.top !== null){
      return false;
    }
    return true;
  }
}

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

class PseudoQueue
{
  constructor() {
    this.front = null;
    this.back = null;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    let node = new Node(value);
    if(!this.stack2.pop()){
      this.front = node;
      this.back = node;
    }
    node.next = this.back;
    this.back = node;
    this.stack2.push(node);
  }

  dequeue(){
    while(this.stack2.isEmpty() === false){
      this.stack1.push(this.stack2.pop());
    }

    let temp = new Node();
    temp = this.front;
    this.front = this.front.next;
    temp.next = null;

    while(this.stack1.isEmpty() === false){
      this.stack2.push(this.stack1.pop());
    }
  }
}

let Sq = new PseudoQueue();
Sq.enqueue(1);
Sq.enqueue(6);
Sq.enqueue(7);
Sq.enqueue(8);
console.log(Sq);

Sq.dequeue();
Sq.dequeue();
console.log(Sq);


module.exports = {
  Stack,
  Queue,
};
