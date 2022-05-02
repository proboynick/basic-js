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
  let resultAddition = [];
  let additionRepeat = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
  let addition = options.hasOwnProperty("addition") ? `${options.addition}` : "";
    for (let i = 0; i < additionRepeat; i++) {
      resultAddition.push(addition);
    }
  let additionSeparator = options.hasOwnProperty("additionSeparator") ? `${options.additionSeparator}` : "|";
    resultAddition = resultAddition.join(additionSeparator);
    str += resultAddition;
    let resultStringElements = [];
    let repeat = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
    for (let i = 0; i < repeat; i++) {
      resultStringElements.push(str);
    }
    return resultStringElements.join(options.hasOwnProperty("separator") ? options.separator : "+");
}

module.exports = {
  repeater
};
