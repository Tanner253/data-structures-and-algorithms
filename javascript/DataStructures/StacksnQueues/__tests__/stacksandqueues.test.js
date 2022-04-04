'use strict';

let { Stack, Queue } = require('../Stack.js');

describe('Testing Stacks and queues', () =>{
  test('should push onto stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
  });

  test('should push multiple values to the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.peek()).toEqual(4);
  });

  test('should push onto stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    let ans = stack.pop();

    expect(ans).toEqual(2);
  });

  test('can pop a stack to empty', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toEqual(null);
  });

  test('should successfully peek value', () => {
    let stack = new Stack();
    expect(stack.peek()).toEqual(null);
    stack.push(5);
    expect(stack.peek()).toEqual(5);
  });

  test('should successfully instantiate empty', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });
});
