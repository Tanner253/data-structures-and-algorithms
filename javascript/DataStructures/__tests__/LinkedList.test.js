"use strict";

let { LinkedList, Node } = require("../LinkedList.js");

describe("Testing Linked List", () => {
  test("should create linked list ", () => {
    let ll = new LinkedList();
    expect(ll).toBeTruthy();
  });

  test("can insert value into linked list", () => {
    let node = new Node(6);
    let ll = new LinkedList();
    ll.head = node;
    expect(ll.head).toEqual(node);
  });

  test("head property properly points to head node", () => {
    let node = new Node(6);
    let ll = new LinkedList();
    ll.head = new Node(10);
    ll.insert(ll, node);

    expect(ll.head.val).toEqual(10);
  });

  test("can properly insert multiple nodes", () => {
    let lastnode = new Node(2);
    let node2 = new Node(3);
    let node3 = new Node(4);
    let node4 = new Node(5);
    let ll = new LinkedList();
    ll.head = new Node(1);
    let catch1 = ll.insert(ll.head, lastnode);
    let catch2 = ll.insert(catch1, node2);
    let catch3 = ll.insert(catch2, node3);
    let catch4 = ll.insert(catch3, node4);

    expect(catch4.next.next.val).toEqual(3);
  });
});
