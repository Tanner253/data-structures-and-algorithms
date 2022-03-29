class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      current = current.next;
    }
  }

  insertHead(value) {
    try {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    } catch (error) {
      console.log("Error with adding a Node to the HEAD: ", error);
    }
  }
  append(value) {
    try {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      current.next.next = null;
    } catch (e) {
      console.error(e);
    }
  }

  includes(value) {
    try {
      let current = this.head;
      while (current !== null) {
        if (current.val === value) {
          console.log("true");
          return true;
        }
        current = current.next;
      }
      console.log("false");
      return false;
    } catch (e) {
      console.error(e);
    }
  }

  insertBefore(insertBefore, value) {
    let current = this.head;
    while(current.next.val !== insertBefore){
      current = current.next;
    }
    let temp = current.next;
    current.next = new Node(value);
    current.next.next = temp;
  }

  insertAfter(insertAfter, value){
    let current = this.head;
    while(current.val !== insertAfter){
      current = current.next;
    }
    let temp = current.next;
    current.next = new Node(value);
    current.next.next = temp;
  }

  toString() {
    try {
      let current = this.head;
      let output = "";
      while (current !== null) {
        output += `[ ${current.val} ] -> `;
        current = current.next;
      }
      output += "NULL";
      console.log(output);
    } catch (e) {
      console.error(e);
    }
  }
}
let ll = new LinkedList();
ll.insertHead(13);
ll.insertHead(51);
ll.insertHead(67);
ll.insertHead(128);
ll.insertHead(999);

console.log(ll.head.value);
console.log(ll.includes(999));
console.log(ll.toString());
ll.append(8888);
console.log(ll.toString());
ll.insertBefore(8888, 7777);
console.log(ll.toString());
ll.insertAfter(999, 222);
console.log(ll.toString());

module.exports = { LinkedList, Node };
