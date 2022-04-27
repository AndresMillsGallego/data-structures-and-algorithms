'use strict';

const validateBrackets = require('./validate-brackets');

describe('Testing our validateBrackets function', () => {

  test('Should return true if the brackets are balanced', () => {
    let testString = '(Hello[There.  How] are you)';
    let result = validateBrackets(testString);
    expect(result).toEqual(true);
  });

  test('Should return false if the brackets are not balanced', () => {
    let testString2 = '(Hello[There.  How] are you])';
    let result2 = validateBrackets(testString2);
    expect(result2).toEqual(false);
  });
});
