'use strict';

let { LinkedList, Node } = require('../LinkedList.js');

describe('Testing Linked List', () => {
  test('should create linked list ', () => {
    let ll = new LinkedList();
    expect(ll).toBeTruthy();
  });

  test('can insert value into linked list', () => {
    let node = new Node(6);
    let ll = new LinkedList();
    ll.head = node;
    expect(ll.head).toEqual(node);
  });

  test('head property properly points to head node', () => {
    let ll = new LinkedList();
    ll.head = new Node(10);
    ll.head.next = new Node(11);
    expect(ll.head.val).toEqual(10);
  });

  test('head property properly append', () => {
    let ll = new LinkedList();
    ll.head = new Node(10);
    ll.head.next = new Node(11);
    ll.append(12);
    expect(ll.head.next.next.val).toEqual(12);
  });

  test('head property properly insertBefore', () => {
    let ll = new LinkedList();
    ll.head = new Node(10);
    ll.head.next = new Node(11);
    ll.insertBefore(11, 8);
    expect(ll.head.next.val).toEqual(8);
  });

  test('head property properly insertAfter', () => {
    let ll = new LinkedList();
    ll.head = new Node(10);
    ll.head.next = new Node(11);
    ll.insertAfter(11, 8);
    expect(ll.head.next.next.val).toEqual(8);
  });

  test('can properly insert multiple nodes', () => {
 
    let ll = new LinkedList();
    ll.head = new Node(1);
    ll.insertHead(2);
    ll.insertHead(3);
    ll.insertHead(4);
    ll.insertHead(5);

    expect(ll.head.next.next.val).toEqual(3);
  });
});
