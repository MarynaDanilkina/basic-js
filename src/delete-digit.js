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
  let str = String(n)
  let arr = ('' + n).split('').map(Number)
  if (str.length === 2) {
    return Math.max(...arr)
  }
  for (i = 0; i < str.length; i++) {

    if (+str[i] < +str[i + 1]) {
      return +(('' + n).replace(+str[i], ''))
    }
  }


}

module.exports = {
  deleteDigit
};
