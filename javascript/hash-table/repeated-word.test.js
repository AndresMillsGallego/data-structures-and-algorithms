'use strict';

const repeatedWord = require('./repeated-word');

describe('Testing our repeatedWord function', () => {

  const testString = 'Hello there, how are you?  I am doing great, thank you for asking!';

  test('Should return the first matching word in a string', () => {
    let word = repeatedWord(testString);
    expect(word).toEqual('you');
  });

  test('Should return words when they duplicate back to back and are mixed case', () => {
    let word = repeatedWord('The the');
    expect(word).toEqual('the');
  });

  test('Should return appropriate response when there is not a duplicate word', () => {
    let word = repeatedWord('Hello there, my name is Bob');
    expect(word).toEqual('No match found');
  });
});
