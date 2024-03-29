class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 1;
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
        this.size++;
      }
    } catch (error) {
      console.log('Error with adding a Node to the HEAD: ', error);
    }
  }

  append(value) {
    try {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      this.size++;
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
          console.log('true');
          return true;
        }
        current = current.next;
      }
      console.log('false');
      return false;
    } catch (e) {
      console.error(e);
    }
  }

  insertBefore(insertBefore, value) {
    let current = this.head;
    while (current.next.val !== insertBefore) {
      current = current.next;
    }
    let temp = current.next;
    current.next = new Node(value);
    current.next.next = temp;
    this.size++;
  }

  insertAfter(insertAfter, value) {
    let current = this.head;
    while (current.val !== insertAfter) {
      current = current.next;
    }
    let temp = current.next;
    current.next = new Node(value);
    current.next.next = temp;
    this.size++;
  }

  toString() {
    try {
      let current = this.head;
      let output = '';
      while (current !== null) {
        output += `[ ${current.val} ] -> `;
        current = current.next;
      }
      output += 'NULL';
      return output;
    } catch (e) {
      console.error(e);
    }
  }

  kthFromTheEnd(k) {
    let current = this.head;
    let idx = this.size - k;
    for (var i = 0; i < idx; i++) {
      current = current.next;
    }
    console.log(current.val);
    return current.val;
  }

  zipTwoLists(A, B) {
    //sets the starting node reference
    let ACurr = A.head;
    let BCurr = B.head;
    // While neither list is null, add the values to the new list alternatively
    while (ACurr !== null && BCurr !== null) {

      this.append(ACurr.value);
      this.append(BCurr.value);
      ACurr = ACurr.next;
      BCurr = BCurr.next;
    }
    // if one list is longer and the algorithm breaks out of the while loop, add the rest of the values to the new list
    if (BCurr) {
      while (BCurr !== null) {
        this.append(BCurr.value);
        BCurr = BCurr.next;
      }
    } else if (ACurr) {
      while (ACurr !== null) {
        this.append(ACurr.value);
        ACurr = ACurr.next;
      }

    }
  }

  findMiddle() {
    let current = this.head;
    let runner = this.head;
    while (runner !== null && runner.next !== null) {
      current = current.next;
      runner = runner.next.next;
    }
    console.log('middle', current.val);
    return current.val;

  }
}
// function zip(list1, list2) {}

let primaryList = new LinkedList();
primaryList.insertHead(4);
primaryList.insertHead(5);
primaryList.insertHead(6);
let mergeList = new LinkedList();
mergeList.insertHead(1);
mergeList.insertHead(2);
mergeList.insertHead(3);

// zip(primaryList, mergeList);

let ll = new LinkedList();
ll.insertHead(13);
ll.insertHead(51);
ll.insertHead(67);
ll.insertHead(128);
ll.insertHead(999);

console.log(ll.head.value);
console.log(ll.includes(999));
console.log(ll.toString());
ll.findMiddle();
ll.append(8888);
console.log(ll.toString());
ll.insertBefore(8888, 7777);
console.log(ll.toString());
ll.insertAfter(999, 222);
console.log(ll.toString());
console.log(ll.size);
ll.kthFromTheEnd(3);





module.exports = { LinkedList, Node };


