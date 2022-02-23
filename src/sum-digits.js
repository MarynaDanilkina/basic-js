const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = ('' + n).split('').map(Number)
  console.log(arr)


  let a = arr.reduce((a, b) => (a + b))
  let arr1 = ('' + a).split('').map(Number)
  if (arr1.length > 1) {
    return arr1.reduce((a, b) => (a + b))
  }

  return +(arr1.join(''))

}
module.exports = {
  getSumOfDigits
};
