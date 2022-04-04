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

module.exports = {
  Stack,
  Queue,
};
