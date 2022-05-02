const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strN = "" + n;
  let numbers = [];
  for (let i = 0; i < strN.length; i++) {
      let tmp = strN.split('');
      tmp.splice(i, 1);
      numbers.push(Number.parseInt(tmp.join('')));
  }
  numbers.sort((a, b) => {return a - b});
  return numbers[numbers.length - 1];
}

module.exports = {
  deleteDigit
};
