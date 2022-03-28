class Node{
  constructor(value){
    this.val = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  traverse(){
    let current = head;
    while(current !== null){
      current = current.next;
    }
  }

  insert(head, node){
    try{
      let current = head;
      if(head === null){
        head = node;
        return head;
      }
      else{
        node.next = current;
      }
      return node;
    }catch(e){
      console.error(e);
    }
  }

  includes(head, value){
    let current = head;
    while(current !== null){
      if(current.val === value){
        console.log("true");
        return true;
      }
      current = current.next;
    }
    console.log("false")
    return false;
  }

  toString(head){
    let current = head;
    let output = ""
    while(current !== null){
      output += `[ ${current.val} ] -> `
      current = current.next;
    }
    output += "NULL"
    console.log(output);
  }
}

let ll = new LinkedList();
let insertNode = new Node(9999);
let nodeA = new Node(20);
let nodeB = new Node(21);
ll.head  = nodeA;
ll.head.next = nodeB;

let newLL = ll.insert(ll.head, insertNode);
ll.includes(newLL, 22)
ll.toString(newLL);

module.exports = { LinkedList, Node };