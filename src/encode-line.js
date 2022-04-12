const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let sum = 1;
  let result = [];
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      sum++;

    } else {
      if (sum !== 1)
        result.push(sum);
      result.push(arr[i])
      sum = 1;
    }
  }

  return result.join('')

}
encodeLine('aaaatttt')
module.exports = {
  encodeLine
};
