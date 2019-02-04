/* Write a function named convert() that takes string values and changes each value to number, and returns a single array

  For Example:
    convert("1", "2", "3") => [1,2,3]
*/

const convert = (...args) => {
  return args.map(num => parseInt(num))
    .filter(num => !isNaN(num))
};

module.exports = convert;





// var elements = args.map((num) => parseInt(num))
// const filtered = elements.filter(element => !isNaN(element));
// return filtered;
  // return args.map((num) => parseInt(num))
  //   .filter(element => !isNaN(element));