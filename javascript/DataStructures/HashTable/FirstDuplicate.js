'use strict';

let HashTable = require('./HashTable.js');

function findDuplicate(string){
  let arr = string.split(' ');
  let hashTable = new HashTable();
  arr.forEach(element => {
    let key = hashTable.hash(element);
    if(!hashTable.contains(key)){
      hashTable.set(key, element);
    }
    return element;
  });
}

console.log(findDuplicate('hey hey whats the big deal?'));
