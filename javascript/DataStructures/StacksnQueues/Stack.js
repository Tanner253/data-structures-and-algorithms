'use strict';

class Node {
  constructor (value) {
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
    temp = this.top;
    this.top = this.top.next;
    temp.next;
    return temp.value;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top.next = node;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    this.top? true : false;
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
