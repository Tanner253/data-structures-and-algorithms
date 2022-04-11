'use strict';

const { AnimalShelter, Stack } = require('./animal-shelter');

describe('Testing animal shelter', () => {

  test('Should create a new instance of the Stack clas', () => {
    let newStack = new Stack();
    expect(newStack.top).toEqual(null);
  });

  test('Should add a new Animal Node to the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push('cat');
    expect(newStack.top.value).toEqual('cat');
  });

  test('Should remove the Node from the top of the Stack', () => {
    let newStack = new Stack();
    newStack.push('dog');
    newStack.push('cat');
    newStack.push('cat');
    let poppedValue = newStack.pop();
    expect(newStack.top.value).toEqual('cat');
    expect(poppedValue).toEqual('cat');
  });

  test('Should create a new instance of the AnimalShelter class with 2 empty Stacks inside', () => {
    let fuzzyQueue = new AnimalShelter();
    expect(fuzzyQueue.frontStack.top).toEqual(null);
    expect(fuzzyQueue.backStack.top).toEqual(null);
  });

});
