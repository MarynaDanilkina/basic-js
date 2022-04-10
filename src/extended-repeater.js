const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  let separator = (options.separator !== undefined) ? options.separator : '+';
  let addition = (options.addition !== undefined) ? options.addition : '';
  let additionRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';
  let length1 = additionSeparator.length
  let length2 = separator.length
  let addAdd = (addition + additionSeparator).repeat(additionRepeatTimes)
  let sliceAddition = addAdd.slice(0, -(length1))
  let strSliceSeparator = (str + sliceAddition + separator).repeat(repeatTimes)
  let sliceAddition2 = strSliceSeparator.slice(0, -(length2))
  return sliceAddition2
}
module.exports = {
  repeater
};
