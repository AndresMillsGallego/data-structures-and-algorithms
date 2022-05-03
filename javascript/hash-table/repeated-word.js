'use strict';

const repeatedWord = (string) => {
  let stringyArray = string.toLowerCase().split(/\W+/);
  let array1 = [];
  for (let word of stringyArray) {
    if (array1.includes(word)) {
      return word;
    } else {
      array1.push(word);
    }
  }
  return 'No match found';
};

module.exports = repeatedWord;
