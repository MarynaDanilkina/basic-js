const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (n = 0; n < arr.length; n++) {
    if (arr[n] === -1) { continue; }
    for (i = n + 1; i < arr.length; i++) {
      if (arr[i] === -1) { continue; }
      if (arr[n] > arr[i]) {
        const buff = arr[n];
        arr[n] = arr[i];
        arr[i] = buff
      }
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
