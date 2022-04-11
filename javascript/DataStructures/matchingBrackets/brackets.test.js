'use strict';

const validateBrackets = require('./validate-brackets');

describe('Testing our validateBrackets function', () => {

  test('Should return true if the brackets are balanced', () => {
    let str = '([DQWAWDGAWDWAD])';
    let result = validateBrackets(str);
    expect(result).toEqual(true);
  });

  test('Should return false if the brackets are not balanced', () => {
    let str = '([QWDWFAWEGW}]])';
    let result2 = validateBrackets(str);
    expect(result2).toEqual(false);
  });
});