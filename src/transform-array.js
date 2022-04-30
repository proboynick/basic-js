const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let transformedArray = []
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next": 
      i < arr.length - 1 ? i++ : i ;
        break;
      case "--discard-prev": 
      i > 0 ? transformedArray.includes(arr[i - 1]) ? transformedArray.pop() : i : i ;
        break;
      case "--double-next": 
      i < arr.length - 1 ? transformedArray.push(arr[i + 1]) : i;
        break;
      case "--double-prev": 
      i > 0 ? transformedArray.includes(arr[i - 1]) ? transformedArray.push(arr[i - 1]) : i : i;
        break;
      default: transformedArray.push(arr[i]);
        break;
    }
  }
  return transformedArray;
}

module.exports = {
  transform
};
