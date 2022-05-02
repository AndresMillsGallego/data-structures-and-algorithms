'use strict';

const LinkedList = require('./Linked-List');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let chars = key.split('');
    let asciiSum = chars.reduce((sum, char) => {
      return sum +char.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % 1024;
  }

  set(key, value) {
    let indexPosition = this.hash(key);
    let data = {[key]: value};

    if (this.buckets[indexPosition]) {
      let bucket = this.buckets[indexPosition];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[indexPosition] = bucket;
    }
  }

  get(key) {
    let indexPosition = this.hash(key);
    if(this.buckets[indexPosition]) {
      let bucket = this.buckets[indexPosition];
      let currentRef = bucket.head;
      while (currentRef !== null) {
        if (key in bucket.head.value) {
          let value = bucket.head.value[key];
          return value;
        }
      }
    }
    return null;
  }

  contains(key) {
    let indexPosition = this.hash(key);
    if (this.buckets[indexPosition]) {
      let bucket = this.buckets[indexPosition];
      if (key in bucket.head.value) {
        return true;
      }
    }
    return false;
  }

  keys() {
    let keyList = [];
    for (let obj of this.buckets) {
      if (obj) {
        keyList.push(Object.keys(obj.head.value));
      }
    }
    return keyList;
  }
}

// let table = new HashTable(1024);
// table.set('Xander', 'SuperLindo');
// table.set('Xander', 10);
// console.log(table.contains('Lola'));
// console.log(table.buckets);
// console.log('get', table.get('Xander'));



module.exports = HashTable;
