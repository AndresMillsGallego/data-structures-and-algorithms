'use strict';

function validateBrackets(string) {
  let stack = [];
  let brackets = '({[]})';
  for (let i = 0; i < string.length; i++) {
    let lastBracket = stack[stack.length - 1];
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      stack.push(string[i]);
    } else if ((lastBracket === '(' && string[i] === ')')
      || (lastBracket === '[' && string[i] === ']')
      || (lastBracket === '{' && string[i] === '}')) {
      console.log(stack, string[i]);
      stack.pop();
    } else if (!brackets.includes(string[i])) {
      continue;
    } else {
      return false;
    }
  }
  return (stack.length === 0);
}


module.exports = validateBrackets;
