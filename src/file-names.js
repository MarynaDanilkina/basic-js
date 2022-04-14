const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];
  let result = [];
  let dubl = 1;

  let dub = 1;
  for (i = 0; i < names.length; i++) {
    if (result.indexOf(names[i])) {
      result.push(names[i])
    } else {
      result.push(`${names[i]}(${dubl++})`)
    }
  }
  for (i = 0; i < result.length; i++) {
    if (!arr.includes(result[i])) {
      arr.push(result[i])
      console.log('+')
    } else {
      arr.push(`${result[i]}(${dub++})`)
      console.log('-')
    }
  }
  console.log(result)
  return arr
}
module.exports = {
  renameFiles
};
